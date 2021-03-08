import "bootswatch/dist/yeti/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar"
import MainContainer from "./components/MainContainer"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <MainContainer />
      <Footer/>
    </div>
  );
}

export default App;
