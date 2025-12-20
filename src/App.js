import React, { useState, createContext, useEffect } from "react";
import ChildComponent from "./childComponent";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState();

  const toggle = () =>
    setTheme(prev => (prev === "dark" ? "light" : "dark"));

useEffect(() => {
  fetch("http://127.0.0.1:8000/api/python/")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.error("Error fetching data:", error));
}, []);

return (
  <div className={`app ${theme}`}>
    <ThemeContext.Provider value={theme}>

      <h3>Theme: {theme}</h3>
      <button onClick={toggle}>Change Theme</button>
      <h1>Fetched Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>

    </ThemeContext.Provider>
  </div>
);
}

export default App;
