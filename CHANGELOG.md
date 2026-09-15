# Changelog — DecIA

Historique des évolutions du site, par date. Pas de numéros de version : on
documente ce qui change et pourquoi, dans l'ordre chronologique.

## 2026-09-15

### Mis en ligne
- Site déployé sur GitHub Pages, domaine `decia.fr` pointé chez Hostinger et
  HTTPS actif.

### Ajouté
- Navigation header : liens Offre / Méthode / Pourquoi DecIA à côté du CTA.
- Téléphone de contact en footer : +33 6 89 18 01 95.
- Trois emplacements photo (placeholders) : ambiance de travail (hero),
  productivité (entre Méthode et Pourquoi DecIA), gain financier (preuve
  sociale).

### Modifié
- Taille des labels de catégorie (« Preuve sociale », « Notre méthode »…)
  augmentée de 0.72rem à 0.92rem pour plus de lisibilité.

### Corrigé
- Le contenu ne dépendait plus du chargement de `js/main.js` pour être
  visible (les blocs `.reveal` restaient invisibles si le script ne se
  chargeait pas) — le contenu s'affiche maintenant par défaut, animation
  en bonus.

## Historique antérieur

- Construction de la page en 9 sections (header, hero, offre, preuve
  sociale, méthode, à propos, FAQ, CTA final, footer), architecture
  multi-fichiers (`index.html` + `css/` + `js/` + `assets/`), sur la base du
  contenu et de l'identité visuelle de la v4 existante.
