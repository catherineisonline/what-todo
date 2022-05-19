import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

export default function ToggleMode() {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <section className="toggle" onClick={changeTheme}>
      {darkMode ? (
        <section className="toggle-light">
          <FaSun />
        </section>
      ) : (
        <section className="toggle-dark">
          <FaMoon />
        </section>
      )}
    </section>
  );
}
