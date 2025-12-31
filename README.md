TP 4 — React Native (Expo)

But du TP
- Créer une app Expo avec navigation (stack + bottom-tabs)
- Structurer chaque écran dans son propre fichier
- Personnaliser la barre d'onglets et le header
- Ajouter une AppBar fixe et adapter aux Safe Areas

Structure recommandée
```
tpweb4/
├── App.js
├── README.md
└── screens/
    ├── AppBar.js
    ├── HomeScreen.js
    ├── DetailsScreen.js
    └── SettingsScreen.js
```

Installation (si tu démarres depuis zéro)
1. Créer le projet Expo
   npx create-expo-app MonApp --template blank
2. Entrer dans le dossier et installer React Navigation
   cd MonApp
   npm install @react-navigation/native
   npm install @react-navigation/native-stack
   npm install @react-navigation/bottom-tabs
3. Installer dépendances Expo compatibles
   expo install react-native-screens react-native-safe-area-context
4. (Optionnel) Installer icons si besoin
   expo install @expo/vector-icons

Lancer
- npm start  → ouvrir sur Expo Go (scanner QR)

Points clés et personnalisations
- Tab.Navigator: utiliser `screenOptions` global pour `tabBarActiveTintColor`, `tabBarStyle`, etc.
- Tab.Screen: définir `options` pour icônes par onglet (ex: `Ionicons`)
- Stack.Navigator: chaque `Stack.Screen` peut définir `options` (ex: `headerStyle`, `headerTintColor`)
- AppBar fixe: le composant `AppBar` est placé au-dessus du `Tab.Navigator`. Entourer l'app de `SafeAreaProvider` + `SafeAreaView`.
- Pour cacher les headers natifs: `screenOptions={{ headerShown: false }}`

Notes
- Le code dans `App.js` montre une configuration simple et claire pour démarrer.
- Tu peux enrichir chaque écran avec (styles, icônes, formulaire, API) selon le besoin.

Si tu veux, je peux:
- Installer et lancer les dépendances (je peux exécuter les commandes pour toi),
- Ajouter plus d'exemples de styles ou composants réutilisables,
- Ajouter des tests ou une navigation avancée (drawer, deep linking).

Bonne continuation !
