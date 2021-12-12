import './App.css';
import SuperHeroes from './components/SuperHeroes';
import Header from "./components/Header"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <SuperHeroes />
        <Footer />
    </div>
  );
}

export default App;
