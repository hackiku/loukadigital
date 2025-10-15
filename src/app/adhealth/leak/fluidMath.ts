
// src/app/adhealth/leak/fluidMath.ts
// Fluid dynamics simulation based on Jos Stam's "Real-Time Fluid Dynamics for Games"

// https://codepen.io/neave/pen/bGdwGev

export class FluidSimulation {
	// Grid dimensions
	public readonly fieldWidth: number;
	public readonly fieldHeight: number;
	private readonly rowSize: number;
	private readonly size: number;

	// Fluid field arrays (density and velocity)
	private dens: Float32Array;
	private dens_prev: Float32Array;
	private u: Float32Array; // horizontal velocity
	private u_prev: Float32Array;
	private v: Float32Array; // vertical velocity
	private v_prev: Float32Array;

	// Simulation parameters
	private readonly iterations = 4;
	private readonly dt = 0.05; // time step
	private readonly damp = 0.985; // damping factor

	// Source configuration
	private readonly sourceX: number;
	private readonly sourceY: number;
	private readonly leakX: number;
	private readonly leakY: number;

	constructor(width: number, height: number) {
		this.fieldWidth = width;
		this.fieldHeight = height;
		this.rowSize = width + 2; // +2 for boundary
		this.size = (width + 2) * (height + 2);

		// Initialize arrays
		this.dens = new Float32Array(this.size);
		this.dens_prev = new Float32Array(this.size);
		this.u = new Float32Array(this.size);
		this.u_prev = new Float32Array(this.size);
		this.v = new Float32Array(this.size);
		this.v_prev = new Float32Array(this.size);

		// Configure source and leak positions
		// Source: left side, about 1/3 from top
		this.sourceX = Math.floor(width * 0.15);
		this.sourceY = Math.floor(height * 0.33);

		// Leak: bottom right corner, escapes outside container
		this.leakX = Math.floor(width * 0.85);
		this.leakY = Math.floor(height * 0.88);
	}

	/**
	 * Get density at a specific grid position
	 */
	public getDensity(x: number, y: number): number {
		return this.dens[(x + 1) + (y + 1) * this.rowSize];
	}

	/**
	 * Main update loop - call this every frame
	 */
	public update(time: number): void {
		// Clear previous frame
		for (let i = 0; i < this.size; i++) {
			this.u_prev[i] = 0;
			this.v_prev[i] = 0;
			this.dens_prev[i] = 0;
			this.dens[i] *= this.damp;
		}

		// Add sources
		this.addFluidSource(time);
		this.addLeakForce(time);

		// Update physics
		this.velocityStep();
		this.densityStep();
	}

	/**
	 * Add fluid source on the left side with wave motion
	 */
	private addFluidSource(time: number): void {
		const waveOffset = Math.sin(time * 2) * 5;
		const burstIntensity = Math.abs(Math.sin(time * 0.8)) * 0.7 + 0.3;

		// Emit fluid in a circular pattern
		for (let i = -4; i <= 4; i++) {
			for (let j = -4; j <= 4; j++) {
				const x = this.sourceX + i;
				const y = this.sourceY + j + Math.floor(waveOffset);

				if (x >= 0 && x < this.fieldWidth && y >= 0 && y < this.fieldHeight) {
					const idx = (x + 1) + (y + 1) * this.rowSize;
					const distance = Math.sqrt(i * i + j * j);
					const strength = Math.max(0, 1 - distance / 5) * burstIntensity;

					// Add density (visible color)
					this.dens_prev[idx] += 200 * strength;

					// Add velocity flowing right and slightly down
					const flowRight = 18 * strength;
					const flowDown = 4 * strength + Math.sin(time * 3 + i) * 2;

					this.u_prev[idx] += flowRight;
					this.v_prev[idx] += flowDown;
				}
			}
		}
	}

	/**
	 * Create a "leak" that pulls fluid toward escape point
	 */
	private addLeakForce(time: number): void {
		const suckPower = 1.2 + Math.sin(time * 1.5) * 0.3;

		// Create suction in a wider area around leak
		for (let i = -8; i <= 8; i++) {
			for (let j = -8; j <= 8; j++) {
				const x = this.leakX + i;
				const y = this.leakY + j;

				if (x >= 0 && x < this.fieldWidth && y >= 0 && y < this.fieldHeight) {
					const idx = (x + 1) + (y + 1) * this.rowSize;
					const distance = Math.sqrt(i * i + j * j);
					const falloff = Math.max(0, 1 - distance / 12);

					// Pull toward leak (right and down)
					this.u_prev[idx] += 10 * falloff * suckPower;
					this.v_prev[idx] += 14 * falloff * suckPower;
				}
			}
		}
	}

	/**
	 * Update velocity field
	 */
	private velocityStep(): void {
		this.addFields(this.u, this.u_prev);
		this.addFields(this.v, this.v_prev);

		this.diffuse(1, this.u_prev, this.u);
		this.diffuse(2, this.v_prev, this.v);
		this.project(this.u_prev, this.v_prev, this.u, this.v);

		this.advect(1, this.u, this.u_prev, this.u_prev, this.v_prev);
		this.advect(2, this.v, this.v_prev, this.u_prev, this.v_prev);
		this.project(this.u, this.v, this.u_prev, this.v_prev);
	}

	/**
	 * Update density field
	 */
	private densityStep(): void {
		this.addFields(this.dens, this.dens_prev);
		this.diffuse(0, this.dens_prev, this.dens);
		this.advect(0, this.dens, this.dens_prev, this.u, this.v);
	}

	/**
	 * Add source fields
	 */
	private addFields(x: Float32Array, s: Float32Array): void {
		for (let i = 0; i < this.size; i++) {
			x[i] += s[i] * this.dt;
		}
	}

	/**
	 * Diffuse field (spread out)
	 */
	private diffuse(b: number, x: Float32Array, x0: Float32Array): void {
		const a = 0;
		this.solveLinear(b, x, x0, a, 1 + 4 * a);
	}

	/**
	 * Advect field (move with velocity)
	 */
	private advect(
		b: number,
		d: Float32Array,
		d0: Float32Array,
		u: Float32Array,
		v: Float32Array
	): void {
		const wdt0 = this.fieldWidth * this.dt;
		const hdt0 = this.fieldHeight * this.dt;
		const wp5 = this.fieldWidth + 0.5;
		const hp5 = this.fieldHeight + 0.5;

		for (let j = 1; j <= this.fieldHeight; j++) {
			for (let i = 1; i <= this.fieldWidth; i++) {
				const pos = i + j * this.rowSize;
				let x = i - wdt0 * u[pos];
				let y = j - hdt0 * v[pos];

				// Clamp to boundaries
				if (x < 0.5) x = 0.5;
				else if (x > wp5) x = wp5;

				const i0 = Math.floor(x);
				const i1 = i0 + 1;

				if (y < 0.5) y = 0.5;
				else if (y > hp5) y = hp5;

				const j0 = Math.floor(y);
				const j1 = j0 + 1;

				// Bilinear interpolation
				const s1 = x - i0;
				const s0 = 1 - s1;
				const t1 = y - j0;
				const t0 = 1 - t1;

				const row1 = j0 * this.rowSize;
				const row2 = j1 * this.rowSize;

				d[pos] =
					s0 * (t0 * d0[i0 + row1] + t1 * d0[i0 + row2]) +
					s1 * (t0 * d0[i1 + row1] + t1 * d0[i1 + row2]);
			}
		}
		this.setBoundary(b, d);
	}

	/**
	 * Project velocity field (ensure incompressibility)
	 */
	private project(
		u: Float32Array,
		v: Float32Array,
		p: Float32Array,
		div: Float32Array
	): void {
		const h = -0.5 / Math.sqrt(this.fieldWidth * this.fieldHeight);

		// Calculate divergence
		for (let j = 1; j <= this.fieldHeight; j++) {
			for (let i = 1; i <= this.fieldWidth; i++) {
				const idx = i + j * this.rowSize;
				div[idx] = h * (u[idx + 1] - u[idx - 1] + v[idx + this.rowSize] - v[idx - this.rowSize]);
				p[idx] = 0;
			}
		}

		this.setBoundary(0, div);
		this.setBoundary(0, p);
		this.solveLinear(0, p, div, 1, 4);

		// Subtract gradient
		const wScale = 0.5 * this.fieldWidth;
		const hScale = 0.5 * this.fieldHeight;

		for (let j = 1; j <= this.fieldHeight; j++) {
			for (let i = 1; i <= this.fieldWidth; i++) {
				const idx = i + j * this.rowSize;
				u[idx] -= wScale * (p[idx + 1] - p[idx - 1]);
				v[idx] -= hScale * (p[idx + this.rowSize] - p[idx - this.rowSize]);
			}
		}

		this.setBoundary(1, u);
		this.setBoundary(2, v);
	}

	/**
	 * Solve linear system using Gauss-Seidel relaxation
	 */
	private solveLinear(
		b: number,
		x: Float32Array,
		x0: Float32Array,
		a: number,
		c: number
	): void {
		const invC = 1 / c;

		for (let k = 0; k < this.iterations; k++) {
			for (let j = 1; j <= this.fieldHeight; j++) {
				const currentRow = j * this.rowSize;
				const lastRow = (j - 1) * this.rowSize;
				const nextRow = (j + 1) * this.rowSize;

				let lastX = x[currentRow];

				for (let i = 1; i <= this.fieldWidth; i++) {
					const idx = i + currentRow;
					lastX = x[idx] =
						(x0[idx] + a * (lastX + x[idx + 1] + x[i + lastRow] + x[i + nextRow])) * invC;
				}
			}
			this.setBoundary(b, x);
		}
	}

	/**
	 * Set boundary conditions (wall collisions)
	 * b=0: continuity, b=1: reflect horizontal, b=2: reflect vertical
	 */
	private setBoundary(b: number, x: Float32Array): void {
		const w = this.fieldWidth;
		const h = this.fieldHeight;

		// Horizontal edges
		for (let i = 1; i <= w; i++) {
			x[i] = b === 2 ? -x[i + this.rowSize] : x[i + this.rowSize];
			x[i + (h + 1) * this.rowSize] = b === 2 ? -x[i + h * this.rowSize] : x[i + h * this.rowSize];
		}

		// Vertical edges
		for (let j = 1; j <= h; j++) {
			x[j * this.rowSize] = b === 1 ? -x[1 + j * this.rowSize] : x[1 + j * this.rowSize];
			x[(w + 1) + j * this.rowSize] = b === 1 ? -x[w + j * this.rowSize] : x[w + j * this.rowSize];
		}

		// Corners
		const maxEdge = (h + 1) * this.rowSize;
		x[0] = 0.5 * (x[1] + x[this.rowSize]);
		x[maxEdge] = 0.5 * (x[1 + maxEdge] + x[h * this.rowSize]);
		x[w + 1] = 0.5 * (x[w] + x[(w + 1) + this.rowSize]);
		x[(w + 1) + maxEdge] = 0.5 * (x[w + maxEdge] + x[(w + 1) + h * this.rowSize]);
	}
}