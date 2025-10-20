# Landing Page Setup Guide

## 📁 Complete File Structure

```
src/
├── app/
│   └── adhealth/
│       ├── _components/
│       │   ├── cta/
│       │   │   ├── AuditForm.tsx
│       │   │   └── useAuditForm.ts
│       │   ├── proof/
│       │   │   ├── TestimonialCard.tsx
│       │   │   └── TestimonialsSection.tsx
│       │   ├── sections/
│       │   │   ├── BenefitsSection.tsx
│       │   │   ├── FormSection.tsx
│       │   │   ├── HeroSection.tsx
│       │   │   ├── OutcomesSection.tsx
│       │   │   └── QualificationSection.tsx
│       │   └── ui/
│       │       ├── MobileStickyCTA.tsx
│       │       └── ScarcityBanner.tsx
│       ├── _hooks/
│       │   └── useExitIntent.ts
│       └── page.tsx
├── data/
│   └── testimonials.ts
└── styles/
    └── globals.css
```

## 🎯 Implementation Priority (Phase 1)

Based on the client brief, here's what to implement FIRST:

### ✅ Already Done
- [x] Hero Section
- [x] Scarcity Banner
- [x] Form Section
- [x] Mobile Sticky CTA
- [x] Testimonials

### 🚀 Phase 1 (CRITICAL - Do Now)
1. **OutcomesSection** - Specific examples with $ amounts ✅
2. **QualificationSection** - Pre-qualify visitors ✅
3. **Trust badges with specificity** - Update FormSection ✅
4. **Real-time social proof** - Activity indicators ✅

### 📈 Phase 2 (Medium Priority)
1. **Visual proof of deliverable** - Show example audit
2. **Exit intent capture** - Desktop + mobile
3. **Better mobile animations** - Smooth React transitions

### 🔬 Phase 3 (Advanced - Optional)
1. **Two-step form** - Lower friction
2. **A/B testing setup** - Different variants
3. **Platform migration assessment** - If needed

## 🎨 Key Design Principles to Follow

### Mobile-First (75% of traffic!)
- All CTAs must be thumb-friendly
- Sticky CTA on mobile
- No tiny text or buttons
- Fast loading images

### Conversion Psychology
- **Specificity over vagueness**: "$2,400/month" not "save money"
- **Scarcity**: "17 of 20 spots left"
- **Social proof**: "157 audits this month"
- **Risk reversal**: "No credit card", "100% confidential"
- **Loss aversion**: Focus on what they're losing NOW

### Trust Indicators
- ✅ "90 seconds to request" (not "quick")
- ✅ "Delivered within 48 hours" (not "fast")
- ✅ "157 audits completed" (volume)
- ✅ Recent activity timestamps

## 📊 What Makes This Different

### Common Mistakes to Avoid
❌ "Quick and easy" (vague)
❌ "Expert analysis" (everyone says this)
❌ "Sign up now" (no urgency)
❌ Generic testimonials

### What We're Doing Instead
✅ "90 seconds to request" (specific)
✅ "Average waste found: $7,400/month" (concrete)
✅ "17 of 20 spots left" (real scarcity)
✅ Results-focused testimonials with $ amounts

## 🔧 Technical Notes

### Next.js Patterns Used
- Server Components by default
- 'use client' only when needed (forms, hooks)
- ~ alias for imports (not @)
- Metadata in page.tsx
- Component co-location

### CSS/Styling
- Tailwind utility classes
- Dark theme (bg-black base)
- Gradient accents (purple/pink/blue)
- Custom animations in globals.css
- Mobile-first breakpoints

## 🎯 Conversion Rate Optimization (CRO) Elements

### Above the Fold
1. Scarcity banner (creates urgency)
2. Clear value prop headline
3. Visible CTA badges
4. No navigation to distract

### Form Optimization
1. Only 2 fields (email + spend)
2. Specific trust badges
3. Social proof below form
4. High-contrast CTA button

### Social Proof Strategy
1. Logos from testimonials
2. Specific $ results
3. Industry diversity
4. LinkedIn credibility signals

### Mobile Conversion
1. Sticky CTA appears on scroll
2. Large touch targets (min 44px)
3. Simplified content flow
4. Fast form submission

## 🚀 Next Steps

1. **Add BenefitsSection to page.tsx**
2. **Update globals.css** with gradient animation
3. **Test on mobile** (most important!)
4. **Add exit intent modal** (Phase 2)
5. **Set up form endpoint** (API route)
6. **Connect to email service** (ConvertKit/Kit)

## 📝 Client Brief Checklist

### Phase 1 Requirements
- [x] Specific outcome examples section
- [x] Mobile-optimized placement
- [x] $ amounts with examples
- [x] Strategic positioning before form
- [x] Trust badges with specificity
- [x] Volume indicators
- [x] Real-time social proof
- [x] Qualification section
- [ ] Visual proof of deliverable (TODO)
- [x] Mobile sticky CTA
- [ ] Exit intent capture (TODO)

### Performance Targets
- **Goal CVR**: 8-10%
- **Traffic**: 75% mobile, 25% desktop
- **Current**: Just launched
- **Optimization**: Before scaling ad spend

## 💡 Pro Tips

1. **Test everything on mobile first** - It's 75% of traffic
2. **Use real numbers** - "$7,400/month" beats "save money"
3. **Show recent activity** - "Last submission 12 minutes ago"
4. **Pre-qualify aggressively** - Increases perceived value
5. **Keep form simple** - 2 fields max for lead gen
6. **Add urgency everywhere** - Scarcity, activity, time
7. **Focus on loss** - What they're losing > what they gain

## 🔗 Resources

- Client Brief: `/src/data/post.md`
- Live Site HTML: `/src/app/adhealth/live.html`
- Company Info: `/src/data/gdoc.md`
- Testimonials Data: `/src/data/testimonials.ts`