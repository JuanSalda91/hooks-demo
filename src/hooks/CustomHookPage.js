import { useLocalStorage } from "../hooks/useLocalStorage.js";

export default function CustomHookPage() {
  const [name, setName] = useLocalStorage("name", "");
  const [color, setColor] = useLocalStorage("favorite-color", "blue");

  return (
    <section>
      <h2>Custom hook – useLocalStorage</h2>

      <label>
        Name:
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>

      <label>
        Favorite color:
        <input
          value={color}
          onChange={e => setColor(e.target.value)}
        />
      </label>

      <p>
        Hello {name || "stranger"}, your favorite color is {color}.
      </p>
    </section>
  );
}
