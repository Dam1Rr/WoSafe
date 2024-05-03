import { useEffect, useState } from "react";
import "./AccelerometerApp.css";

const AccelerometerApp = () => {
  const [speed, setSpeed] = useState(0);
  const [mode, setMode] = useState("Неактивный");

  useEffect(() => {
    const handleAcceleration = (event) => {
      const { x, y, z } = event.acceleration;
      const acceleration = Math.sqrt(x * x + y * y + z * z);
      const calculatedSpeed = acceleration * 3.6;

      setSpeed(calculatedSpeed);

      if (calculatedSpeed < 5) {
        setMode("Статус: неактивный");
      } else if (calculatedSpeed >= 5 && calculatedSpeed < 15) {
        setMode("Пешком");
      } else if (calculatedSpeed >= 15 && calculatedSpeed < 40) {
        setMode("Активный");
      } else if (calculatedSpeed >= 40) {
        setMode("Статус: Активный");
        // Запрос геоданных при достижении скорости более 40 км/ч
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            console.log(
              "Геоданные:",
              position.coords.latitude,
              position.coords.longitude
            );
          });
        } else {
          console.log("Геоданные недоступны");
        }
      }
    };

    window.addEventListener("devicemotion", handleAcceleration);

    return () => {
      window.removeEventListener("devicemotion", handleAcceleration);
    };
  }, []);

  return (
    <div className={`app-container ${mode.toLowerCase().replace(" ", "-")}`}>
      <h1 className="speed">Скорость: {speed.toFixed(2)} км/ч</h1>
      <h2 className="status">{mode}</h2>
    </div>
  );
};

export default AccelerometerApp;
