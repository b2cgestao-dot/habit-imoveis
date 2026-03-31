import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Obrigado from './pages/Obrigado';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/obrigado" element={<Obrigado />} />
    </Routes>
  );
}

export default App;
