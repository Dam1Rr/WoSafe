import styles from "./NavigationApp.module.css"; // Импортируем файл со стилями

function NavigationApp() {
  return (
    <nav>
      <ul className={styles.nav__links}>
        <li className={styles.nav__link}>
          <div className={styles.nav__icon}>
            <a href="#">
              <i
                className="fa-solid fa-house fa-xl"
                style={{ color: "#c7f2de" }}
              ></i>
            </a>
          </div>
          <p className={styles.icon__text}>HOME</p>
        </li>
        <li className={styles.nav__link}>
          <div className={styles.nav__icon}>
            <a href="#">
              <i
                className="fa-solid fa-user fa-xl"
                style={{ color: "#c7f2de" }}
              ></i>
            </a>
          </div>
          <p className={styles.icon__text}>ABOUT</p>
        </li>
        <li className={styles.nav__link}>
          <div className={styles.nav__icon}>
            <a href="#">
              <i
                className="fa-solid fa-bars fa-xl"
                style={{ color: "#c7f2de" }}
              ></i>
            </a>
          </div>
          <p className={styles.icon__text}>MENU</p>
        </li>
        <li className={styles.nav__link}>
          <p className={styles.icon__text}>SETTINGS</p>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationApp;
