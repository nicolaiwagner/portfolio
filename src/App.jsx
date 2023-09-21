import "./App.css";
import Design from "./components/Design";
import Header from "./components/Header";
import LandingContent from "./components/LandingContent";
import About from "./components/About";
import ContactB from "./blocks/ContactB";

function App() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-screen bg-blurry-gradient-haikei bg-no-repeat bg-center bg-cover">
        <Header />
        <Design />
        <LandingContent />
      </div>
      <About />
      <ContactB />
    </div>
  );
}

export default App;
