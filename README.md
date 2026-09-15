# DecIA — site vitrine

Site monopage en ligne sur https://decia.fr (GitHub Pages), prêt pour de
futures évolutions (nouvelles pages, nouvelles sections, contenu dynamique).

## Structure

```
decia/
├── index.html        page unique, 9 sections commentées dans le code
├── css/
│   └── style.css      tokens de design (couleurs, typo, espacements) + styles
├── js/
│   └── main.js         header sticky, reveal au scroll, accordéon FAQ
├── assets/
│   └── logo.png        logo du site
├── CHANGELOG.md       historique daté des évolutions
├── ROADMAP.md          ce qui reste à faire
└── README.md
```

Chaque section de `index.html` est délimitée par un commentaire numéroté
(`<!-- 1. HEADER -->`, `<!-- 2. HERO -->`, etc.) pour retrouver rapidement
où éditer.

## Workflow pour les évolutions

Le site est en ligne : on évite de casser la prod en travaillant directement
sur `main`.

1. **Une branche par évolution** : dans GitHub, onglet « main » (menu
   déroulant en haut à gauche du dépôt) → tapez un nom (ex.
   `photo-ambiance-travail`) → « Create branch ».
2. Faites vos modifications sur cette branche (édition directe des fichiers
   sur GitHub, ou via un outil local).
3. Ouvrez une **Pull Request** vers `main` (GitHub vous le propose
   automatiquement après un commit sur une branche) pour relire le diff
   avant de fusionner.
4. Une fois fusionnée, GitHub Pages redéploie automatiquement le site
   (1-2 minutes).
5. Notez le changement dans `CHANGELOG.md` (date + ce qui a changé) et
   cochez la case correspondante dans `ROADMAP.md` si applicable.

Pour un suivi plus formel des tâches à venir, chaque ligne de `ROADMAP.md`
peut aussi devenir une **issue GitHub** (onglet « Issues » → « New issue »).

## Contenu à finaliser

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

Le détail de ce qui reste à faire est dans `ROADMAP.md`.

## Déploiement

Le site est déjà déployé sur GitHub Pages avec `decia.fr` pointé chez
Hostinger (4 enregistrements A vers les IP GitHub Pages + HTTPS forcé).
Toute modification fusionnée sur `main` est republiée automatiquement.
