import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section>
      <h2>useContext – Theme</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </section>
  );
}
