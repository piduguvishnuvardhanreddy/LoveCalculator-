# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# ✅ React Project Prompt Template for Future Projects

## 🎯 Project Objective
Build a multi-page React.js application with interactive UI, smooth animations, and strict responsive design, using only **CSS (no Tailwind, no Bootstrap)**.

---

## 🔧 Technologies & Tools to Use
- **React.js**
- **React Router DOM**
- **UUID (for unique IDs)**
- **LocalStorage** (for temporary data storage)
- **CSS only** (flexbox + media queries + transitions + keyframe animations)
- **Vite or Create React App**
- **VS Code** as the editor

---

## 📁 Project Structure Guidelines

Use the following structure for each component:

```
src/
  components/
    ComponentName/
      index.js       // Functional Component
      index.css      // Styles scoped to this component
```

**Top-level files:**
```
App.js             // Main routes & navigation
index.css          // Reset/global styles (if needed)
main.jsx           // ReactDOM.render + BrowserRouter
```

---

## 🧭 Component Naming Convention

- Main page: `MainPage`
- Navigation bar: `Nav`
- Calculation/Result page: `LoveCalculationsPage`
- Error page: `OopsPage`
- Reusable or route-specific components follow PascalCase

---

## 🎨 Styling Requirements

1. Use **gradient backgrounds** with **dark and light tones**
2. Animate backgrounds using `@keyframes gradientShift`
3. Use **CSS-only animations and transitions** for:
   - Button hover effects
   - Text glow/pulse
   - Loading spinners
4. Make sure the design works across **5 breakpoints**:
   - `>1200px`, `992px`, `768px`, `576px`, `400px`
5. Use **only flexbox and media queries** — no CSS frameworks.

---

## 💾 Functionality Requirements

- Submit forms using `fetch` POST
- Store form data locally using `useState` + `localStorage`
- On success, redirect to the result page
- On error, redirect to the Oops page
- Add loader while waiting for fetch response

---

## 💡 Reusable Features to Implement

- Gradient animated backgrounds
- Animated text (e.g., glowing %, rotating icons)
- Smooth form transitions
- Reusable `Loader` component (CSS-based)

---

## 📌 Sample Form Logic

```js
import { v4 as uuidv4 } from 'uuid';
const id = uuidv4();
const formData = { id, field1, field2 };

const response = await fetch('/api-endpoint', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

## ✅ Next Steps

1. Create the folder/component structure
2. Setup routing and `Nav`
3. Build `MainPage` with form and loader
4. Build `LoveCalculationsPage` or equivalent with gradient animation
5. Add responsive design with attractive UI
6. Test responsiveness and flows
