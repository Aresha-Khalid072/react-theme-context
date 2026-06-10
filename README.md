🌗 React Theme Switcher — Context API
A beginner-friendly React project demonstrating Context API for global theme management (light/dark mode) without prop drilling.

📁 Project Structure
```
src/
├── components/
│   ├── Navbar.jsx         # Main navbar — applies light/dark class
│   ├── Nav2.jsx           # Nav links — reads theme from context
│   └── Button.jsx         # Button — triggers theme toggle
├── context/
│   └── ThemeContext.jsx   # Context provider — holds global theme state
└── App.jsx                # Root component
```

⚙️ How It Works

ThemeContext creates a global state using useState and shares it via Context.Provider
Any component can read or update the theme using useContext(ThemeDataContext) — no prop drilling needed
Navbar applies the theme as a CSS class (light / dark)
Button changes the theme on click


🚀 Getting Started
bash# Clone the repo
git clone https://github.com/your-username/react-theme-context.git

# Navigate into the project
cd react-theme-context

# Install dependencies
npm install

# Start the dev server
npm run dev

🧠 Concepts Covered

createContext & useContext
Context Provider pattern
Lifting state globally without Redux
Component composition


🛠️ Tech Stack

React 18+
Vite (or Create React App)
Plain CSS
