import { useState } from "react";
import "./HelpButtonApp.css";

const HelpButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sendToAllContacts, setSendToAllContacts] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);

  const contacts = ["Наима", "Темирлан", "Адилкан", "Спаретра", "Дамир"];

  const handleClick = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    const notificationMessage =
      "Срочная помощь требуется! Местоположение и детали инцидента.";
    selectedContacts.forEach((contact) => {
      console.log(`Отправлено уведомление ${contact}: ${notificationMessage}`);
    });

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
    <div className="help-button-container">
      <button onClick={handleClick} className="help-button">
        Help!
      </button>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2 className="modal-title">Отправить сигнал о помощи</h2>
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



