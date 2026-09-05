# BLOK — Style Reference
> Schweizisk plakat på havnebeton. Flad farve, ingen fotos.

**Theme:** light (med fuld dark-variant)

BLOK er bygget som et trykt plakatsystem, ikke som en hjemmeside med billeder. Alt hierarki kommer fra én variabel skrift — Archivo — brugt over hele breddeaksen: 122 i ordmærket, 118 i overskrifter, 100 i brødtekst, 74 i labels. Det er dét, der giver siden dens karakter, og det er grunden til, at systemet ikke behøver ét eneste fotografi. Farve optræder som trykte flader: én ultramarin, én smørgul, én mursten — aldrig som gradient, aldrig som tone-i-tone.

Rammer er 3px sorte og bærer strukturen, som en plakats beskæring. Grid-mellemrum er 3px af `--ink`, så cellerne ser ud som om de er trykt i separate baner. Ingen radius, ingen skygge, ingen blur.

Den strukturelle idé er sidens navn: køkkenet skifter helt om tre gange dagligt, og siden er organiseret i **tre tidsblokke** frem for i menukategorier. Den aktive blok farves smørgul.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper | `#E2E4DE` | `--paper` | Sidens grund. Køligt grågrønt papir — ikke creme |
| Card | `#EDEEE9` | `--card` | Blokceller, statistikfelter |
| Ink | `#15161A` | `--ink` | Al tekst, 3px rammer, grid-mellemrum, footergrund |
| Ink Soft | `#5C6066` | `--ink-soft` | Sekundær tekst, priser i lister, labels |
| Rule | `#B9BDB4` | `--rule` | 1px rækkeskillere inde i celler |
| Ultramarine | `#2138C4` | `--blue` | "Lige nu"-panelet, O'et i ordmærket, understregede links, fokusring |
| Butter | `#EFC133` | `--butter` | **Kun** den aktive tidsblok og ét ord i footeren |
| Brick | `#C0402A` | `--brick` | Kun dagsmarkøren i åbningstiderne |

Dark-variant: `--paper #121317`, `--card #191B20`, `--ink #E5E7E1`, `--ink-soft #93989F`, `--rule #2C2F36`, `--blue #5A74FF`, `--butter #E9BE38`, `--brick #E05B41`.

> Bemærk: i dark-varianten bliver `--ink` til lys tekst, men bruges stadig som rammefarve. Rammerne skifter altså fra sorte til lyse — det er tilsigtet og holder plakatlogikken.

## Tokens — Typography

### Archivo (variabel) — hele systemet · `--font`
- **Fallback:** Helvetica Neue, Helvetica, Arial, sans-serif
- **Axes:** `wdth` 62–125, `wght` 400–900
- **Role:** Én familie til alt. Bredden er hierarkiet.

| Rolle | `wdth` | `wght` | Størrelse | Tracking |
|-------|--------|--------|-----------|----------|
| Ordmærke | 122 | 900 | 76–214px | −0.028em |
| Sektionsoverskrift | 118 | 800 | 34–72px | −0.018em |
| Blokoverskrift | 118 | 800 | 32–46px | −0.02em |
| Statistiktal | 112 | 800 | 38px | 0 |
| Brødtekst | 100 | 400 | 15–19px | 0 |
| Knap / pill | 100 | 600 | 11px | 0.16em |
| Kolonnelabel | 74 | 700 | 13px | 0.18em |
| Åbningstider | 74 | 700 | 15px | 0.06em |

Alle tal: `font-variant-numeric: tabular-nums`.

## Spacing & Shape

| Purpose | Value |
|---------|-------|
| Max width | 1240px |
| Gutter | 26px (16px under 640px) |
| Section padding | 56–60px lodret |
| Cell padding | 26px 22px |
| Grid gap | 3px (vises som `--ink`) |
| Strukturramme | 3px solid `--ink` |
| Intern streg | 1px solid `--rule` |
| Border radius | **0px overalt** |
| Elevation | Ingen. Dybde er farveflader, ikke skygger |

## Guidelines

### Do
- Brug `--butter` udelukkende på den blok, der serverer lige nu. Præcis én ad gangen.
- Brug `--blue` på "lige nu"-panelet og fokusringe. Den er systemets eneste konstante farveflade.
- Lad breddeaksen bære hierarkiet — skift `wdth`, ikke skriftfamilie.
- Hold 3px rammer omkring alle strukturelle grupper og 3px grid-gaps i `--ink`.
- Skriv konkrete tal i indholdet: antal retter, kvadratmeter køkken, afstand til leverandør i km, antal pladser.
- Vis priser uden "kr." i listerne — kolonnen forklarer sig selv.
- Venstrestil alt. Plakater centrerer ikke brødtekst.

### Don't
- Ingen `border-radius` nogen steder, heller ikke på pills og knapper.
- Ingen gradienter, ingen skygger, ingen glas- eller blur-effekter.
- Brug ikke `--butter` og `--blue` på samme flade — de skal aldrig røre hinanden.
- Ingen fotografier. Systemet er designet til at klare sig uden, og et foto vil bryde plakatlogikken.
- Ingen anden skriftfamilie. Archivo alene, hele vejen.
- Sæt ikke overskrifter under `wdth` 110 — de mister plakatkarakteren.
- Ingen emoji eller ikoner. Struktur kommer fra rammer og farveflader.
