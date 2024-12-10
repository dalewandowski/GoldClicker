import GoldClicker from "./Components/GoldClicker";
import ThemeToggleButton from "./Components/ToggleButton/ThemeToggleButton";
import ClassicToggleButton from "./Components/ClassicToggleButton/ClassicToggleButton";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <ClassicToggleButton />
        <ThemeToggleButton />
        <GoldClicker />
      </ThemeProvider>
    </>
  );
}

export default App;
