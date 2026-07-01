import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Kebudayaan from './pages/Kebudayaan';
import KekayaanAlam from './pages/KekayaanAlam';
import ItemDetail from './pages/ItemDetail';
import Tentang from './pages/Tentang';
import Kuis from './pages/Kuis';
import Peta from './pages/Peta';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kebudayaan" element={<Kebudayaan />} />
            <Route path="/kekayaan-alam" element={<KekayaanAlam />} />
            <Route path="/kebudayaan/:id" element={<ItemDetail type="culture" />} />
            <Route path="/kekayaan-alam/:id" element={<ItemDetail type="nature" />} />
            <Route path="/peta" element={<Peta />} />
            <Route path="/kuis" element={<Kuis />} />
            <Route path="/tentang" element={<Tentang />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
