# -vening — premium restaurant- og cafékoncepter

## Bullion — bygget med `/design-loop`

Fiktiv luksus-brasserie i en bankbygning fra 1897 på Bredgade. Hero, intro, menu og
reservation, bygget mod **amritpalace.com** som bar og drevet af buildere + tre
friske kritikere pr. stykke, indtil alle tre bestod. Fotografi og hero-video via Sjinn.

- **Live:** https://claude.ai/code/artifact/29f30ff0-978a-4cae-b241-9cf70e2ebc6e
- **Loop-status:** https://claude.ai/code/artifact/d518b236-8ad7-465c-8d12-a180c122e716
- `bar.md` — syv målbare mekanismer udledt af referencens render
- `design-system.md` — Bullions egne værdier (kølig sten, grøn-sort, ét guld, Newsreader 300 + Manrope 500)
- `pieces/` — ét stykke pr. fil + `base.css`; `assemble.mjs` inliner assets fra `assets/bullion/*.txt`
- `reference/` — screenshots af baren; `.claude/skills/design-loop/` — metoden

Resultat: 7 runder, 33 kritikerkørsler, 4/4 stykker. Craft-kritikerne foretrak Bullion
frem for referencen i blind sammenligning på hero, intro og menu.

---

Øverepo til at blive skarpere på at generere **premium** hjemmesider til restauranter
og cafeer — og til at gøre resultatet gentageligt i stedet for tilfældigt.

## De tre koncepter

| Koncept | Type | Visuel verden | Live |
|---------|------|---------------|------|
| **MALT** | Surdejsbageri, Nørrebro | Industriel stencil. Melhvid, grafit, én ovnglød | [Åbn](https://claude.ai/code/artifact/d14d1344-d72d-4053-a344-bacb7f789e1c) |
| **HAVSALT** | Havrestaurant, Skagen | Cinematisk mørk. Bodoni, havglas, messing | [Åbn](https://claude.ai/code/artifact/03694a63-c4b7-45df-b0ac-c8ccf3921043) |
| **BLOK** | Kaffe & køkken, Aarhus Ø | Schweizisk plakat. Flad farve, ingen fotos | [Åbn](https://claude.ai/code/artifact/f7eb38f4-3ebd-4975-a55b-b6392488dce9) |

Hver mappe under `concepts/` indeholder:

- `index.html` — hele siden, ét selvstændigt dokument uden byggetrin
- `DESIGN.md` — designsystemet i Refero-format, klar til at give en AI-agent

## Hvad de tre har til fælles

Det er ikke farverne, og det er ikke typografien. Det er, at **hver side er
organiseret om noget, forretningen faktisk gør**, i stedet for om de sædvanlige
sektioner (Hero → Om os → Menu → Kontakt):

- MALT er organiseret om **bageplanen** — hvornår hvad kommer ud af ovnen
- HAVSALT er organiseret om **landingsloggen** — hvilken kutter landede hvad i morges
- BLOK er organiseret om **tre tidsblokke** — køkkenet skifter helt om tre gange dagligt

Alle tre viser en **live tilstand** ved indlæsning: siden ved, hvad klokken er, og
fortæller hvad der sker lige nu. Det er billigt at bygge og er den enkeltdel, der
tydeligst adskiller en premium-side fra en skabelon.

Ingen af de tre sider bruger et eneste fotografi. Det er bevidst — de fleste
restaurantsider står og falder med kundens billedmateriale, og det er sjældent godt
nok. Systemer, der virker uden foto, bliver bedre, når der *er* foto.

## Om Refero Styles

`styles.refero.design` er et bibliotek af designsystemer udtrukket fra rigtige
websites og pakket som `DESIGN.md`-filer, som en AI-agent kan læse direkte.

**Det indeholder ingen restauranter eller cafeer.** 1290 styles, og kategorierne er
udelukkende produkt-UI: `clean-saas`, `fintech-websites`, `devtools-websites`,
`ai-startup-websites`, `ecommerce-websites`, `agency-websites`, `editorial-websites`,
`dark-mode-websites`, `minimal-websites`, `productivity-apps`.

Værdien for restaurantarbejde ligger derfor ikke i referencerne — den ligger i
**formatet**. En brugbar `DESIGN.md` har tre lag:

1. **Tokens** — de præcise værdier. Fjerner tilfældighed: agenten opfinder ikke et nyt
   system i hver komponent.
2. **Rationale** — hvornår hver værdi bruges. `primary` er ikke nok; agenten skal vide,
   hvor farven hører hjemme, og hvor den ikke gør.
3. **Do / Don't** — de eksplicitte forbud. Det er dem, der gør mest arbejde. "Premium"
   og "clean" betyder ingenting for en model, før de er oversat til regler som
   *ingen border-radius* og *accentfarven optræder ét sted pr. side*.

Filen bliver desuden et review-mål: output kan holdes op mod filen i stedet for mod
smag.

Hold den kort. Bliver den til en designbog, fortynder agenten reglerne.

## Byg standalone HTML

Filerne i `concepts/*/index.html` er skrevet i artifact-format — uden
`<!doctype>`, `<html>`, `<head>` og `<body>`, fordi den skal tilføjes ved
publicering. Til hosting hos en kunde pakkes de til komplette dokumenter med:

```sh
./build.sh          # skriver til dist/<koncept>/index.html
```

## Næste skridt

Koncepterne er rene facader — "kun for udseendet", som aftalt. Det der mangler for at
gøre dem til platforme:

- **MALT** — bageplanen skal komme fra data i stedet for markup, så bageren kan rette
  tider uden at røre HTML
- **HAVSALT** — landingsloggen og bookingen skal have et backend; bookingflowet er i
  dag et realistisk, men klient-kun mockup
- **BLOK** — tidsblokkene og menuerne skal ligge i et admin-kort
