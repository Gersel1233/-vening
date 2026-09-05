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

### Credential card
`--limestone` background, 0px radius, padding 20px 24px, no border, no shadow. Row of
five `--gold` stars (13px). A large numeral in Manrope 700 42px. A caption line in
Manrope 500 13px `--slate`. Floats bottom-right over the hero.

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
The submit stays a ghost button (the only button style). Never more than one row of
tokens per question; the three rows together must read as a timetable, not a form.

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
