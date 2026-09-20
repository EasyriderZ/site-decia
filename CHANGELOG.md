# Changelog — DecIA

Historique des évolutions du site, par date. Pas de numéros de version : on
documente ce qui change et pourquoi, dans l'ordre chronologique.

## 2026-09-20

### Corrigé — lien mort dans `index.html`
Le bouton « Voir un exemple pour mon métier » (section Solutions) pointait
vers `experiences-metier.html`, une page qui n'existe pas. Il pointe
maintenant vers `etudes-de-cas.html`.

## 2026-09-19 (4)

### Ajouté — page Politique de confidentialité
Nouvelle page `confidentialite.html` (responsable du traitement, données
collectées, finalités, durée de conservation, destinataires, droits RGPD,
cookies, sécurité), habillée au look du site et réutilisant les composants
`.legal-content` / `.legal-block` créés pour les mentions légales. Contenu
fourni par le client, dernière mise à jour affichée : 19 septembre 2026.
- Lien « Confidentialité » du footer mis à jour de `#` vers
  `confidentialite.html` sur toutes les pages (`index.html`, `audit.html`,
  `methode.html`, `etudes-de-cas.html`, `mentions-legales.html`).
- `ROADMAP.md` : cases correspondantes cochées.

## 2026-09-19 (3)

### Ajouté — page Mentions légales
Nouvelle page `mentions-legales.html` (éditeur, hébergeur, propriété
intellectuelle, responsabilité, droit applicable), habillée au look du
site. Contenu fourni par le client (Matteo MORO, EI, SIRET
944 722 685 00012 — hébergeur Hostinger International Ltd.).
- Nouveaux composants ajoutés à `css/style.css` : `.legal-content`,
  `.legal-block`, `.legal-dl` (liste de définitions label/valeur pour les
  informations éditeur/hébergeur).
- Lien « Mentions légales » du footer mis à jour de `#` vers
  `mentions-legales.html` sur toutes les pages (`index.html`, `audit.html`,
  `methode.html`, `etudes-de-cas.html`).
- `ROADMAP.md` : cases correspondantes cochées.

## 2026-09-19 (2)

### Modifié — refonte complète de `methode.html`
Contenu remplacé mot pour mot par la maquette « On ne commence pas par un
outil, on commence par vous » : hero à 2 colonnes (texte + carte "notre
approche en 3 étapes"), 3 illustrations avant/après (photo WhatsApp → devis,
factures fournisseurs, relances devis), détail des 3 étapes (observation,
déploiement en 4 jours avec table des outils conservés, autonomie avec
mockup de message modifiable), 3 tickets de chantiers récents, CTA final
avec carte "déroulé des 30 min". Habillé au look DecIA existant (header/
footer du site, tokens de `css/style.css`).
- Nouveaux composants ajoutés à `css/style.css` (section « Page Méthode ») :
  hero éclaté (`.hero-split`, `.mini-card`), illustrations avant/après
  (`.illustration-card`, `.il-compare`), badge d'étape (`.step-badge`),
  détail d'étape en 2 colonnes (`.step-detail`), table process
  (`.process-table`), panneau de déploiement (`.timeline-panel`,
  `.timeline-days`), table des outils (`.tools-table`), cartes autonomie
  (`.autonomy-card`), mockup de message (`.message-mock`), tickets de
  chantiers (`.ticket-card`), CTA final enrichi (`.cta-rich`, `.cta-inner`).

## 2026-09-19

### Modifié — refonte complète d'`audit.html`
Contenu remplacé mot pour mot par la maquette « Audit IA : passez de
l'intuition à la performance » (score de maturité, méthodologie 4 piliers,
roadmap 21 jours, garantie, cartes pour-qui/pas-pour-qui, FAQ prix/process,
formulaire de diagnostic), habillé au look DecIA existant (header/footer du
site, tokens de `css/style.css`, accordéon FAQ de `js/main.js`).
- Nouveaux composants ajoutés à `css/style.css` (section dédiée en fin de
  fichier) : mockup de restitution (`.report-mock` + anneau de score en
  conic-gradient), cartes contexte (`.context-card`), cartes piliers
  (`.pillar-card`), bandeau callout (`.callout-card`), roadmap verticale
  (`.roadmap`), cartes pour-qui/pas-pour-qui (`.fit-card`), CTA final enrichi
  (`.final-cta`) et formulaire (`.audit-form`).
- Formulaire de diagnostic non fonctionnel par conception (site 100%
  statique, pas de backend) : soumission interceptée en JS, mention
  « maquette sans backend » conservée, contact via `audit@decia.fr`.

## 2026-09-16 (2)

### Ajouté
- Favicon complet, généré à partir du symbole « IA » recadré dans
  `assets/logo.png` (fond transparent pour l'onglet navigateur, fond noir
  plein pour les icônes d'écran d'accueil) : `assets/favicon.ico`,
  `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` (180px),
  `android-chrome-192x192.png`, `android-chrome-512x512.png`, et
  `assets/site.webmanifest` pour l'ajout à l'écran d'accueil iOS/Android.
  Liens correspondants ajoutés dans le `<head>` de `index.html`.

## 2026-09-16

### Supprimé
- Les 3 emplacements photo du site (hero, bande « productivité » dans
  Méthode, « gain financier » dans Réalisations) et tout le CSS associé
  (`.photo-placeholder` et ses variantes, `.photo-band`).
- Section « Réalisations » (`#preuve`) entière : chiffres placeholders,
  témoignages clients, logos clients — retirée avec son CSS
  (`.stats-block`, `.stats-row`, `.stat`, `.testimonials`, `.testimonial`,
  `.client-logos`, `.proof-note`).

### Modifié — hero repris au pixel de decia-v4.html
- Hero centré sur une seule colonne (au lieu de deux colonnes texte +
  photo) : `text-align:center`, `.hero-inner` en `max-width:720px` centré,
  padding fixe `200px 0 100px`, tailles de titre/texte et espacements
  calqués sur la v4.
- Ajout du champ de bulles décoratif (`.bubble-field` : « Agent IA »,
  « Automatisation »), masqué sous 960px comme dans la v4.
- Les repères (« Audit en 2 semaines »…) sont maintenant centrés sous les
  boutons, eux aussi centrés (`justify-content:center`), au lieu d'être
  alignés à gauche.
- Logo du header : taille fixe 24px (au lieu d'un `clamp()` fluide), pour
  coller exactement à la v4.
- `--space-7` (uniquement utilisé par l'ancien padding du hero) retiré des
  tokens, devenu inutile.
- Numérotation des commentaires de section dans `index.html` mise à jour
  (8 sections au lieu de 9) suite à la suppression de « Réalisations ».
- README/ROADMAP mis à jour pour refléter l'absence de photos et de
  section Réalisations.

## 2026-09-15 (9)

### Corrigé — bug bloquant : site pas responsive sur smartphone
Cause racine identifiée : `.photo-band` (bandeau photo « productivité »,
entre les 3 étapes de la méthode) combinait `aspect-ratio: 21 / 6` et
`min-height: 180px` sans variante mobile. Sur un écran étroit, l'algorithme
CSS `aspect-ratio` calcule d'abord la hauteur (min-height gagne car le ratio
donnerait une hauteur plus petite), puis **recalcule la largeur à partir de
cette hauteur et du ratio** — soit 180 × 21/6 = 630px, bien plus large que
l'écran. Comme cet élément n'était clipé par aucun ancêtre `overflow:hidden`,
ça forçait TOUTE la page à s'élargir (site zoomé/tronqué, comme si on était
resté en vue desktop — exactement le symptôme décrit).
- `.photo-band` : ratio resserré à `16/9` et `min-height` réduit à `140px`
  sous 860px, pour que l'aspect-ratio ne dépasse jamais la largeur du
  conteneur mobile.
- Même bug plus mineur (mais contenu par le `overflow:hidden` du hero)
  sur `.hero-visual .photo-placeholder` : `min-height` mobile réduit de
  220px à 140px pour la même raison.
- `.hero-inner` / `.hero-visual` (colonnes de la grille du hero) :
  ajout de `min-width: 0`, car les enfants de grid ont par défaut un
  `min-width: auto` qui les empêche de rétrécir sous la largeur de leur
  contenu (ici les boutons en `white-space: nowrap`) — deuxième cause de
  débordement horizontal, plus discrète, trouvée pendant le même audit.
- Vérifié à 320px, 375px et au-delà : plus aucun débordement horizontal
  sur toute la page (`scrollWidth === clientWidth` partout), site
  entièrement défilable et lisible du header au footer.

## 2026-09-15 (8)

### Modifié — style visuel repris de decia-v4.html
Contenu et rubriques inchangés ; seuls les tokens et traitements visuels
ont été alignés sur `decia-v4.html` (le fichier fourni pour référence) :
- Police du texte courant : Inter → Plus Jakarta Sans (Inter retirée du
  chargement Google Fonts, plus utilisée nulle part).
- Nouvelle couleur d'accent claire `--accent: #5c9cff` (icônes des
  cartes bénéfices, badges d'étapes, eyebrows, liens footer survolés,
  contour de focus) — distincte du bleu du dégradé principal.
- Rayons de bordure resserrés : `--radius-sm` 10px→8px, `--radius-md`
  16px→14px, `--radius-lg` 24px→22px (cartes, boutons, CTA final).
- Gouttières de page élargies : `--container-w` 1160px→1180px,
  padding du `.container` 24px→40px (22px sous 560px).
- Rythme vertical des sections agrandi : `--space-6` 6rem→7.5rem
  (section-pad et bas du hero).
- Eyebrows (« Consulting IA... », « Réalisations »...) : plus petits,
  en majuscules, espacés, colorés en accent (au lieu de gris uni).
- Boutons : padding/rayon/taille ajustés, glow uniquement au survol
  (translateY + ombre bleue) au lieu d'une ombre permanente ; bouton
  secondaire avec fond légèrement teinté.
- Halo du hero (`.hero-glow`) : dégradé ellipse à 3 arrêts + flou,
  plus proche du rendu v4.
- Puces de repères (`.proof-chip`) : légère animation de flottement en
  continu, décalée par puce.
- Cartes bénéfices : effet de survol repensé (soulèvement + bordure
  bleutée au lieu d'un simple changement de fond).
- Badges numérotés des étapes (`.step-num`) : transformés en pastilles
  circulaires (au lieu d'un simple texte), qui s'agrandissent légèrement
  au survol de la carte.
- Animation d'apparition au scroll (`.reveal`) : distance et durée
  augmentées avec un easing `cubic-bezier`, plus un effet de cascade
  (`.stagger`) sur les grilles (bénéfices, chiffres, témoignages,
  étapes) pour un apparition décalée élément par élément.
- CTA final : fond en dégradé plein (au lieu d'un fond translucide),
  texte blanc, bouton inversé (fond blanc), halo décoratif en coin.
- Footer : libellés de colonnes en majuscules espacées, liens en accent
  au survol, espacements ajustés.

## 2026-09-15 (7)

### Modifié
- Graisse des titres (h1-h4) : 600 (semi-gras) → 700 (gras). Le poids
  700 en Plus Jakarta Sans était déjà chargé depuis Google Fonts, seule
  la règle `font-weight` a changé (`css/style.css`, règle `h1,h2,h3,h4`).

## 2026-09-15 (6)

### Modifié
- Police des titres (`--font-display`, utilisée par h1-h4 et les éléments
  d'accent comme les chiffres de la preuve sociale) : Space Grotesk →
  Plus Jakarta Sans. Police chargée en 400/500/600/700 depuis Google
  Fonts à la place de Space Grotesk ; Inter (texte courant) et
  JetBrains Mono (labels) inchangées.

## 2026-09-15 (5)

### Modifié
- Bouton « Réserver un appel » du header : hauteur réduite (padding
  vertical 0.85rem → 0.5rem, classe `.nav-group .btn-primary`) pour
  rester discret à côté du logo ; les autres boutons `.btn` du site ne
  sont pas concernés.

## 2026-09-15 (4)

### Corrigé
- Header : le conteneur interne se réduisait à la largeur de son contenu
  (bug de sizing flex latent, invisible tant que rien n'était collé aux
  bords) au lieu de remplir toute la largeur disponible — logo et bloc
  nav+CTA se retrouvaient centrés au lieu d'être chacun sur un bord.
  `width: 100%` ajouté sur `.site-header .container`.

### Modifié
- Rubriques + CTA (+ burger en dessous de 960px) regroupés dans un seul
  bloc `.nav-group` collé au bord droit ; le logo reste fixe tout à
  gauche. C'est ce bloc, et lui seul, qui s'adapte à la largeur de page.

## 2026-09-15 (3)

### Modifié
- Header repris au format de `decia-v4.html` (rubriques inchangées) :
  passage en `position: fixed` flottant et transparent au repos, fond
  opaque + flou uniquement après un léger scroll, hauteur qui se resserre
  au scroll, soulignement animé au survol des liens de nav. Seuil
  d'apparition du menu burger relevé de 760px à 960px, en cohérence avec
  la v4.
- « Preuve sociale » renommée en « Réalisations » (eyebrow de la section
  `#preuve`).
- Boutons (`.btn`) moins arrondis : `border-radius` passé de la forme
  pilule à `var(--radius-sm)` (10px).

## 2026-09-15 (2)

### Ajouté
- Menu burger en dessous de 760px : les liens de nav et le CTA passent dans
  un panneau déroulant accessible (clavier, `aria-expanded`, fermeture sur
  Échap/clic sur un lien/retour en largeur desktop).
- Photo du hero (`#top`) remplie avec le visuel « Automatisation — plus de
  clients, moins de tâches répétitives » (`assets/photos/hero-automatisation.jpg`).

### Modifié
- Hauteur du header (`--header-h`) rendue fluide via `clamp()` (56px à
  76px) au lieu d'une valeur fixe, pour suivre la largeur de la fenêtre.
- Les visuels déjà composés (texte/graphique intégrés à l'image, comme la
  photo du hero) utilisent un cadrage `object-position: top` sans
  l'assombrissement prévu pour les photos brutes (classe `.photo-fit-top`).

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
