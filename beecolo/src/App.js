import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Conseils from './pages/Conseils';
import Simulateur from './pages/Simulateur';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conseils" element={<Conseils />} />
        <Route path="/simulateur" element={<Simulateur />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
