import "./App.css";
import AccelerometerApp from "./components/accelerometr/AccelerometerApp";
import Footer from "./components/footer/FooterApp";
import HeaderApp from "./components/header/HeaderApp";
import HelpButton from "./components/helpButton/HelpButtonApp";

function App() {
  return (
    <div className="app-container">
      <HeaderApp />
      <HelpButton />
      <Footer />
      <AccelerometerApp/>
    </div>
  );
}

export default App;
