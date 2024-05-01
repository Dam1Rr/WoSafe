import "./App.css";
import Footer from "./components/footer/FooterApp";
import HeaderApp from "./components/header/HeaderApp";
import HelpButton from "./components/helpButton/HelpButtonApp";

function App() {
  return (
    <div className="app-container">
      <HeaderApp />
      <HelpButton />
      <Footer />
    </div>
  );
}

export default App;
