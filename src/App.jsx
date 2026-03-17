import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Decouverte from './pages/Decouverte';
import Blog from './pages/Blog';
import Chat from './pages/Chat';
import Apropos from './pages/Apropos';
import Login from './pages/Login';
import Register from './pages/Register';

// Pages sans Navbar/Footer
const AUTH_PAGES = ['/login', '/register'];

function Layout() {
  const location = useLocation();
  const isAuth = AUTH_PAGES.includes(location.pathname);

  return (
    <>
      {!isAuth && <Navbar />}
      {/* key force un re-mount à chaque changement de route → déclenche pageFade */}
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Accueil />} />
          <Route path="/decouverte" element={<Decouverte />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      {!isAuth && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
