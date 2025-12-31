TP 5 — React Native (Expo)

Fonctionnalités implémentées
- AuthContext global (Login / Logout)
- Navigation conditionnelle: écran Login ou Drawer (Tâches / Profil)
- Drawer navigator + Stack navigator pour les tâches
- AppBar composant (titre + bouton Logout)

Structure
```
tp5/
├── App.js
├── README.md
├── context/
│   └── AuthContext.js
├── navigation/
│   ├── AppDrawer.js
│   └── AppStack.js
├── components/
│   └── AppBar.js
└── screens/
    ├── LoginScreen.js
    ├── TodoListScreen.js
    ├── TodoDetailsScreen.js
    └── ProfileScreen.js
```

Lancer (depuis le dossier racine MonApp)
- npm start
- Ouvrir `tp5/App.js` dans Expo (tu peux copier-coller ou configurer un entrypoint si besoin)

Remarques
- Le composant `AppBar` appelle `logout()` depuis `AuthContext`.
- `TodoList` navigue vers `Détails` en transmettant `id` et `title`.

Si tu veux, je peux :
- Ajouter des icônes et animations,
- Créer une branche dédiée `tp5` et y pousser les modifications,
- Ajouter des tests / CI pour ce TP.
