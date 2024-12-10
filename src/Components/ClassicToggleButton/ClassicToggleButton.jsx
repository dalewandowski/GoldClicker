import "@theme-toggles/react/css/InnerMoon.css";
import { InnerMoon } from "@theme-toggles/react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function ClassicToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <InnerMoon
        toggle={() => setTheme(theme === "light" ? "dark" : "light")}
        toggled={theme === "dark"}
        duration={750}
        style={{
          backgroundColor: "var(--button-bg)",
          color: theme === "light" ? "yellow" : "gray",
          borderRadius: "34px",
          width: "150px",
          height: "auto",
          position: "absolute",
          top: "15px",
          left: "25px",
        }}
      />
    </>
  );
}

export default ClassicToggleButton;
