TP 6 — React Native (Expo)

Objectif
- Partager et manipuler la liste des tâches globalement sans passer par des props.
- Deux approches présentées : Redux Toolkit + react-redux, et Zustand.

Structure
```
tp6/
├── App.js
├── README.md
├── store/
│   ├── store.js
│   ├── todosSlice.js
│   └── useTodoStore.js
├── navigation/
│   ├── AppDrawer.js
│   └── AppStack.js
└── screens/
    ├── TodoListReduxScreen.js
    ├── TodoDetailsReduxScreen.js
    ├── TodoListZustandScreen.js
    └── TodoDetailsZustandScreen.js
```

Installation des dépendances (depuis le dossier racine MonApp)
- npm install @reduxjs/toolkit react-redux zustand @react-navigation/drawer

Utilisation
- Lancer `npm start`, ouvrir l'app via Expo et utiliser TP6 :
  - Se connecter → Drawer → choisir Tâches → ouvrir Liste (Redux ou Zustand)
  - Supprimer une tâche depuis l'écran Détails (impact visible immédiatement)

Remarque
- `App.js` de TP6 enveloppe l'app avec `<Provider store={store}>` pour Redux.
- Les écrans montrent comment dispatcher `addTodo` / `removeTodo` (Redux) et comment utiliser `useTodoStore()` (Zustand).
