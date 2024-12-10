import { useEffect } from "react";
import { Coins, Pickaxe, RefreshCcw } from "lucide-react";
import "../App.css";
import styles from "./GoldClicker.module.css";
import AnimatedValue from "./functional/AnimatedValue";
import useLocalStorage from "use-local-storage";

function GoldClicker() {
  const [gold, setGold] = useLocalStorage("gold", 0);
  const [clickPower, setClickPower] = useLocalStorage("clickPower", 1);
  const [clickUpgradeCost, setClickUpgradeCost] = useLocalStorage(
    "clickUpgradeCost",
    10
  );
  const [autoClickerCost, setAutoClickerCost] = useLocalStorage(
    "autoClickerCost",
    10000
  );
  const [isBuyed, setIsBuyed] = useLocalStorage("isBuyed", false);
  /////////////////////////////////////////////////////////////////////
  // Upgrade Click Power
  const upgradeClickPower = () => {
    if (gold >= clickUpgradeCost) {
      setGold((prevGold) => prevGold - clickUpgradeCost);
      setClickPower((prevClickPower) => prevClickPower + 1);
      setClickUpgradeCost((prevClickUpgradeCost) => prevClickUpgradeCost * 2);
    }
    if (clickPower >= 4) {
      setClickUpgradeCost(clickUpgradeCost * 5);
    }
  };
  //////////////////////////////////////////////////////////////////////////
  const buyAutoClicker = () => {
    if (gold >= autoClickerCost) {
      setGold((prevGold) => prevGold - autoClickerCost);
      setIsBuyed(true);
      setAutoClickerCost(autoClickerCost);
    }
  };
  useEffect(() => {
    if (isBuyed) {
      const interval = setInterval(() => {
        setGold((prevGold) => prevGold + 1 * clickPower);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isBuyed, clickPower]);
  ///////////////////////////////////////////////////////////////////////////

  return (
    <div className={styles.app}>
      <h1>Gold Clicker</h1>
      <div className={styles.headers}>
        <p>
          <Coins className={styles["icon-coin"]} /> Ilość złota:{" "}
          <AnimatedValue value={gold} />
        </p>
        <p>
          <Pickaxe className={styles["icon-pickaxe"]} />
          Moc wydobycia <AnimatedValue value={clickPower} />
        </p>
        <p>
          <RefreshCcw className={styles["icon-refresh"]} />
          Auto Klikacz:{" "}
          <AnimatedValue
            value={isBuyed ? "Aktywny" : "Nieaktywny"}
            animationType={isBuyed ? "slideX" : "pulse"}
          />
        </p>
        <hr />
        <button onClick={() => setGold(gold + clickPower)}>
          Zwieksz złoto
        </button>{" "}
        <br />
        <button disabled={gold < clickUpgradeCost} onClick={upgradeClickPower}>
          Zwieksz moc wydobycia (Cena: {clickUpgradeCost})
        </button>{" "}
        <br />
        <button
          style={{
            background: isBuyed ? "#28a42c" : "",
            border: isBuyed ? "1px solid #28a42c" : "",
          }}
          disabled={gold < autoClickerCost || isBuyed}
          onClick={buyAutoClicker}
        >
          {isBuyed
            ? "Wykupiony"
            : "Kup Auto Klikacz (Cena: " + autoClickerCost + ")"}
        </button>
      </div>
    </div>
  );
}

export default GoldClicker;
