# bar.md — the standard Bullion has to beat

Derived from a rendered capture of **amritpalace.com** (Webflow), cross-checked against
the supplied Amrit Palace DESIGN.md. Where the two disagree, **the render wins** — noted
per mechanism.

Every line below is checkable by looking at a screenshot. No adjectives.

---

## M1 — Split-screen sections, photography bleeding to the edge

Content sections are two panels side by side: a text column on the parchment canvas
occupying **40–45% of the viewport width**, and a photograph occupying the remaining
**55–60%**. The two meet at a hard vertical seam with **no gutter, no margin, no
padding between them**, and the photograph runs to the viewport edge on its side.

**Fail if:** there is whitespace between the text panel and the image; the image is
inset, boxed, or has a visible container edge; the section is a centred max-width row.

---

## M2 — The hero is one darkened photograph carrying live text, with a floating nav

A single full-bleed photograph, darkened enough that body copy sits **directly on the
image** with no scrim rectangle behind it. Navigation floats over it with **no
background bar of any kind**. Supporting copy sits bottom-left; a review/credential
card sits bottom-right.

**Fail if:** the nav has a solid or blurred background; text sits in a tinted box on
top of the photo; the hero is a colour block rather than a photograph.

---

## M3 — Menu rows are hairlines, never cards

Each menu item is: dish name left and price right **on the same baseline**, description
on the following line at roughly 80% column width. Rows are separated by **1px
hairlines only**. No fills, no borders around the row, no radius, no shadow, no
alternating stripes.

**Fail if:** menu items are rendered as cards, tiles, boxes, or anything with a
background fill distinct from its panel.

---

## M4 — Total flatness: zero radius, zero shadow

`border-radius: 0` on every container, panel, image and section. **3px is permitted
only** on buttons, tags and the small square icon controls. **No `box-shadow`
anywhere.** Depth is communicated exclusively by tonal shift — parchment against linen
against dark photograph — and by 1px hairlines.

**Fail if:** any rounded card, any drop shadow, any glassmorphism, any gradient
background. (Gradients are permitted only as the darkening overlay on a photograph.)

---

## M5 — Two voices, with a hole in the middle of the scale

A whisper-weight serif at **weight 300 only** for display type at **50px and above**,
uppercase, with letter-spacing tightening as size grows (about −0.03em at 50px,
−0.04em at 65px+). A sans at **weight 500** for everything from 12–15px. Display-to-body
size ratio is roughly **7:1**. Nothing is set between 26px and 42px.

**Fail if:** the serif appears bold or below 22px; body text is above 16px or below
13px; there is a third typeface; headings are sentence case; the type scale is a smooth
ramp with no gap.

---

## M6 — The light panels are mostly empty

On any section with a parchment panel, the text occupies well under half the panel's
height. **At least 40% of each light panel is empty canvas.** The reference leaves a
full viewport-height of empty parchment above a drinks list without flinching.

**Fail if:** a light panel is filled edge to edge with content; copy is padded out to
fill space; sections are compressed to reduce scroll length.

---

## M7 — Motion ceiling (raised from the reference, by agreement)

The reference permits almost no motion: *"no parallax, no scroll-triggered animations,
no loading sequences"*, with a marquee as the only extended movement. For Bullion this
ceiling is deliberately raised **once**:

- **One** orchestrated moment on load — the hero, and only the hero.
- **One** continuous ambient loop — the marquee, or a slow hero drift.
- Hover states on interactive elements.
- **Nothing else animates on scroll.** No reveals, no parallax, no counters, no
  staggered fades of section content.
- Every transition is **≥400ms**, easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- The page is fully legible at rest, before any motion runs.

**Fail if:** content is invisible until scrolled to; there is a second orchestrated
sequence anywhere below the hero; any transition is under 400ms.

---

## Revision 2 — raised by the client (overrides M4 and M7 where they conflict)

After the first loop closed, the client asked for **liquid-glass controls in the iOS 18
sense** and **signature animations**. Their words win. The mechanisms are amended:

- **M4 (flatness)** now applies to sections, photographs and non-interactive containers
  only. Interactive controls and the two glass panels (menu card, booking) are frosted
  glass with a specular rim and a soft lift shadow, and carry radius (pills; 24px panels).
  **Fail if:** glass appears on anything non-interactive; glass stacks more than twice;
  a photograph or section gains radius; glass reads as a flat grey box (no refraction of
  what is behind it).
- **M7 (motion)** now permits: a once-per-session vault-door opening on the hero, a gold
  sheen on the wordmark, scroll reveals from ≥.35 opacity, photo drift on scroll, panel
  transitions in the menu card and booking, marquee, hovers. **Fail if:** anything is
  invisible at rest; any reveal starts below .35 opacity; motion runs under reduced-motion;
  two competing sequences run at once; anything bounces or overshoots more than 2%.
- New check, **M8 — the menu card is findable**: within one glance at the hero a visitor
  sees how to open the menu card; the card opens as a glass overlay with tabs and closes
  with Escape or a visible control. **Fail if:** the only route to the menu is scrolling.

## Where the supplied DESIGN.md is wrong

The doc states saffron `#d49653` is *"reserved exclusively for star ratings, active
states, and single decorative punctuation moments — no more than 2-3 times per fold."*

**The live site contradicts this.** The appetiser/mains menu panel is a solid saffron
flood covering roughly 45% of the viewport, with menu rows sitting directly on it.

Treat the accent as having **two** legitimate modes: micro-punctuation (stars, active
nav, icon squares) **and** one full-panel flood per page. Critics must not fail a build
for a single large accent panel — but two such panels is a fail.

---

## Revision 3 — raised again

- **M7 — motion ceiling**, raised a second time. The permitted set now also contains:
  one full-screen overture that runs once per session, is skippable, and is gone in under
  four seconds; **one** horizontal pan driven by scroll depth, in **one** section only;
  and a scroll-depth hairline. **Fail if:** a second section pans, the overture repeats
  within a session, the overture cannot be skipped, or any of it survives
  `prefers-reduced-motion`.
- New check, **M9 — motion that is claimed must actually run.** Every element the design
  presents as moving has to move in a real browser: decode it, screenshot twice two
  seconds apart, and compare the bytes. **Fail if:** any "video" or "loop" renders as a
  still frame, or the check was never performed.
- New check, **M10 — one scroll direction per screen.** Below 900px no section may ask
  for a horizontal gesture inside the vertical page. **Fail if:** a rail is swipeable on
  a phone instead of restacking.
- New check, **M11 — no photograph is the only material.** At least one full section
  below the header must carry its argument with type, rule and motion alone, no image.
  **Fail if:** every section under the hero is a photograph with text beside it.

---

## Not inherited from the reference

`bar.md` governs **mechanism**, not brand. Amrit Palace's parchment-and-saffron palette
is spice-coded for an Indian restaurant. Bullion's palette, photography direction and
typeface pairing are re-derived in `design-system.md` and are **out of scope for the
craft critic**, which judges only the mechanisms above.
