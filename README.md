# 🍽️ Recipe Gallery App

##  Overview
This is a React-based interactive recipe gallery that allows users to browse through a collection of food images. The application demonstrates the use of React state, component structure, and user interaction handling. It is built using Vite and packaged as a standalone desktop application using Electron.

---

##  Features
- Displays a collection of recipe images with descriptions  
- Navigate through recipes using **Next** and **Previous** buttons  
- Prevents navigation beyond the first and last images (boundary checks)  
- Clean, modern UI with styled components and responsive layout  
- Packaged as a standalone desktop app  

---

##  Technologies Used
- React (with Hooks)
- Vite
- CSS for styling
- Electron (for desktop app packaging)

---

---

## How It Works
- The app stores recipe data (image URL + description) in an array.
- React’s `useState` tracks the current image index.
- Clicking navigation buttons updates the index and re-renders the displayed image.
- Buttons are disabled at the start and end of the list to prevent errors.

---

## Running the App (Development)
```bash
npm install
npm run dev
npm run build
npm start
npm run dist
