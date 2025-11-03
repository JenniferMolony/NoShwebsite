import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Consultations from './pages/Consultations';
import Collaborations from './pages/Collaborations';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/consultations" element={<Consultations />} />
              <Route path="/collaborations" element={<Collaborations />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;