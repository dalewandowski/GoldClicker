import { useEffect } from "react";
import { useState } from "react";

function PWAInstallButton() {
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const handleBeforeInstallPrompt = (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setShowInstallButton(true);
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);
  /////////////////////////////////////////////////////////////////
  const handleInstallClick = async () => {
    if (deferredPrompt) {
      const userChoice = await deferredPrompt.prompt();
      if (userChoice.outcome === "accepted") {
        setDeferredPrompt(null);
        setShowInstallButton(false);
      }
    }
  };
  return showInstallButton ? (
    <button onClick={handleInstallClick}>Install PWA App</button>
  ) : null;
}

export default PWAInstallButton;
