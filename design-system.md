# Bullion — Design System
> Guld i en gammel bankboks. Kølig sten, grøn-sort dybde, én messingfarve.

**Theme:** light canvas, dark photographic sections. Single theme — the page paints every colour explicitly.

Bullion is a fictitious luxury French brasserie at Bredgade 33, København K, in a bank
building from 1897. The private dining room is the old vault. The visual system
inherits the *mechanisms* of the reference (see `bar.md`) but re-derives every value:
the canvas is a **cool pale stone** rather than warm parchment, so the gold inside the
photography reads as metal instead of dissolving into a beige page. The dark surface is
a **green-black**, taken from the banquette leather in the generated imagery, not a
warm brown-black. One accent: old gold. It is the only chromatic colour in the system.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Stone | `#E2E1DB` | `--stone` | Page canvas and light panels. Cool, slightly green-grey. Never warm it up |
| Limestone | `#D2D1CA` | `--limestone` | Secondary light surface, credential card, alternate panel |
| Hairline | `#B9B8AF` | `--hairline` | All 1px rules and dividers on light surfaces |
| Ash | `#8A8981` | `--ash` | Muted text: captions, eyebrows, metadata, placeholders |
| Slate | `#55564F` | `--slate` | Secondary body text, menu descriptions |
| Ink | `#1C1E1B` | `--ink` | Primary text on light surfaces. Cool near-black — never `#000`, never warm |
| Vault | `#0E1512` | `--vault` | Darkest surface: photo overlays, dark sections, footer. Green-black |
| Vault Line | `#243029` | `--vault-line` | 1px rules on dark surfaces |
| Gold | `#B99552` | `--gold` | The sole accent. Stars, active nav, eyebrow rules, one panel flood per page, focus ring |
| Gold Ink | `#0E1512` | `--gold-ink` | Text placed on a gold flood |

Text on dark surfaces uses `--stone` (never pure white). Text on gold uses `--gold-ink`.

## Tokens — Typography

### Newsreader — display · `--font-display`
- **Source:** Google Fonts, `Newsreader:opsz,wght@6..72,300`
- **Fallback:** "Times New Roman", Times, serif
- **Weight:** 300 only. **Never bolder.** The whisper weight is the luxury.
- **Optical size:** let `opsz` follow the rendered size (variable font default)
- **Sizes:** 22px (smallest permitted), 50, 65, 69, 115px
- **Line height:** 0.80 at 115, 0.85 at 65–69, 0.90 at 50, 1.2 at 22
- **Letter spacing:** −0.04em at 65px+, −0.03em at 50px, −0.035em at 22px
- **Case:** uppercase at 50px and above. Sentence case permitted only at 22px.
- **Role:** wordmark, section headings, dish-group headings, pull quotes. Never body.

### Manrope — text · `--font-text`
- **Source:** Google Fonts, `Manrope:wght@500;700`
- **Fallback:** "Helvetica Neue", Arial, sans-serif
- **Weights:** 500 (all text), 700 (numerals in the credential card only)
- **Sizes:** 12, 13, 14, 15px. And one exception: the 42px subheading.
- **Line height:** 1.3 at 12–13, 1.4 at 14–15, 1.0 at 42
- **Letter spacing:** −0.012em at 12, −0.011em at 13, −0.010em at 14–15, −0.04em at 42
- **Case:** uppercase for nav, buttons, eyebrows, labels. Sentence case for body.
- **Role:** navigation, buttons, body copy, menu items, prices, form fields, captions.

### Scale — with the hole in the middle

| Role | Face | Size | Line | Tracking |
|------|------|------|------|----------|
| display | Newsreader 300 | 115px | 0.80 | −0.04em |
| heading-lg | Newsreader 300 | 69px | 0.85 | −0.04em |
| heading | Newsreader 300 | 65px | 0.85 | −0.04em |
| heading-sm | Newsreader 300 | 50px | 0.90 | −0.03em |
| subheading | Manrope 500 | 42px | 1.00 | −0.04em |
| lede | Newsreader 300 | 22px | 1.20 | −0.035em |
| body | Manrope 500 | 15px | 1.40 | −0.010em |
| body-sm | Manrope 500 | 14px | 1.40 | −0.010em |
| caption | Manrope 500 | 13px | 1.30 | −0.011em |
| micro | Manrope 500 | 12px | 1.30 | −0.012em |

Nothing is set between 26px and 42px. Body never exceeds 16px, never drops below 13px.
Prices and numerals: `font-variant-numeric: tabular-nums`.

Responsive: display scales with `clamp(56px, 8vw, 115px)`; headings with
`clamp(36px, 4.6vw, 69px)`. Below 900px, split sections stack — photo first, then text.

## Spacing & Shape

| Purpose | Value |
|---------|-------|
| Section gap (light sections) | 140px |
| Inner padding, light panel | 92px 64px |
| Inner padding, dark section | 120px 64px |
| Card padding | 28px |
| Row gap in lists | 12px |
| Block gap | 16px |
| Text column max width | 52ch |
| Page max width | **none** — sections are full-bleed |
| Radius, containers/cards/images | **0px** |
| Radius, buttons/tags/icon squares | 3px |
| Elevation | **None.** No `box-shadow`, ever |

## Components

### Nav — floating
Transparent. No background, no blur, no border. Left: wordmark in Manrope 500 14px
uppercase. Centre-left: links, Manrope 500 14px uppercase, colour `--stone` over the hero
photo. Right: "Reservér bord" ghost button. On light sections (if the nav persists) it
switches to `--ink`. Active link: 1px `--gold` underline, offset 6px.

### Ghost button
Transparent fill, 1px solid border in the current text colour, 3px radius, Manrope 500
14px uppercase, padding 18px 26px. Hover: fill with the text colour, text inverts,
400ms. **The only button style in the system.** No solid gold buttons.

### Eyebrow
Manrope 500 12px uppercase, `--ash` (or `--stone` at 70% on dark). Preceded by a
24px × 1px `--gold` rule, inline.

### Split section
Two columns, `grid-template-columns: 45fr 55fr`, no gap. Left: light panel, padding
92px 64px, text top-aligned, at least 40% of the panel empty. Right: photograph,
`object-fit: cover`, bleeding to the viewport edge, height set by the photo's aspect
(min 720px). No border between them.

### Menu row
`grid-template-columns: 1fr auto`. Row 1: dish name (Manrope 500 15px, `--ink`) and
price (Manrope 500 15px, tabular). Row 2: description (Manrope 500 14px, `--slate`,
max 80% width). Padding 16px 0. Bottom border 1px `--hairline` (or `rgba(14,21,18,.18)`
on a gold flood). No fill, no hover fill.

### Credential line (revision 2b — replaces the card)
No card. One line of Manrope 500 13px in `--stone` sitting directly on the hero photo,
bottom-right: five 12px `--gold` stars, then "4,8 / 5 · Fremragende · 1 216 anmeldelser"
with tabular numerals. The hero's left column is four tiers at most: meta, wordmark,
lede (one sentence, max 44ch, carrying the food), buttons. No paragraph beneath.

### Marquee
One continuous horizontal loop of dish names in Newsreader 300 50px uppercase, `--ink`
on `--stone`, separated by `--gold` middle dots. 27s linear, infinite. Pauses on hover.
**The only ambient motion below the hero.**

### Form field
Transparent, 0 radius, 1px bottom border only (`--stone` at 40% on dark), Manrope 500
15px, padding 14px 0. Label above in eyebrow style. Focus: bottom border becomes `--gold`.
Choice tokens for guests/date/time are **typographic, not chips**: no border, no fill,
Manrope 500 13px uppercase, tabular numerals, padding 10px 0, spaced 22px apart, laid on
a single 1px hairline (`--stone` at 25% on dark) that runs under the whole row like a
printed timetable. Selected = a 1px `--gold` rule beneath the token and full-opacity text;
unselected = `--stone` at 60%; unavailable = struck through at 40%. Transitions 400ms.
The submit is a **text-link button**, not a ghost button — and it must not be mistakable
for an eyebrow label: Manrope 500 **15px** uppercase (labels are 12px and carry a gold
rule *before* them; the submit carries none), full row width, text at the left and a
long arrow "→" at the right end of the same row, sitting on its own 1px hairline. Active
= text and arrow in `--gold`, hairline `--gold`, full opacity. Disabled = text and arrow in
`--stone` at 45%, hairline at 25%. Hover on active: arrow shifts 6px right, 400ms. It is
the last row of the timetable, so it reads as one more line of type — but a line that
points somewhere. (Ghost buttons remain the style for
nav and section CTAs.) Never more than one row of tokens per question; the rows together
must read as a timetable, not a form.

### Footer — a colophon, not a sitemap
`--vault` band, 1px `--vault-line` at top, padding 56px var(--pad-x) 32px. The wordmark in
Newsreader 300 at heading-sm size, alone on its line. Beneath it **one** hairline-ruled
row — a single line of Manrope 500 12px uppercase in `--stone` at 70%, items separated by
gold middle dots: address · phone · mail · hours · company and CVR · "siden 2019". The legal
items are part of that same single line, at 45% opacity. **Two tiers only: wordmark, one
line.** Never columns, stacks, link lists or a separate legal bar. The footer should read
like the last line of a printed menu. On mobile the single row may wrap; it stays one
paragraph.

### Text over photography — placement rule
Copy and controls sit where the darkened photograph is darkest. Never lay a row of small
type across a bright fixture, a lit ceiling or a white tablecloth; move the block, don't
add a box. The top third of a dark section may be left to the photograph and the heading
alone.

## Motion

- Easing everywhere: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`. Duration ≥ 400ms.
- **Hero on load — the one orchestrated moment.** Photo starts at 1.06 scale and settles
  to 1.0 over 2.4s; the darkening overlay eases from 0.55 to 0.35 over the same span;
  wordmark, copy and card fade+rise 24px, staggered 120ms, all landing by 1.6s. The
  hero is legible from the first frame — animations start from ≥0.4 opacity, never 0.
- Hero video (if present): `autoplay muted loop playsinline`, poster = hero still. It
  plays under the same overlay. No controls.
- Marquee: 27s linear loop. Nothing else moves on scroll.
- Hover: buttons 400ms fill; links 400ms underline colour; menu rows — nothing.
- `prefers-reduced-motion: reduce`: hero settles instantly, marquee stops, hovers keep.

## Copy

Danish, sentence case in body, uppercase only where the type system says so. Dish names
in French, descriptions in Danish. Prices in `kr` without decimals, right-aligned.
Real details: Bredgade 33, 1260 København K · +45 33 12 40 08 · bord@bullion.dk ·
åbent man–tor 17–24, fre–lør 12–01, søndag lukket · chambre séparée "Boksen", 12 pladser.

## Revision 2 — user directives (override anything above that conflicts)

### Liquid glass controls
Every interactive control — buttons, chips, tabs, the menu-card panel, the booking
panel, the nav pill — is **liquid glass** in the iOS 18 sense, tuned to Bullion rather
than stock Apple: a frosted, slightly refractive surface that shows the photograph or
canvas behind it, a bright specular rim on the top edge, a faint gold tint in the rim,
and a soft deep shadow that lifts it off photography. Use the shared primitives in
`pieces/base.css` (`.glass`, `.glass-btn`, `.glass-pill`, `.glass-panel`; add `.on-light`
to a light-canvas ancestor so the fill and lift adapt); do not hand-roll glass per piece.

- Fill: on dark/photo `rgba(226,225,219,.10)`; on light `rgba(14,21,18,.05)`.
- Backdrop: `blur(18px) saturate(1.35)`; glass on glass never stacks more than twice.
- Rim: `inset 0 1px 0 rgba(255,255,255,.38)`, `inset 0 0 0 1px rgba(185,149,82,.16)`.
- Lift: `0 14px 40px rgba(0,0,0,.28)` on photo; `0 8px 24px rgba(14,21,18,.10)` on light.
- Specular follows the cursor (radial highlight on `--mx/--my`, set by the shared script).
- Press: scale .97 over 160ms; release over 420ms with the system easing.
- **Radius**: pills (`999px`) for buttons and chips; 24px for glass panels and the menu
  card. Radius stays **0** on sections, photographs and non-glass containers.
- Primary CTA glass carries a gold tint (`.glass-btn.gold`).

### Motion — raised ceiling
The one-moment rule is replaced. Motion is now a signature, still restrained in taste:
- **Vault opening** on first load: a circular aperture (the bank-vault door) irises open
  from the centre over 1.6s, revealing the hero; the photo settles 1.06→1.0 behind it.
  Runs once per session (`sessionStorage`), never under reduced-motion.
- **Gold leaf sheen**: a slow diagonal light sweep across the wordmark every ~9s, 1.8s
  long, `background-clip: text` — light passing over gold leaf, not a shimmer effect.
- **Scroll reveals** (`.reveal`, `data-d` for stagger) on headings, paragraphs and menu
  rows: rise 24px from opacity .35 to 1 — never from 0; the page must read at rest.
- **Photo drift** (`.drift` on the img inside `.photo`): ±24px on scroll via
  `animation-timeline: view()` where supported; nothing where not.
- **Menu card**: opens with the glass panel scaling from .96 and blurring in, 480ms;
  tabs cross-fade 320ms.
- **Reservation**: step panels slide 24px between states, 420ms; confirmation stamps a
  gold seal (scale 1.4→1 with a 2° rotation settle, 600ms).
- Marquee stays. Hovers stay 400ms. Under `prefers-reduced-motion` everything above
  collapses to instant state changes and the vault never runs.

### Menu card (new component)
A full-screen glass overlay `#menucard` (a `<dialog>` or `role="dialog"`), opened by any
element carrying `data-open-menucard` (nav "Menu", a hero button, the intro button, the
menu-section button). Centered `.glass.glass-panel`, portrait: max-width 560px, min-height 78vh, max-height 88vh,
internal scroll. Header row: wordmark "Bullion" in Newsreader 300 (.t-heading-sm), a
close `.glass-pill` "Luk" at right. Glass-pill tabs: Hors d'œuvre · Plats · Desserts ·
Bar · Vin. Each tab lists `.menu-row`s on the glass (hairlines `--stone` at 18%,
descriptions `--stone` at 66%). Escape closes; focus is trapped; body scroll locks; the
backdrop is `rgba(14,21,18,.62)` **with no blur** — the room stays sharp and merely dims,
so the card is the only thing blurring what sits behind it. On mobile the panel keeps
the 86vh cap and the tab strip fades at its right edge.

### Reservation (redesigned)
The widget becomes a `.glass.glass-panel` on the photograph, right column, three steps
stacked inside with eyebrow labels: **Gæster** as a segmented glass control (1–8, one
row), **Dato** as a horizontal strip of glass date tiles (weekday in .t-micro, day
numeral in Newsreader 300 at **24px** — never 26–42px, the scale's hole), **Tidspunkt**
as a wrapped grid of `.glass-pill`s; unavailable pills are struck and 40%. **Selected
states are gold-tinted glass, never white** — nothing in the panel may be brighter than
the lamp in the photograph. Inner controls carry no backdrop blur of their own (blur on
blur is fog); the panel is the only blurred layer and, at 10px, lets the table edge,
candles and glass stems read through it. The material story is two-layered: the **card is glass** and refracts the room; the
**controls are printed on the card** — opaque ink pills (`#161e19`, never translucent — a control must look identical wherever it sits on the card) with a
lit top edge, gold when selected — so nothing behind the panel can ever make an unselected
control look selected. The panel sits where the room is richest (candles, glass stems, the
table edge run behind it), never over blank wall. **The panel is lit by the room, never
self-luminous**: the lamp remains the brightest point in the frame (the overlay spares it);
the panel's rim is brightest directly under the lamp and fades toward the far corner; the
body shades from lit top-left to dim bottom-right; ink controls are flat — no rims, no
inset highlights — and the gold selected state is flat and opaque too (`#7a6535`, gold over ink) so it reads the same over a candle as over a wall. Horizontal strips fade at their right edge as
the scroll affordance. A live summary line and a `.glass-btn.gold` CTA
"Reservér" at the bottom. Confirmation replaces the panel body with a gold seal and
"Forespørgsel sendt — vi bekræfter på mail inden for to timer." Left column keeps the
heading, lede and the short paragraph; nothing else there.

### What still holds
Cool stone canvas; green-black vault; one gold; Newsreader 300 only; Manrope 500 body at
12–15px; the type-scale hole; split sections with hard seams; page menu rows as
hairlines; no photograph is ever boxed; no second accent; no emoji; no pure black or
white; text on the photo sits where it is dark.

## Do

- Set every heading in Newsreader 300, uppercase from 50px up, tracking tightening with size.
- Keep the canvas cool. If a surface looks warm or beige, it is wrong.
- Use `--gold` as punctuation, plus at most **one** full gold panel per page.
- Bleed every photograph to the viewport edge on its side. Never box an image.
- Leave the light panels at least 40% empty.
- Put body text directly on darkened photography — no scrim boxes.
- Use tabular numerals for every price and time.

## Don't

- No `border-radius` above 3px anywhere; 0 on all containers.
- No `box-shadow`, no blur, no glassmorphism, no gradient backgrounds (only the photo darkening overlay).
- No second accent colour. No warm orange, no saffron, no terracotta.
- No bold serif. No serif below 22px. No sans above 15px except the one 42px subheading.
- No solid-fill coloured buttons.
- No scroll-triggered reveals, parallax, counters or staggered section fades.
- No pure `#000` or `#fff`.
- No centred body paragraphs. No centred max-width page container.
- No emoji, no icon fonts. Icons, if any, are 1px-stroke inline SVG.
- No stock-looking "people laughing at dinner" imagery. Rooms, surfaces, plates, glass.
