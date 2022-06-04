import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Form from './components/Form';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <div className="cards-container">
                <Form />
                <Home />
              </div>
)}
          />
          <Route path="/country/:name" element={<div className="cards-container"><CountryDetails /></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
