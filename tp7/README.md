TP 7 — React Native (Expo)

Objectifs
- Charger des tâches depuis une API (GET)
- Utiliser AsyncStorage pour persister le thème
- Gérer des tâches en mode hors ligne avec SQLite

Fichiers importants
- services/api.js — fetch + axios examples
- context/ThemeContext.js — AsyncStorage pour le thème
- services/database.js — SQLite helpers (init, add, update, delete, load)
- screens/TodoListFetchScreen.js — récupérer via fetch
- screens/TodoListOfflineScreen.js — CRUD basique avec SQLite
- App.js — switcher entre demo FETCH et OFFLINE (modifie OFFLINE_MODE)

Installation
- npm install axios
- npx expo install @react-native-async-storage/async-storage expo-sqlite

Tester
- npm start
- Dans `tp7/App.js` activer `OFFLINE_MODE` si tu veux tester SQLite
- Modifier volontairement l'URL dans `services/api.js` pour tester loader / message d'erreur

Exercice supplémentaire
- Ajouter suppression dans l'écran offline (✅ implémenté : bouton 🗑️).  
- Améliorer compatibilité SQLite (use `executeSql` pour un usage async si nécessaire).