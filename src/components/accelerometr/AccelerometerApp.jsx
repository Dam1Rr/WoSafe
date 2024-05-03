import { useEffect, useState } from "react";
import "./AccelerometerApp.css";

const AccelerometerApp = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [mode, setMode] = useState("Неактивный"); 

  useEffect(() => {
    const handleAcceleration = (event) => {
      const { x, y, z } = event.acceleration;
      setAcceleration({ x, y, z });

      const speed = Math.sqrt(x * x + y * y + z * z);
      if (speed < 5) {
        setMode("Неактивный");
      } else if (speed >= 5 && speed < 15) {
        setMode("Пешком ");
      } else if (speed >= 15) {
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
      <h1>Статус: {mode}</h1>
      <div className="acceleration-data">
        <p>Ускорение X: {acceleration.x}</p>
        <p>Ускорение Y: {acceleration.y}</p>
        <p>Ускорение Z: {acceleration.z}</p>
      </div>
    </div>
  );
};

export default AccelerometerApp;
