import { useEffect, useState } from "react";
import "./AccelerometerApp.css";

const AccelerometerApp = () => {
  const [speed, setSpeed] = useState(0);
  const [mode, setMode] = useState("Неактивный"); 

  useEffect(() => {
    const handleAcceleration = (event) => {
      const { x, y, z } = event.acceleration;
      const acceleration = Math.sqrt(x * x + y * y + z * z);
      // Преобразование ускорения в скорость в км/ч (примерное)
      const calculatedSpeed = acceleration * 3.6; // Перевод из м/c в км/ч

      setSpeed(calculatedSpeed);

      if (calculatedSpeed < 5) {
        setMode("Неактивный");
      } else if (calculatedSpeed >= 5 && calculatedSpeed < 15) {
        setMode("Пешком ");
      } else if (calculatedSpeed >= 15) {
        setMode("Активный");
      }
    };

    window.addEventListener("devicemotion", handleAcceleration);

    return () => {
      window.removeEventListener("devicemotion", handleAcceleration);
    };
  }, []);

  return (
    <div className={`app-container ${mode}`}>
      <h1>Скорость: {speed.toFixed(2)} км/ч</h1>

    </div>
  );
};

export default AccelerometerApp;
