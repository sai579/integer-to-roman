
import { useState, useEffect } from 'react';
import RomanNumeralConverter from './components/roman-mumeral-converter/roman-mumeral-converter';

// define styles for light theme
const lightTheme = {
  backgroundColor: "white",
  color: "black"
}

// define styles for dark theme
const darkTheme = {
  backgroundColor: "black",
  color: "white"
}

// The window.matchMedia API checks if the user has set their OS theme to dark. 
// Check the system preference for dark mode and set the initial theme accordingly
const checkTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  // State to store the current theme (light or dark)
  const [theme, setTheme] = useState(() => checkTheme());

  useEffect(() => {
    // Create a media query listener to detect system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Listener to detect changes in system theme
    const handleChange = (e: { matches: any; }) => {
      setTheme(e.matches ? "dark" : "light");
    };

    // Add the event listener
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div style={theme === 'dark' ? darkTheme : lightTheme}>
      <RomanNumeralConverter />
    </div>
  );
}

export default App;
