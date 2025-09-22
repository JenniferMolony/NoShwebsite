import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';
import Consultations from './pages/Consultations';
import Collaborations from './pages/Collaborations';
import Contact from './pages/Contact';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;