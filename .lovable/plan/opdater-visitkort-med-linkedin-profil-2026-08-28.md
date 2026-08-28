# Opdater visitkort med LinkedIn-profil

## Mål
Tilpas teksten og metadata på sunemoldt.dk, så den afspejler LinkedIn-titlen:
"Digital Marketing & E-commerce leder | AI, automation & Digital transformation | Fra strategi til eksekvering".

## Ændringer

### 1. Sideindhold (`src/pages/Visitkort.tsx`)
- Opdater `<h1>`-stilen: behold "Sune Moldt".
- Erstat tagline med:
  "Digital Marketing & E-commerce leder. Fra strategi til eksekvering gennem AI, automation og digital transformation."
- Behold note og kontakt-knapper uændret.

### 2. Helmet metadata (`src/pages/Visitkort.tsx`)
- `<title>`: "Sune Moldt | Digital Marketing & E-commerce Leder"
- `og:title`: samme som `<title>`
- `og:description`: "Digital Marketing & E-commerce leder. Jeg arbejder med AI, automation og digital transformation — fra strategi til eksekvering."

### 3. Statisk head (`index.html`)
- `<title>`: "Sune Moldt | Digital Marketing & E-commerce Leder"
- `<meta name="description">`: "Digital Marketing & E-commerce leder. Jeg arbejder med AI, automation og digital transformation — fra strategi til eksekvering."
- `og:title`: "Sune Moldt | Digital Marketing & E-commerce Leder"
- `og:description`: samme som meta description.

## Tekniske detaljer
- Ingen nye afhængigheder.
- Ingen designændringer — kun tekst og metadata.
- SEO-længder: title ~49 tegn, description ~123 tegn.
