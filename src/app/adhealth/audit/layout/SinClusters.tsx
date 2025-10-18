// src/app/adhealth/audit/SinClusters.tsx

// modified version of SinsEulerDiagram.tsx with horizontal bands that engulf the sidebar when open
// so that it shows to what cluster each sin belongs to 
// clusters have NO EMOJI. only 
// 1) Title, justify-between badge with waste in gbp
// 2) description

// this will be open on the first loading of the AdAudit, basically we first encounter the 
// AdAudit with the sidebar open and this clusters component visible
// after scroll this one disappears and the sidebar closes
// later on opening sidebar does not show sin clusters



"use client";
import { sinClusters, getTotalWasteRange } from '~/data/sin-clusters';

export function SinClusters() {
	// const totalWaste = getTotalWasteRange();

	return (
		<div className="flex items-center justify-center">

		</div>
	);
}