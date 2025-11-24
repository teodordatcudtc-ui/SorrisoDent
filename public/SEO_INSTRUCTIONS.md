# Instrucțiuni SEO - Fișiere Necesare

## Favicon și Apple Touch Icon

Pentru a rezolva problemele de SEO legate de favicon și Apple Touch Icon, trebuie să adaugi următoarele fișiere în folderul `public/`:

### 1. Favicon (favicon.ico)
- **Locație**: `public/favicon.ico`
- **Dimensiuni**: 32x32px sau 16x16px
- **Format**: ICO
- **Conținut**: Logo-ul Sorriso Dent sau un icon simplu reprezentând un dinte/zâmbet

### 2. Apple Touch Icon (apple-touch-icon.png)
- **Locație**: `public/apple-touch-icon.png`
- **Dimensiuni**: 180x180px (recomandat pentru iOS)
- **Format**: PNG
- **Conținut**: Logo-ul Sorriso Dent pe fundal transparent sau colorat

### Cum să creezi aceste fișiere:

1. **Opțiunea 1 - Online Tools**:
   - Folosește un tool online precum [Favicon.io](https://favicon.io/) sau [RealFaviconGenerator](https://realfavicongenerator.net/)
   - Upload logo-ul tău și generează toate variantele necesare

2. **Opțiunea 2 - Manual**:
   - Creează un logo simplu în Photoshop/Illustrator
   - Exportă ca ICO pentru favicon (32x32px)
   - Exportă ca PNG pentru Apple Touch Icon (180x180px)

3. **Opțiunea 3 - Placeholder temporar**:
   - Poți crea temporar un favicon simplu cu text "SD" sau un icon generic
   - Important: Adaugă fișierele chiar dacă sunt temporare, pentru a rezolva eroarea SEO

## Redirect www/non-www

Pentru a rezolva problema redirect-ului www/non-www, adaugă următoarea configurație în `next.config.js`:

```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['scontent.xx.fbcdn.net', 'scontent.fotp3-1.fna.fbcdn.net', 'images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sorrisodent.ro',
          },
        ],
        destination: 'https://www.sorrisodent.ro/:path*',
        permanent: true,
      },
    ]
  },
}
```

**SAU** configurează redirect-ul direct la nivel de hosting (Vercel, Netlify, etc.) - aceasta este opțiunea recomandată.

## Google Analytics

Pentru a adăuga Google Analytics, creează un fișier `components/GoogleAnalytics.tsx`:

```tsx
'use client'
import Script from 'next/script'

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Înlocuiește cu ID-ul tău de Google Analytics

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  )
}
```

Apoi adaugă în `app/layout.tsx`:
```tsx
import GoogleAnalytics from '@/components/GoogleAnalytics'

// În componentă, adaugă:
<GoogleAnalytics />
```

## Optimizări Suplimentare

### Imagini WebP
- Convertește toate imaginile în format WebP pentru performanță mai bună
- Next.js Image component suportă automat WebP când este disponibil

### CDN
- Consideră folosirea unui CDN pentru imagini și resurse statice
- Vercel (dacă folosești Vercel) oferă CDN automat

### Mobile PageSpeed
- Optimizează imaginile (comprimare, dimensiuni corecte)
- Minimizează CSS și JavaScript
- Folosește lazy loading pentru imagini

## Notă Importantă

După ce adaugi favicon-ul și apple-touch-icon, rulează din nou testele SEO pentru a verifica că problemele au fost rezolvate.

