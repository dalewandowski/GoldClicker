import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Coins, Pickaxe, RefreshCcw } from "lucide-react";
import "../App.css";
import "./GoldClicker.css";

function GoldClicker() {
  const [gold, setGold] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [clickUpgradeCost, setClickUpgradeCost] = useState(10);
  const [autoClickerCost, setAutoClickerCost] = useState(10000);
  const [isBuyed, setIsBuyed] = useState(false);
  /////////////////////////////////////////////////////////////////////
  // Upgrade Click Power
  const upgradeClickPower = () => {
    if (gold >= clickPower) {
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
      setIsBuyed(!isBuyed);
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
  }, [isBuyed]);
  ///////////////////////////////////////////////////////////////////////////
  return (
    <div className="app">
      <h1>Gold Clicker</h1>
      <div className="headers">
        <p>
          <Coins className="icon-coin" /> Ilość złota:{" "}
          <motion.span
            key={gold}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {gold}
          </motion.span>
        </p>
        <p>
          <Pickaxe className="icon-pickaxe" />
          Moc wydobycia{" "}
          <motion.span
            key={clickPower}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {clickPower}
          </motion.span>
        </p>
        <p>
          <RefreshCcw className="icon-refresh" />
          Auto Klikacz: {isBuyed ? "Aktywny" : "Nieaktywny"}
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
          disabled={gold < autoClickerCost || isBuyed}
          onClick={buyAutoClicker}
        >
          Kup Auto Klikacz (Cena: {autoClickerCost})
        </button>
      </div>
    </div>
  );
}

export default GoldClicker;
