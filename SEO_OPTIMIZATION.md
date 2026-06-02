# Optimisation SEO - Impact Mental

## Meta Tags recommandés

Pour optimiser le référencement Google de votre site, ajoutez ces balises dans le `<head>` de votre page HTML :

```html
<!-- Meta Tags de Base -->
<title>Impact Mental | Préparation Mentale Tennis & Sports - Renaud Olivier</title>
<meta name="description" content="Préparateur mental spécialisé tennis et sports de performance. Coach depuis 2007. Séances individuelles, cohérence cardiaque, visualisation. Renaud Olivier - France.">
<meta name="keywords" content="préparation mentale, coach mental, tennis, cohérence cardiaque, visualisation, gestion stress, performance sportive, Renaud Olivier">
<meta name="author" content="Renaud Olivier">
<meta name="robots" content="index, follow">
<meta name="language" content="French">
<meta name="geo.region" content="FR">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://votre-domaine.fr/">
<meta property="og:title" content="Impact Mental | Préparation Mentale Tennis & Sports">
<meta property="og:description" content="Préparateur mental spécialisé tennis. Coach depuis 2007. Développez votre mental de champion avec des outils concrets et efficaces.">
<meta property="og:image" content="https://votre-domaine.fr/og-image.jpg">
<meta property="og:locale" content="fr_FR">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://votre-domaine.fr/">
<meta name="twitter:title" content="Impact Mental | Préparation Mentale Tennis & Sports">
<meta name="twitter:description" content="Préparateur mental spécialisé tennis. Développez votre mental de champion.">
<meta name="twitter:image" content="https://votre-domaine.fr/twitter-image.jpg">

<!-- Mobile -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#00d4ff">

<!-- Canonical -->
<link rel="canonical" href="https://votre-domaine.fr/">
```

## Structured Data (JSON-LD)

Ajoutez ce script dans le `<head>` pour améliorer votre apparence dans les résultats Google :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Impact Mental",
  "image": "https://votre-domaine.fr/logo.png",
  "description": "Préparation mentale spécialisée tennis et sports de performance. Coach mental depuis 2007.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "telephone": "+33665655605",
  "email": "renaud_olivier@hotmail.fr",
  "url": "https://votre-domaine.fr",
  "priceRange": "€€",
  "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-13:00",
  "founder": {
    "@type": "Person",
    "name": "Renaud Olivier",
    "jobTitle": "Préparateur Mental",
    "description": "Coach de tennis depuis 2007 et préparateur mental depuis 2021"
  },
  "areaServed": "France",
  "serviceType": [
    "Préparation mentale tennis",
    "Coaching mental sportif",
    "Cohérence cardiaque",
    "Visualisation mentale"
  ]
}
</script>
```

## Optimisations des Images

### 1. Ajouter des balises ALT descriptives

Toutes les images doivent avoir un attribut `alt` descriptif :

```tsx
// ✅ BON
<img src="photo.jpg" alt="Renaud Olivier, préparateur mental, lors d'une séance avec un joueur de tennis" />

// ❌ MAUVAIS
<img src="photo.jpg" alt="photo" />
```

### 2. Images Open Graph

Créez deux images optimisées :
- **og-image.jpg** : 1200x630px pour Facebook/LinkedIn
- **twitter-image.jpg** : 1200x675px pour Twitter

Contenu suggéré :
- Logo Impact Mental
- Texte : "Préparation Mentale Tennis & Sports"
- Photo professionnelle de Renaud
- Couleurs : bleu nuit (#0a0e27) et cyan (#00d4ff)

## Optimisation du Contenu

### Hiérarchie des Titres

```
H1: Impact Mental (une seule fois, déjà présent ✓)
H2: Sections principales (Services, Tarifs, etc.) ✓
H3: Sous-sections ✓
```

### Mots-clés principaux à utiliser

- Préparation mentale
- Coach mental
- Tennis
- Cohérence cardiaque
- Visualisation mentale
- Gestion du stress
- Performance sportive
- Renaud Olivier

### URLs recommandées

Si vous ajoutez des pages :
- `/services` - Liste des services
- `/coherence-cardiaque` - Page dédiée
- `/tarifs` - Grille tarifaire
- `/contact` - Formulaire
- `/temoignages` - Avis clients
- `/blog` - Articles (futur)

## Fichiers à créer

### 1. robots.txt

Créez `/public/robots.txt` :

```
User-agent: *
Allow: /

Sitemap: https://votre-domaine.fr/sitemap.xml
```

### 2. sitemap.xml

Créez `/public/sitemap.xml` :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://votre-domaine.fr/</loc>
    <lastmod>2026-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## Google Business Profile

### À créer impérativement :

1. **Google Business Profile** (gratuit)
   - Nom : Impact Mental - Renaud Olivier
   - Catégorie : Coach sportif / Préparateur mental
   - Téléphone : 06 65 65 56 05
   - Email : renaud_olivier@hotmail.fr
   - Site web : votre-domaine.fr
   - Description : Reprendre la description meta
   - Photos : Ajoutez des photos de séances, logo, portrait

2. **Google Search Console**
   - Ajoutez votre site
   - Soumettez le sitemap
   - Surveillez les performances

3. **Google Analytics** (optionnel)
   - Suivez les visiteurs
   - Analysez le comportement

## Performances Web

### Checklist :

- ✅ Images optimisées (WebP, compression)
- ✅ CSS minifié (Tailwind fait ça automatiquement)
- ✅ Lazy loading des images
- ✅ Responsive design
- ✅ Temps de chargement < 3 secondes

## Réseaux Sociaux

### Profils à créer :

1. **LinkedIn** - Professionnel
   - Renaud Olivier - Préparateur Mental
   - Partager articles, conseils

2. **Instagram** (optionnel)
   - @impactmental
   - Photos séances, citations motivantes

3. **Facebook** (optionnel)
   - Page Impact Mental
   - Événements, témoignages

## Contenu Futur (Blog)

### Idées d'articles SEO :

1. "Comment gérer son stress avant un match de tennis"
2. "La cohérence cardiaque : 5 minutes pour performer"
3. "Visualisation mentale : technique des champions"
4. "Préparation mentale tennis : pourquoi c'est indispensable"
5. "Mes 3 conseils pour rester concentré en compétition"

Chaque article = mot-clé + trafic Google !

## Checklist SEO Finale

- [ ] Meta description unique
- [ ] Titre optimisé (< 60 caractères)
- [ ] Structured Data ajouté
- [ ] Images avec ALT
- [ ] robots.txt créé
- [ ] sitemap.xml créé
- [ ] Google Business Profile créé
- [ ] Search Console configuré
- [ ] Vitesse de chargement < 3s
- [ ] Mobile-friendly ✅ (déjà fait)
- [ ] HTTPS (à configurer au déploiement)

## Prochaines Étapes

1. Acheter un nom de domaine (ex: impactmental.fr)
2. Hébergement (Vercel, Netlify, etc.)
3. Configurer HTTPS
4. Créer Google Business Profile
5. Ajouter Google Analytics
6. Créer profils réseaux sociaux
7. Commencer à publier du contenu régulièrement

---

**Note** : Le SEO prend du temps (3-6 mois pour voir des résultats). La régularité et la qualité du contenu sont clés !
