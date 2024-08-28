import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { HelpCenter, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HelpCenter />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
