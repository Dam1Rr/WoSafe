import { useState } from "react";
import "./HelpButtonApp.css";

const HelpButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sendToAllContacts, setSendToAllContacts] = useState(false);
  const [sendLocation, setSendLocation] = useState(false);
  const [sendToParents, setSendToParents] = useState(false);
  const [sendToEmergency, setSendToEmergency] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);

  const contacts = ["User 1", "User 2", "User 3", "User 4", "User 5"];

  const handleClick = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    const notificationMessage =
      "Срочная помощь требуется! Местоположение и детали инцидента.";
    selectedContacts.forEach((contact) => {
      console.log(`Отправлено уведомление ${contact}: ${notificationMessage}`);
    });

    if (sendToParents) {
      console.log("Отправлено уведомление родителям");
    }

    if (sendToEmergency) {
      console.log("Отправлено уведомление экстренным службам");
    }

    setModalVisible(false);
    alert("Сигнал о помощи отправлен!");
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleCheckboxChange = (contact) => {
    if (selectedContacts.includes(contact)) {
      setSelectedContacts(selectedContacts.filter((item) => item !== contact));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const handleSelectAll = () => {
    if (!sendToAllContacts) {
      setSelectedContacts(contacts);
    } else {
      setSelectedContacts([]);
    }
    setSendToAllContacts(!sendToAllContacts);
  };

  return (
    <div className="wrap">
      <button onClick={handleClick} className="button">
        Click
      </button>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2 className="modal-title">Вызвать помощь</h2>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={sendToAllContacts}
                onChange={handleSelectAll}
              />
              Отправить всем моим контактам:
            </label>
            <ul className="contact-list">
              {contacts.map((contact) => (
                <li key={contact} className="contact-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedContacts.includes(contact)}
                      onChange={() => handleCheckboxChange(contact)}
                    />
                    {contact}
                  </label>
                </li>
              ))}
            </ul>
            <label className="checkbox-label">
              <h2 className="moree">Дополнительно</h2>
              <input
                type="checkbox"
                checked={sendLocation}
                onChange={() => setSendLocation(!sendLocation)}
              />
              Отправить моё местоположение
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={sendToParents}
                onChange={() => setSendToParents(!sendToParents)}
              />
              Сообщить родителям
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={sendToEmergency}
                onChange={() => setSendToEmergency(!sendToEmergency)}
              />
              Сообщить экстренным службам
            </label>
            <button onClick={handleConfirm} className="confirm-button">
              Подтвердить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpButton;
