import "./HeaderApp.css";

const HeaderApp = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <h1 className="logoApp">My safety</h1>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="#">Новости</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
          <li>
            <a href="#">Обратная связь</a>
          </li>
          <li>
            <a href="#">Поддержка</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderApp;
