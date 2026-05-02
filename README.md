# Tabiji Backend

Backend de **Tabiji**, une application web collaborative de gestion de voyages. Cette API gère l'authentification, les voyages, les collaborateurs, les souvenirs, les medias, l'administration et la synchronisation temps réel via Socket.IO.

Le frontend de l'application est exposé dans un dépôt séparé.

## Fonctionnalites principales

- authentification utilisateur
- gestion des voyages et des collaborateurs
- contrôle d'accès par rôles (`OWNER`, `EDITOR`, `VIEWER`)
- gestion des lieux, tâches et planning par jour
- création et mise a jour de souvenirs
- partage par lien
- administration de la plateforme
- synchronisation temps réel avec Socket.IO

## Stack technique

- **Node.js**
- **Express 5**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Socket.IO**
- **Zod**
- **Cloudinary**
- **Jest** et **Supertest**

## Installation

```bash
yarn install
```

## Configuration

Créer un fichier `.env` a la racine du projet :

```env
PORT=4000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/tabiji

FRONTEND_URL=http://localhost:3000
FRONTEND_URL_DEV=http://localhost:3000
CORS_ORIGIN=http://localhost:3000

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Pour les tests d'intégration, créer aussi un fichier `.env.test` :

```env
DATABASE_URL=postgresql://user:password@localhost:5432/tabiji_test
PORT=4000
NODE_ENV=test
FRONTEND_URL=http://localhost:3000
FRONTEND_URL_DEV=http://localhost:3000
CORS_ORIGIN=http://localhost:3000
```

## Base de donnees

Le projet utilise **Prisma** avec **PostgreSQL**.

Commandes utiles :

```bash
# Generer le client Prisma
npx prisma generate

# Appliquer les migrations en local
npx prisma migrate dev

# Appliquer les migrations en production
npx prisma migrate deploy

# Ouvrir Prisma Studio
npx prisma studio
```

Le schéma est disponible dans `prisma/schema.prisma`.

## Scripts disponibles

```bash
# Developpement
yarn dev

# Build TypeScript + Prisma generate
yarn build

# Lancement en production
yarn start

# Tous les tests
yarn test

# Tests unitaires
yarn test:unit

# Tests d'integration
yarn test:integration

# Couverture
yarn test:coverage
```

## Point d'entree

Le serveur HTTP est lance depuis `index.ts`.

L'application Express est définie dans `src/app.ts` et expose :

- l'API REST
- les middlewares d'authentification et d'autorisation
- la configuration CORS
- la gestion des uploads

Socket.IO est initialise sur le même serveur HTTP que l'API REST.

## Routes principales

### Utilisateurs

- `POST /user/signup`
- `POST /user/login`
- `GET /user`
- `PUT /user`
- `POST /user/photo`
- `GET /user/favorites`

### Voyages

- `POST /trip`
- `GET /trips`
- `GET /trip/:id`
- `PUT /trip/:id`
- `DELETE /trip/:id`

### Souvenirs

- `POST /trip/:tripId/memory`
- `GET /trip/:tripId/memories`
- `PUT /memory/:id`
- `DELETE /memory/:id`

### Lieux

- `POST /trip/:tripId/place`
- `PUT /place/:id`
- `DELETE /place/:id`
- `GET /places/search`

### Collaboration et partage

- `GET /trip/:tripId/collaborators`
- `POST /trip/:tripId/collaborator`
- `PUT /trip/:tripId/collaborator/:userId`
- `DELETE /trip/:tripId/collaborator/:userId`
- `POST /trip/:tripId/share`
- `GET /share/:token/info`
- `POST /share/:token/join`

### Administration

- routes backoffice regroupees dans `admin.routes`

## Structure du projet

```text
backend/
├── src/
│   ├── config/         # config Prisma / Cloudinary
│   ├── controllers/    # orchestration requete / reponse
│   ├── middlewares/    # auth, controle d'acces, admin
│   ├── routes/         # endpoints HTTP
│   ├── schemas/        # validation Zod
│   ├── services/       # logique metier
│   ├── socket/         # temps reel Socket.IO
│   ├── utils/          # utilitaires
│   └── __tests__/      # tests unitaires et integration
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── index.ts
└── package.json
```

## Tests

Les tests backend couvrent :

- les utilitaires
- les services
- les middlewares
- les controllers et routes
- les flux d'integration complets via **Supertest**

Les tests d'intégration s'appuient sur une base dediée `tabiji_test` afin d'isoler l'environnement de test.

## Securite

L'API met en place plusieurs mécanismes :

- token d'authentification genere a la connexion
- controle d'acces via `isAuthenticated`, `checkTripAccess` et `isAdmin`
- validation d'entrees avec **Zod**
- gestion des origines autorisees
- limites d'upload
- verification de la connexion Socket.IO

## Deploiement

Le backend est déployé sur **Northflank**.

La base PostgreSQL de production est hébergée sur **Neon** et les medias sont stockés sur **Cloudinary**.

## Contexte

Ce projet a été réalisé dans le cadre du titre professionnel **RNCP Concepteur Developpeur d'Applications**.
