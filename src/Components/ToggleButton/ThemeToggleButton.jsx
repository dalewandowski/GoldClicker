import { useEffect, useState } from "react";
import styles from "./ThemeToggleButton.module.css";

function ThemeToggleButton() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <button
        className={styles.toggleButton}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Light / Dark
      </button>
    </>
  );
}

export default ThemeToggleButton;
