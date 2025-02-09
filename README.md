# Reack Motive App

![Banner](./assets/readme/banner.jpeg)

## Description

Reack Motive App is an application built using TypeScript, React Native, Expo, Redux Toolkit, RTK Query and The Rick and Morty API. This project allows users to interact with characters from the popular animated series "Rick and Morty," explore their profiles and manage a list of favorite characters.

### Technology Stack
- TypeScript
- React Native, Expo
- Redux Toolkit
- RTK Query
- Node.js, Express
- The Rick and Morty API

## App Screens

### Main Screen: All Characters
This screen shows a list of all characters with infinite scrolling functionality. It also includes a filter component with dropdown menus for filtering characters and a "Reset" button to clear filters. By tapping on a character, you can view their profile.

### Character Profile Screen
The character profile screen provides detailed information about the character, including their name, image, gender, status and many more. There is also a feature to toggle the character to Favorites.

### Favorites Screen
This screen displays your favorite characters. Also you can search your favorite character by name using search component. When you tap on a character, a modal window opens with information about that character, and you also have the option to remove them from favorites.

### Settings Screen
On this screen you can change the app's theme between light and dark modes.

## Navigation
You can navigate between screens using a tab menu at the bottom of the screen. The favorites icon shows a badge shows the number of favorite characters.

## Implementation
1. API requests are made using RTK Query, which improves user experience by caching data and updating it as needed.
2. Node.js and Express application called Reack Motive Back was created to store data and handle GET (with search query), POST and DELETE requests. Here is the link to the repository for this project: [Reack Motive Back](https://github.com/MeleshkoDmitriy/reack-motive-back)
3. The app uses Async Storage to save the selected theme mode and store the 10 last loaded characters for offline access.

**Important!** This Node.js application is hosted on the Vercel platform, and it may refresh the state every 20-30 minutes. Your favorite characters will be cleared each time this happens.
