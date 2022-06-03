import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="cards-container">
        <Home />
      </div>
    </div>
  );
}

export default App;
