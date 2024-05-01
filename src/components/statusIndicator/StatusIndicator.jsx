import PropTypes from "prop-types"; // Импортируем PropTypes
import "./StatusIndicator.css";

const StatusIndicator = ({ isActive }) => {
  return (
    <div className={`status-indicator ${isActive ? "active" : "inactive"}`}>
      <span>{isActive ? "Активный режим" : "Спящий режим"}</span>
    </div>
  );
};

// Определяем ожидаемое свойство isActive как boolean
StatusIndicator.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default StatusIndicator;
