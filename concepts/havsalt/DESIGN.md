# HAVSALT — Style Reference
> Spisesal ved skumringstid, tolv meter fra vandet.

**Theme:** dark (bevidst enkelt tema — ingen light-variant)

HAVSALT er et kompromisløst mørkt system. Grunden er en blågrøn nær-sort, der aldrig går til rent sort, og teksten er en varm skumhvid, der aldrig går til rent hvidt — det er den forskel, der får siden til at læses som lys i et rum frem for tekst på en skærm. Bodoni Moda sætter alle rettitler og overskrifter i høj stregkontrast, hvilket giver fine-dining-registeret uden at ty til de sædvanlige script- eller Playfair-klichéer. Jost holder brødteksten i vægt 300, så typen aldrig konkurrerer med serifferne.

Farve bruges i to lag med skarp adskillelse: en kold havglas-grøn til alle labels, tidsstempler og aktive tilstande, og præcis én messingfarve, der kun optræder ét sted i hele systemet — reservationsknappen. Det er sidens eneste opfordring, og derfor den eneste varme farve.

Den strukturelle idé er **landingsloggen**: siden er organiseret om, hvad der er kommet ind over kajen i dag, ikke om et fast menukort.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Deep | `#06121A` | `--deep` | Sidens grund. Blågrøn nær-sort — aldrig `#000` |
| Brine | `#0B1D26` | `--brine` | Paneler, bookingkort, hævede flader |
| Swell | `#123039` | `--swell` | Deaktiverede knapper, tunge flader |
| Line | `#1B3B45` | `--line` | Rammer, sektionsafgrænsere |
| Line Soft | `#132C35` | `--line-soft` | Rækkeskillere i lister og logposter |
| Foam | `#E7EEEB` | `--foam` | Primær tekst. Varm skumhvid, aldrig `#FFF` |
| Mist | `#8CA3A5` | `--mist` | Sekundær tekst, metadata, faktanøgler |
| Sea Glass | `#7DB2AD` | `--glass` | Labels, tidsstempler, retnumre, aktiv tilstand |
| Brass | `#C2A268` | `--brass` | **Kun** reservationsknappen og "udsolgt". Ét sted pr. side |
| Brass Ink | `#0C1720` | `--brass-ink` | Tekst oven på messing- og glasflader |

## Tokens — Typography

### Bodoni Moda — display · `--font-display`
- **Fallback:** Didot, Times New Roman, serif
- **Weights:** 400, 500 (kursiv 500 til ordmærkets andet led)
- **Optical size:** 6–96 (variabel — lad opsz følge størrelsen)
- **Sizes:** 15–158px
- **Line height:** 0.92–1.25
- **Letter spacing:** 0.01–0.03em (versaler og store grader har brug for luft)
- **Role:** Ordmærke, sektionsoverskrifter, rettitler, fangstarter, retnumre, priser, footer.

### Jost — body · `--font-body`
- **Fallback:** Helvetica Neue, Arial, sans-serif
- **Weights:** 300 (brødtekst), 400 (labels), 500 (CTA)
- **Sizes:** 11–19px
- **Line height:** 1.6
- **Letter spacing:** 0.16–0.28em i versal-labels, 0 i brødtekst
- **Role:** Al løbende tekst, labels, metadata, knapper, tal.

## Spacing & Shape

| Purpose | Value |
|---------|-------|
| Max width | 1120px |
| Gutter | 30px (20px under 640px) |
| Section padding | 88px lodret |
| Head margin | 44px |
| Panel padding | 28px |
| Border radius | **0px overalt** |
| Elevation | Ingen skygger. Dybde skabes af flader (`--brine` over `--deep`) |

## Motion

- Hero: canvas med fem lag langsomme sinusbølger, `rgba(125,178,173, .06–.16)`, over en lodret gradient `#0D2A35 → #06121A`. Perioder mellem 0.22 og 0.64 mHz — bevægelsen skal knap kunne ses.
- `prefers-reduced-motion: reduce` tegner ét statisk frame. Aldrig et tomt canvas.
- Alle overgange 0.16–0.18s ease. Ingen scroll-udløste animationer.

## Guidelines

### Do
- Hold `--brass` til præcis ét element pr. side. Bruges den to steder, mister den sin funktion.
- Sæt `--glass` på alt, der er tid, tilstand eller nummerering.
- Brug tabulære cifre på alle kg-, kr.- og klokkeslæt-værdier.
- Skriv indholdet med rigtige fangstdata: kutternavn, havnekendingsbogstav og -nummer (S 264, HM 9), landingstidspunkt, vægt i kg.
- Lad udsolgte poster blive stående, dæmpet — det er hele pointen med loggen.
- Booking skal åbne i en reel arbejdstilstand: antal gæster forvalgt, ledige tider synlige, depositum udregnet.
- Mal altid `body`-baggrunden eksplicit. Siden må aldrig arve værtens grund.

### Don't
- Ingen light-variant. Systemet er ét tema, og det er et valg.
- Brug aldrig `#000` eller `#FFF`. Det slår hele stemningen ihjel.
- Ingen bløde skygger, ingen radius, ingen gradient-knapper.
- Ingen scroll-reveal med `opacity: 0` — alt skal stå læsbart ved indlæsning.
- Ingen versal-serif i brødtekst. Bodoni er kun display.
- Undgå flere end to accentfarver. Glas og messing, punktum.
- Ingen stock-fotos af fisk. Systemet skal virke uden ét eneste billede.
