# MALT — Style Reference
> Stencil på melstøv. Industriel præcision i et bageri.

**Theme:** light (med fuld dark-variant)

MALT bruger et køligt, næsten farveløst system: melhvid grund, grafit-blæk og præcis én varm signalfarve, der udelukkende markerer, hvad der er varmt lige nu. Der er ingen fotografier i systemet — hierarkiet bæres af Anton i store, kondenserede versaler mod en meget rolig grotesk. Hver eneste talværdi er sat i mono med tabulære cifre, fordi tal er indhold her, ikke pynt: hydrering, ovntemperatur, gram, hævetimer. Layoutet er asymmetrisk og venstrestillet, aldrig centreret. Kanter er hårde — ingen radius overhovedet, kun 1px hårstregs-rammer, der læses som linjer i en produktionsplan.

Den strukturelle idé er, at siden er organiseret efter **tid**, ikke efter kategorier. Bageplanen er sidens rygrad, og den ene accentfarve findes kun der.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Chalk | `#E9E8E2` | `--bg` | Sidens grund. Køligt melhvid, ikke creme — hold den grønlige undertone |
| Surface | `#F3F2ED` | `--surface` | Kort, statuspanel, hover på planrækker |
| Graphite | `#191A18` | `--fg` | Al brødtekst og overskrifter. Varm nær-sort |
| Ash | `#6C6E67` | `--muted` | Sekundær tekst, labels, specifikationsnøgler |
| Hairline | `#C6C3B8` | `--line` | Sektionsafgrænsere, rammer om kort |
| Hairline Soft | `#D8D5CB` | `--line-soft` | Rækkeskillere inde i lister |
| Ember | `#B33F1B` | `--accent` | **Kun** aktiv bagning, "nu"-tilstand og trinvarighed. Aldrig dekoration |

Dark-variant: `--bg #141513`, `--surface #1C1E1B`, `--fg #E9E8E2`, `--muted #91948B`, `--line #33362F`, `--accent #E0653D`.

## Tokens — Typography

### Anton — display · `--font-display`
- **Fallback:** Arial Narrow, Impact, sans-serif
- **Weights:** 400 (eneste vægt — kondenseringen bærer hierarkiet)
- **Sizes:** 20–232px
- **Line height:** 0.86–1.02
- **Letter spacing:** 0.01em (versaler kræver minimal luft)
- **Role:** Ordmærke, sektionsoverskrifter, produktnavne, trinnumre, footer-udsagn. Altid `text-transform: uppercase`.

### Schibsted Grotesk — body · `--font-body`
- **Fallback:** Helvetica Neue, Arial, sans-serif
- **Weights:** 400, 500, 700
- **Sizes:** 13–19px
- **Line height:** 1.55
- **Role:** Al løbende tekst, navigation, beskrivelser. Maks. 38–42 tegn pr. linje i kolonner.

### DM Mono — data · `--font-data`
- **Fallback:** ui-monospace, SFMono-Regular, Menlo, monospace
- **Weights:** 400, 500
- **Sizes:** 10–15px
- **Letter spacing:** 0.04em i tabeller, 0.18em i versal-labels
- **Role:** Klokkeslæt, temperaturer, vægt, hydrering, adresser, CVR. **Altid** `font-variant-numeric: tabular-nums`.

## Spacing & Shape

| Purpose | Value |
|---------|-------|
| Max width | 1160px |
| Gutter | 28px (18px under 640px) |
| Section padding | 72px lodret |
| Section head margin | 36px |
| Row padding | 15px lodret |
| Border radius | **0px overalt** |
| Elevation | Ingen blur. Maks. `0 1px 0 rgba(25,26,24,.06)` |

## Guidelines

### Do
- Brug `--accent` udelukkende til at markere hvad der er varmt/aktivt lige nu. Én forekomst pr. skærmbillede.
- Sæt alle tal i DM Mono med tabulære cifre — også priser og telefonnumre.
- Hold alle hjørner firkantede. Systemet har ingen radius.
- Lad Anton bære hierarkiet gennem størrelse alene; skift aldrig vægt.
- Skriv rigtige fagtal i indholdet: hydrering i %, ovntemperatur i °C, hævetid i timer, vægt i gram. Det er det, der gør siden troværdig.
- Brug nummererede trin (01–04) **kun** hvor der er en reel sekvens (processen), aldrig som pynt på kort.
- Venstrestil alt. Sektionsoverskrifter og brødtekst deler venstrekant.

### Don't
- Ingen andre farver end de syv ovenfor. Ingen grøn, ingen blå, ingen anden signalfarve.
- Ingen `border-radius`, ingen bløde skygger, ingen gradienter.
- Brug ikke `--accent` som baggrund på store flader — kun på én række ad gangen.
- Ingen centreret tekst, heller ikke i footeren.
- Ingen fotografier af brød i heltebilledet. Systemet er bygget til at virke uden foto.
- Sæt aldrig Anton i små størrelser (< 18px) — den falder fra hinanden.
- Ingen emoji, ingen ikoner. Labels er ord.
