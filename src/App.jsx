import GoldClicker from "./Components/GoldClicker";
import ThemeToggleButton from "./Components/ToggleButton/ThemeToggleButton";
import ClassicToggleButton from "./Components/ClassicToggleButton/ClassicToggleButton";
import { ThemeProvider } from "./contexts/ThemeContext";
import PWAInstallButton from "./Components/DownloadButton/PWAInstallButton";
import HelloWorldFromExpress from "./Components/HelloWorldFromExpress/HelloWorldFromExpress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ThemeProvider>
        {/* <ClassicToggleButton />
        <ThemeToggleButton />
        <GoldClicker />
        <PWAInstallButton /> */}
        <HelloWorldFromExpress />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
