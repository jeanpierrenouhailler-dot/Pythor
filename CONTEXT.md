# 📖 CONTEXTE DU PROJET — PYTHOR

## 1. Identité & Fiche Projet

- **Nom du Projet :** Pythor
- **URL Publique de Production :** [https://pythor.swinux.ch/](https://pythor.swinux.ch/)
- **Dépôt GitHub :** [https://github.com/jeanpierrenouhailler-dot/Pythor](https://github.com/jeanpierrenouhailler-dot/Pythor)
- **Hébergement Cible :** Cloudflare Pages (Distribution globale Edge, SPA Vite statique)
- **Vocation :** Application web progressive (PWA) d'apprentissage actif et d'entraînement intensif aux certifications officielles Python (Python Institute et écosystème Data / QA / SecOps / Automation / AI).

---

## 2. Décharge de Responsabilité & Cadre Juridique

### ⚠️ Clause de Non-Responsabilité Légale
L'auteur, le créateur et l'éditeur de l'application **Pythor** déclinent formellement toute responsabilité civile ou contractuelle concernant :
- L'exactitude, la précision, l'exhaustivité ou la mise à jour des questions, réponses, fragments de code Python, assertions et corrigés fournis dans l'application.
- Les résultats obtenus par les candidats lors des examens officiels réels du Python Institute ou de tout autre organisme certificateur.
- Tout dommage matériel, perte de données ou préjudice direct ou indirect résultant de l'utilisation ou de l'exécution des extraits de code fournis.

### 🏛️ Indépendance Éditoriale
Pythor est un projet éducatif indépendant, open-source et sans affiliation contractuelle avec l'OpenEDG Python Institute. Les acronymes et dénominations de certification (PCEP™, PCAP™, PCPP™, PCED™, PCAD™, PCET™, PCAT™, PCES™, PCEA™, PCEI™) sont des marques déposées de leurs propriétaires respectifs et ne sont cités qu'à des fins d'identification pédagogique.

### 🔐 Processus d'Onboarding Obligatoire
Pour garantir l'information de chaque utilisateur sans nuire à la découverte du produit :
- La **Landing Page** reste totalement libre et non intrusive pour présenter les fonctionnalités, le catalogue et convertir les visiteurs.
- Le **modal d'onboarding** s'affiche automatiquement dès l'entrée dans l'application (au clic sur « Ouvrir Pythor », sélection de parcours ou accès direct par URL profonde si la clé `pythor_legal_accepted` n'est pas encore présente dans `localStorage`).
- Les **alertes de mise à jour système en arrière-plan** sont également réservées à l'espace applicatif actif afin de préserver la clarté de la vitrine d'accueil.
- L'utilisateur doit cocher explicitement la case d'acceptation de non-responsabilité pour démarrer ses révisions.
- Les mentions légales restent consultables à tout moment via le bouton « Aide & Mentions » dans la barre de navigation et le lien de pied de page de chaque écran.

---

## 3. Architecture Technique

### 3.1 Stack & Bibliothèques
- **Frontend :** React 18, TypeScript, Vite 6 et Tailwind CSS 4.
- **Icônes :** Lucide React.
- **Navigation :** routes et alias centralisés dans `src/navigation/routes.ts`; barre de navigation responsive partagée.
- **Données de certification :** métadonnées et programmes légers dans `src/data/metadata/`; les cartes sont chargées à la demande via `src/data/certificationDataLoader.ts`.
- **Service Worker :** `public/sw.js` pré-cache le shell PWA et met en cache les ressources demandées. Les jeux de cartes sont disponibles hors ligne après leur premier chargement.
- **Stockage Données :** Approche *Local-First* :
  - `localStorage` pour les préférences, les cartes personnalisées et les états SRS isolés par certification.
  - Firebase Firestore (optionnel) : synchronisation des profils, cartes, états SRS et tentatives d'examen lorsque l'utilisateur s'identifie.
- **Tests :** Vitest (`npm test`), avec cas ciblés pour l'isolation des parcours, la fusion des états SRS et les volumes des jeux de cartes.

### 3.2 Composants Clés d'Accompagnement Novice
- `NoviceModeContext.tsx` : Fournisseur de contexte global gérant l'état du mode débutant, l'ouverture des fenêtres modales et la capture de l'événement d'installation PWA (`beforeinstallprompt`).
- `InfoTooltip.tsx` : Composant d'infobulle accessible (support souris, tactile et clavier) fournissant des explications concrètes et des astuces dédiées aux novices.
- `OnboardingLegalModal.tsx` : Parcours guidé en 4 étapes (Bienvenue, Moteur SM-2, Mode Novice & Installation, Mentions Légales et Validation).
- `InstallPwaButton.tsx` & `InstallPwaModal.tsx` : Interface d'incitation et d'aide à l'installation PWA avec onglets illustrés pour Android, iOS Safari et ordinateurs de bureau.
- `PythorLogo.tsx` : Logo vectoriel intégrant le bouclier bleu Python, le chapeau de diplômé et les méandres de serpent symbolisant le langage.

---

## 4. Périmètre Fonctionnel Actuel

1. **Dix parcours, 4 700 cartes :** PCEP (400), PCAP (500), PCPP (500), PCED (400), PCAD (500), PCET (400), PCAT (600), PCES (400), PCEA (400) et PCEI (600).
2. **Moteur cognitif SM-2 :** répétition espacée et progression indépendante par certification.
3. **Navigation et vues :** tableau de bord, programme détaillé, flashcards/révisions, statistiques, examens, Code Lab et Cheatsheet.
4. **Données réelles :** reprise de la dernière session, progression et cartes dues, statistiques de maîtrise, activité récente et tentatives d'examen.
5. **Cartes personnalisées :** création, édition et suppression, avec stockage local et synchronisation facultative.
6. **PWA local-first :** thèmes clair/sombre, français/anglais, cache hors ligne des ressources consultées et synchronisation Firebase facultative.

Les contrôles usuels sont `npm test`, `npm run lint` et `npm run build`.
