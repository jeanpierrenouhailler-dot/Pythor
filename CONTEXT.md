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
Pour garantir l'information de chaque utilisateur :
- Un modal d'onboarding s'affiche automatiquement lors de la première session (si la clé `pythor_legal_accepted` n'est pas présente dans `localStorage`).
- L'utilisateur doit cocher explicitement une case d'acceptation de non-responsabilité avant de valider l'entrée dans l'application.
- Les mentions légales restent consultables à tout moment via le lien « Mentions Légales & Guide » situé dans le menu et le pied de page de chaque écran.

---

## 3. Architecture Technique

### 3.1 Stack & Bibliothèques
- **Frontend :** React 18, TypeScript en mode strict, Vite 5.
- **Styling :** Tailwind CSS avec palette sombre inspirée des environnements de développement intégrés (IDE) modernes (ardoise/cyan/ambre/indigo).
- **Icônes :** Lucide React.
- **Service Worker :** Service Worker PWA (`public/sw.js`) gérant le pré-cache des assets et le fonctionnement 100% hors-ligne.
- **Stockage Données :** Approche *Local-First* :
  - `localStorage` pour les préférences utilisateur (mode novice, accord légal, langue, certifications favorites).
  - IndexedDB pour les métriques de répétition espacée (historique des révisions, scores d'aisance SM-2).
  - Firebase Firestore (optionnel) : synchronisation cloud sécurisée des résultats d'examens lorsque l'utilisateur s'identifie, avec repli gracieux en mode invité si aucune configuration Firebase n'est fournie.

### 3.2 Composants Clés d'Accompagnement Novice
- `NoviceModeContext.tsx` : Fournisseur de contexte global gérant l'état du mode débutant, l'ouverture des fenêtres modales et la capture de l'événement d'installation PWA (`beforeinstallprompt`).
- `InfoTooltip.tsx` : Composant d'infobulle accessible (support souris, tactile et clavier) fournissant des explications concrètes et des astuces dédiées aux novices.
- `OnboardingLegalModal.tsx` : Parcours guidé en 4 étapes (Bienvenue, Moteur SM-2, Mode Novice & Installation, Mentions Légales et Validation).
- `InstallPwaButton.tsx` & `InstallPwaModal.tsx` : Interface d'incitation et d'aide à l'installation PWA avec onglets illustrés pour Android, iOS Safari et ordinateurs de bureau.
- `PythorLogo.tsx` : Logo vectoriel intégrant le bouclier bleu Python, le chapeau de diplômé et les méandres de serpent symbolisant le langage.

---

## 4. Périmètre Fonctionnel Actuel

1. **Parcours 10 Certifications (4 300+ Cartes) :**
   - PCEP-30-02 : 400 questions
   - PCAP-31-03 : 500 questions
   - PCPP-32-10x : 500 questions
   - PCED-30-02 : 400 questions
   - PCAD-31-02 : 400 questions
   - PCET-30-01 : 300 questions
   - PCAT-31-0x : 400 questions
   - PCES-30-01 : 400 questions
   - PCEA-30-01 : 500 questions
   - PCEI-30-01 : 500 questions
2. **Moteur Cognitif SM-2 :** Calcul de l'intervalle optimal ($I_1 = 1$, $I_2 = 6$, $I_n = I_{n-1} \times EF$) et du facteur de facilité ($EF' = EF + (0.1 - (5 - q) \times (0.08 + (5 - q) \times 0.02))$).
3. **Simulateur d'Examen :** Sélecteur de portée (module précis ou examen complet), options de 10, 20 ou 30 questions, chronomètre et notation à 70% ou 75%.
4. **Laboratoire de Code (Code Lab) :** Exécution simulée de scripts Python illustrant les subtilités d'héritage (C3 MRO), de métaprogrammation, de test et de sécurité.
5. **Cheatsheet Méthodes Dunder & Exceptions :** Moteur de recherche instantané des méthodes spéciales et arbre d'héritage des exceptions.
6. **Éditeur de Cartes Personnalisées :** Création locale de questions personnalisées par l'utilisateur.
