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
        <div className="toggle-light">
          <FaSun />
        </div>
      ) : (
        <div className="toggle-dark">
          <FaMoon />
        </div>
      )}
    </section>
  );
}
