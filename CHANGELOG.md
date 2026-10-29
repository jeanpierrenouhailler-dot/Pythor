# 📜 Journal des Modifications — CHANGELOG

Toutes les modifications notables apportées au projet **Pythor** sont documentées dans ce fichier selon les principes du versionnement sémantique ([Semantic Versioning](https://semver.org/lang/fr/)).

---

## [v2.5.0] — 2026-10-29

### 🛡️ Mentions Légales & Onboarding Novice
- **Onboarding Obligatoire avec Mentions Légales :** Implémentation d'un parcours d'onboarding en 4 étapes (`OnboardingLegalModal.tsx`) exigeant l'acceptation explicite par l'utilisateur d'une clause de non-responsabilité légale :
  - *Clause stricte :* L'auteur et l'éditeur ne sauraient être tenus responsables de l'exactitude, de l'exhaustivité ou de l'utilisation des données, questions, réponses, fragments de code et explications fournis dans l'application.
  - *Indépendance :* Rappel clair que Pythor est un projet indépendant sans affiliation avec l'OpenEDG Python Institute.
  - *Persistance locale :* Mémorisation du consentement dans `localStorage` (`pythor_legal_accepted`), avec consultation possible à tout moment via le lien « Mentions Légales & Guide » présent dans la navigation et le pied de page.

### 💡 Mode Novice & Infobulles Contextuelles sur Tous les Écrans
- **Système d'Infobulles Universel (`InfoTooltip.tsx`) :**
  - Ajout d'infobulles pédagogiques sur l'ensemble des champs, jauges, boutons d'action et composants de l'application :
    - **Tableau de Bord :** Explications sur les 10 parcours, le simulateur d'examen, la création de cartes et la jauge de préparation SM-2.
    - **Flashcards SRS :** Décryptage des 4 crans d'auto-évaluation de l'algorithme SM-2 (`Again`, `Hard`, `Good`, `Easy`) et de leurs intervalles de révision.
    - **Simulateur d'Examen :** Infobulles sur la sélection de module, le volume de questions, le chronomètre immersif et les pièges d'options stdout.
    - **Code Lab :** Infobulles sur le bac à sable interactif, l'exécution CPython simulée et la console stdout.
    - **Cheatsheet :** Infobulles sur la recherche instantanée, les méthodes dunder, le *Name Mangling* et la hiérarchie des exceptions.
  - **Interrupteur « Mode Novice » :** Bouton à bascule dans la barre de navigation et le menu mobile permettant d'activer ou masquer les pastilles d'aide selon le niveau de confort de l'utilisateur.

### 📱 Bouton & Guide d'Installation PWA (« Installer l'Application »)
- **Bouton d'Installation Accessible :** Ajout d'un bouton « Installer l'App » (`InstallPwaButton.tsx`) dans la barre de navigation, le menu hamburger et le pied de page.
- **Prise en charge de `beforeinstallprompt` :** Déclenchement automatique de l'invite native du navigateur si disponible.
- **Modal Explicatif Multi-Plateformes (`InstallPwaModal.tsx`) :**
  - Guide illustré avec onglets spécifiques pour **Android (Chrome)**, **iOS (Safari)** et **Ordinateur (Chrome / Edge / Windows / Mac)** pour accompagner les utilisateurs débutants.

### 🎨 Identité Visuelle & Logo Officiel
- **Nouveau Logo Vectoriel (`PythorLogo.tsx` & `public/logo.svg`) :** Bouclier moderne combinant la graduation académique, le bleu Python et la symbolique serpentine.
- **Illustration Vectorielle de Prévisualisation (`public/assets/pythor_preview.svg`) :** Rendu haute définition de l'interface pour le README avec palette IDE sombre, flashcard active, badges de certification et statut PWA.

### 📚 Documentation & Conformité
- Création et enrichissement complet de `README.md`, `CONTEXT.md` et `CHANGELOG.md` avec Markdown soigné, tableaux récapitulatifs, icônes et avertissements légaux clairs.
- Résolution préventive des imports de configuration Firebase pour garantir une exécution 100% stable en mode invité local-first sans dépendance de clés secrètes.

---

## [v2.4.0] — 2026-10-25

### 🚀 Nouveaux Parcours de Certification Spécialisés
- **PCEA-30-01 (Certified Entry-Level Automation Specialist with Python) :**
  - 500 questions réparties sur 5 blocs (100 questions par bloc) couvrant l'automatisation de fichiers, la manipulation de chaînes et regex, les bibliothèques d'automatisation, la gestion de tâches planifiées et l'automatisation système.
- **PCEI-30-01 (Certified Entry-Level AI Specialist with Python) :**
  - 500 questions réparties sur 5 blocs (100 questions par bloc) couvrant les fondements de l'IA/ML, le prétraitement des données (normalisation, encodage), l'apprentissage supervisé (k-NN, régression, classification), l'évaluation des modèles (matrice de confusion, précision, rappel) et l'IA éthique.
- **Seuil d'Examen Adaptatif :** Configuration du seuil de réussite officiel à **75%** pour les parcours PCEA et PCEI (versus 70% pour les parcours traditionnels).

---

## [v2.3.0] — 2026-10-20

### 🛡️ Sécurité & Vitrine Web
- **PCES-30-01 (Certified Entry-Level Cybersecurity Specialist with Python) :**
  - 400 questions couvrant le scripting défensif, l'audit de sockets, les empreintes cryptographiques avec `hashlib` et la détection d'anomalies.
- **Landing Page PWA Moderne :**
  - Page de présentation dédiée pour [https://pythor.swinux.ch/](https://pythor.swinux.ch/) conçue pour l'hébergement Cloudflare Pages avec redirection fluide vers l'application active.

---

## [v2.2.0] — 2026-10-15

### 🧪 Parcours Qualité Logicielle & Tests
- **PCET-30-01 (Certified Entry-Level Python Tester) :** 300 questions sur les assertions, `unittest`, le mock et la couverture de code.
- **PCAT-31-0x (Certified Associate in Python Testing) :** 400 questions sur les tests automatisés avancés, `pytest`, les fixtures complexes et le BDD (Behave).

---

## [v2.1.0] — 2026-10-10

### 📊 Parcours Analyse de Données
- **PCED-30-02 (Certified Entry-Level Data Analyst with Python) :** 400 questions sur NumPy, l'ingestion de données et les statistiques descriptives de base.
- **PCAD-31-02 (Certified Associate Data Analyst with Python) :** 400 questions sur Pandas avancé, les séries temporelles, SQL analytique et la visualisation.

---

## [v2.0.0] — 2026-10-01

### 🌟 Refonte Majeure & Moteur SM-2
- Intégration de l'algorithme SuperMemo SM-2 pour l'espacement cognitif des révisions.
- Implémentation du Simulateur d'Examen chronométré et du Code Lab interactif.
- Prise en charge native du mode hors-ligne PWA via Service Worker.
- Couverture complète des certifications phares PCEP-30-02, PCAP-31-03 et PCPP-32-10x.
