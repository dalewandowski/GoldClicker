import GoldClicker from "./Components/GoldClicker";
import ThemeToggleButton from "./Components/ToggleButton/ThemeToggleButton";
import ClassicToggleButton from "./Components/ClassicToggleButton/ClassicToggleButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import PWAInstallButton from "./Components/DownloadButton/PWAInstallButton";

function App() {
  return (
    <>
      <ThemeProvider>
        <ClassicToggleButton />
        <ThemeToggleButton />
        <GoldClicker />
        <PWAInstallButton />
      </ThemeProvider>
    </>
  );
}

export default App;
