# Tip Calculator App

A simple and elegant Tip Calculator mobile application built with React Native and Expo. This app allows users to input a bill amount and tip percentage to calculate the tip amount and total bill in real-time.

## Features

- ✅ Real-time calculation of tip amount and total
- ✅ Clean and intuitive user interface
- ✅ Built with React Native core components (View, Text, TextInput, StyleSheet)
- ✅ State management using `useState` hook
- ✅ Responsive layout using Flexbox
- ✅ Handles invalid inputs gracefully
- ✅ Professional styling with distinct colors and fonts

## Prerequisites

Before running this app, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional, but recommended)

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd /Users/jasonwilliam/Desktop/reactNative
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

## How to Run the App

### Option 1: Using Expo Go (Recommended for beginners)

1. **Install Expo Go on your mobile device:**
   - [Expo Go for iOS](https://apps.apple.com/app/expo-go/id982107779)
   - [Expo Go for Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Start the development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   npx expo start
   ```

3. **Scan the QR code:**
   - On iOS: Open the Camera app and scan the QR code displayed in your terminal
   - On Android: Open the Expo Go app and scan the QR code

### Option 2: Using iOS Simulator (Mac only)

1. **Install Xcode** from the Mac App Store (if not already installed)

2. **Start the app on iOS simulator:**
   ```bash
   npm run ios
   ```

### Option 3: Using Android Emulator

1. **Install Android Studio** and set up an Android Virtual Device (AVD)

2. **Start the app on Android emulator:**
   ```bash
   npm run android
   ```

### Option 4: Web Browser

```bash
npm run web
```

This will open the app in your default web browser.

## How to Use the App

1. **Enter Bill Amount:** Type the total bill amount in the first input field
2. **Enter Tip Percentage:** Type your desired tip percentage in the second input field
3. **View Results:** The app will automatically calculate and display:
   - **Tip Amount:** The calculated tip based on your inputs
   - **Total Amount:** The bill amount plus the tip

The calculations update in real-time as you type!

## Project Structure

```
tip-calculator-app/
├── App.js              # Main application component with UI and logic
├── app.json            # Expo configuration file
├── package.json        # Project dependencies and scripts
├── babel.config.js     # Babel configuration for Expo
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Technical Details

### State Management
- Uses React's `useState` hook to manage:
  - `billAmount`: Stores the bill amount input
  - `tipPercentage`: Stores the tip percentage input

### Calculations
- **Tip Amount:** `(Bill Amount × Tip Percentage) / 100`
- **Total Amount:** `Bill Amount + Tip Amount`
- Invalid inputs (non-numeric text) are handled gracefully by displaying `0`

### Styling
- All styles are defined using `StyleSheet.create()`
- Flexbox layout for responsive design
- Professional color scheme with green accents (#4CAF50)
- Clean, centered UI with proper spacing and shadows

## Troubleshooting

### Metro bundler issues
If you encounter any issues with the Metro bundler, try:
```bash
npm start -- --reset-cache
```

### Dependencies issues
If you have dependency conflicts, try:
```bash
rm -rf node_modules
npm install
```

### Port already in use
If port 8081 is already in use:
```bash
npx expo start --port 8082
```

## Built With

- **React Native** - Mobile app framework
- **Expo** - Development platform and tooling
- **React Hooks** - State management

## Requirements Met

✅ Initialized using Expo  
✅ Built with core components: View, Text, TextInput, StyleSheet  
✅ State management with `useState`  
✅ Real-time tip and total calculation  
✅ Handles invalid inputs gracefully  
✅ Styled with `StyleSheet.create()`  
✅ Flexbox layout for clean, centered design  
✅ Distinct styles for readability and professionalism  

## License

This project is open source and available for educational purposes.

---

**Created as part of a React Native learning project** 🚀