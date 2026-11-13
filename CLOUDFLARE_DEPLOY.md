# ☁️ Guide de Déploiement Cloudflare Pages — Pythor

Ce document décrit pas à pas la procédure de déploiement de l'application et de la landing page **Pythor** sur **Cloudflare Pages**, avec la prise en charge du domaine personnalisé `https://pythor.swinux.ch/`.

---

## 1. Paramètres de Build (Build Configuration)

Lors de la création du projet dans le tableau de bord Cloudflare Pages :

- **Framework preset :** `Vite`
- **Build command :** `npm run build`
- **Build output directory :** `dist`
- **Root directory :** `/` (ou laisser vide)
- **Node.js Version :** Renseigner la variable d'environnement `NODE_VERSION` = `20`

---

## 2. Déploiement Continu via GitHub (Recommandé)

1. Connectez-vous à votre [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Allez dans **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Sélectionnez le dépôt `jeanpierrenouhailler-dot/Pythor`.
4. Spécifiez les options de build :
   - **Nom du projet :** `pythor`
   - **Branche de production :** `main`
   - **Commande de build :** `npm run build`
   - **Dossier de sortie :** `dist`
5. Dans la section **Environment variables** :
   - Variable : `NODE_VERSION` | Valeur : `20`
6. Cliquez sur **Save and Deploy**. Cloudflare gère la compilation, le CDN Edge mondial et les certificats SSL.

---

## 3. Déploiement Direct en Ligne de Commande (Wrangler)

Si vous préférez déployer manuellement sans lier de webhook Git :

```bash
# 1. Compiler les fichiers de production
npm run build

# 2. Publier le dossier dist sur Cloudflare Pages
npx wrangler pages deploy dist --project-name=pythor
```

---

## 4. Configuration du Domaine Personnalisé (`pythor.swinux.ch`)

1. Dans Cloudflare Pages, accédez au projet `pythor`.
2. Allez dans l'onglet **Custom domains** > **Set up a custom domain**.
3. Saisissez `pythor.swinux.ch`.
4. Configuration DNS :
   - **Domaine `swinux.ch` déjà chez Cloudflare :** La création du DNS CNAME et la délivrance du certificat HTTPS se font automatiquement en un clic.
   - **Domaine chez un tiers (Infomaniak, OVH, etc.) :** Ajoutez une entrée DNS :
     - **Type :** `CNAME`
     - **Nom / Hôte :** `pythor`
     - **Cible :** `pythor.pages.dev`

---

## 5. Fichiers Déjà Préparés pour Cloudflare

Le dossier `public/` contient déjà les directives lues par Cloudflare Pages :

- `_redirects` : Réécriture SPA `/*  /index.html  200` garantissant l'accès direct aux routes (`/`, `/landing`, `/dashboard`) sans erreur 404.
- `_headers` :
  - `X-Content-Type-Options: nosniff` & `X-Frame-Options: SAMEORIGIN` (sécurité).
  - Cache Service Worker (`/sw.js`) avec `must-revalidate` (mises à jour instantanées de la PWA).
  - Cache immuable d'un an pour les ressources hashées de `/assets/*`.

---

## 6. Activer la Connexion Google & la Synchronisation Firebase en Production

Le fichier `firebase-applet-config.json` est volontairement exclu de Git (`.gitignore`) pour éviter d'exposer vos clés sur GitHub. Pour que la connexion Google fonctionne sur `pythor.swinux.ch` :

1. Dans **Cloudflare Pages** > votre projet > **Settings** > **Environment variables**, ajoutez les variables suivantes (disponibles dans la console Firebase de votre projet) :
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_DATABASE_ID`
2. Dans la **Console Firebase** > **Authentication** > **Settings** > **Authorized domains**, vérifiez que `pythor.swinux.ch` (et `pythor.pages.dev` si utilisé) sont bien ajoutés à la liste des domaines autorisés.
3. Redéployez le projet Cloudflare Pages pour que Vite intègre ces variables au build.
