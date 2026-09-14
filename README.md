# DecIA — site vitrine (v5)

Site monopage, prêt pour Git et pour de futures évolutions (nouvelles pages,
nouvelles sections, contenu dynamique).

## Structure

```
decia-v5/
├── index.html        page unique, 9 sections commentées dans le code
├── css/
│   └── style.css      tokens de design (couleurs, typo, espacements) + styles
├── js/
│   └── main.js         header sticky, reveal au scroll, accordéon FAQ
├── assets/
│   └── logo.png        logo extrait de la v4
└── README.md
```

Chaque section de `index.html` est délimitée par un commentaire numéroté
(`<!-- 1. HEADER -->`, `<!-- 2. HERO -->`, etc.) pour retrouver rapidement
où éditer.

## Contenu à finaliser avant mise en ligne

La section « Preuve sociale » (`#preuve`) contient des **placeholders**
explicites (`[XX]`, `[Nom Prénom]`, `LOGO 1`…) à remplacer par vos vrais
chiffres, témoignages et logos clients.

Trois emplacements photo (`<figure class="photo-placeholder">`) sont prévus
dans le hero, entre « Méthode » et « Pourquoi DecIA », et dans la preuve
sociale — thèmes : ambiance de travail, productivité, gain financier. Pour
les remplir : ajoutez vos fichiers dans `assets/photos/`, puis dans
`index.html` ajoutez `<img src="assets/photos/votre-fichier.jpg" alt="...">`
à l'intérieur du `<figure>` correspondant (la légende disparaît d'elle-même
derrière la photo). Sources gratuites et libres de droits commerciaux :
[unsplash.com](https://unsplash.com) ou [pexels.com](https://pexels.com).

## Déploiement sur GitHub Pages + domaine Hostinger

1. Poussez ce dossier sur un dépôt GitHub (`main` ou une branche dédiée).
2. Dans les paramètres du dépôt → **Pages**, activez GitHub Pages sur la
   branche/dossier voulu.
3. Ajoutez votre domaine personnalisé dans ce même écran : GitHub crée
   automatiquement un fichier `CNAME` à la racine du dépôt.
4. Chez Hostinger, dans la zone DNS du domaine, pointez-le vers GitHub Pages
   (enregistrement `A`/`ALIAS` pour un domaine racine, ou `CNAME` pour un
   sous-domaine comme `www`). Les valeurs exactes à utiliser sont indiquées
   en temps réel dans la doc officielle GitHub Pages — évitez de copier une
   IP trouvée ailleurs, elles peuvent changer.
5. Attendez la propagation DNS (jusqu'à 24-48h), puis activez « Enforce
   HTTPS » dans les paramètres Pages une fois le certificat proposé.

## Prochaines évolutions prévues

Cette architecture (fichiers séparés, sections commentées, tokens CSS
centralisés) est pensée pour absorber sans refonte : nouvelles sections,
nouvelles pages (`/mentions-legales.html`, `/blog/...`), ou migration vers
un contenu piloté par un CMS/JS plus tard.
