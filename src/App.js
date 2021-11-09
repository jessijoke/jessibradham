import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
