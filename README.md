# Sorriso Dent - Website Cabinet Dentar

Site web modern și premium pentru cabinetul dentar Sorriso Dent, construit cu Next.js 14, TypeScript, Tailwind CSS și Framer Motion.

## 🚀 Caracteristici

- **Design Premium**: Interfață modernă și elegantă cu culori profesionale
- **Animații Smooth**: Micro-interacțiuni și animații subtile cu Framer Motion
- **Responsive**: Optimizat pentru toate dispozitivele (mobile, tabletă, desktop)
- **SEO Optimizat**: Meta tags, sitemap, robots.txt și structură semantică corectă
- **Formulare Validate**: Formulare pentru contact și programări cu validare completă
- **Performance**: Optimizat pentru viteza și performanță maximă

## 📋 Cerințe

- Node.js 18+ 
- npm sau yarn

## 🛠️ Instalare

1. **Clonează repository-ul** (sau navighează în folderul proiectului):
```bash
cd sorriso-dent
```

2. **Instalează dependențele**:
```bash
npm install
```

sau

```bash
yarn install
```

## 🏃 Rulare

### Modul Development

Pentru a rula site-ul în modul development:

```bash
npm run dev
```

sau

```bash
yarn dev
```

Site-ul va fi disponibil la: `http://localhost:3000`

### Build pentru Production

Pentru a crea un build optimizat pentru production:

```bash
npm run build
```

sau

```bash
yarn build
```

### Start Production Server

După build, pentru a rula serverul de production:

```bash
npm start
```

sau

```bash
yarn start
```

## 📁 Structura Proiectului

```
sorriso-dent/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Pagina Home
│   ├── globals.css        # Stiluri globale
│   ├── servicii/          # Pagina Servicii
│   ├── despre-noi/        # Pagina Despre Noi
│   ├── contact/           # Pagina Contact
│   ├── programari/        # Pagina Programări
│   ├── sitemap.ts         # Sitemap pentru SEO
│   └── robots.ts          # Robots.txt pentru SEO
├── components/            # Componente React
│   ├── Navigation.tsx     # Navigare principală
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section cu slider
│   ├── ServicesPreview.tsx # Preview servicii
│   ├── ServicesGrid.tsx   # Grid complet servicii
│   ├── Testimonials.tsx   # Testimoniale cu carousel
│   ├── ContactForm.tsx    # Formular contact
│   ├── AppointmentForm.tsx # Formular programări
│   └── ...                # Alte componente
├── public/                # Fișiere statice (imagini, etc.)
├── package.json           # Dependențe proiect
├── tailwind.config.js     # Configurație Tailwind
├── tsconfig.json          # Configurație TypeScript
└── next.config.js         # Configurație Next.js
```

## 🎨 Tehnologii Utilizate

- **Next.js 14**: Framework React cu App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Stilizare rapidă și modernă
- **Framer Motion**: Animații și micro-interacțiuni
- **React Hook Form**: Gestionare formulare
- **Zod**: Validare schema pentru formulare
- **React Icons**: Iconițe moderne

## 📝 Pagini Disponibile

- **/** - Pagina principală (Home)
- **/servicii** - Lista completă de servicii dentare
- **/despre-noi** - Despre cabinet și echipă
- **/contact** - Pagină de contact cu formulare și hartă
- **/programari** - Formular pentru programări

## 🔧 Configurare

### Actualizare Informații Contact

Pentru a actualiza informațiile de contact, editează:
- `components/ContactInfo.tsx`
- `components/Footer.tsx`
- `components/Navigation.tsx`

### Actualizare Conținut Servicii

Editează:
- `components/ServicesGrid.tsx` - pentru lista completă
- `components/ServicesPreview.tsx` - pentru preview pe homepage

### Configurare Facebook Embed

Editează `components/FacebookEmbed.tsx` cu URL-ul corect al postării Facebook.

## 📱 Responsive Design

Site-ul este complet responsive și optimizat pentru:
- Mobile (320px+)
- Tabletă (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🚀 Deployment

### Vercel (Recomandat)

1. Conectează repository-ul la Vercel
2. Vercel va detecta automat Next.js
3. Deploy automat la fiecare push

### Alte Platforme

Site-ul poate fi deployat pe orice platformă care suportă Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- etc.

## 📞 Informații Contact

- **Telefon**: 0724 481 200
- **Adresă**: Bloc 1, Bulevardul Camil Ressu nr.66, București 031761
- **Facebook**: [Sorriso Dent Facebook](https://www.facebook.com/sorrisodent)

## 📄 Licență

Acest proiect este proprietate privată a Sorriso Dent.

## 🆘 Suport

Pentru întrebări sau probleme, contactați echipa de dezvoltare.

---

**Notă**: Asigurați-vă că actualizați URL-urile și informațiile de contact înainte de deployment în production!

