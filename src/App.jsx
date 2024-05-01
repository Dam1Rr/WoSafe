import "./App.css";
import Footer from "./components/footer/FooterApp";
import HeaderApp from "./components/header/HeaderApp";
import HelpButton from "./components/helpButton/HelpButtonApp";
import NavigationApp from "./components/navigation/NavigationApp";


function App() {
  return (
    <div className="app-container">
      <HeaderApp />
      <HelpButton />
      <Footer />
      <NavigationApp/>
    </div>
  );
}

export default App;
