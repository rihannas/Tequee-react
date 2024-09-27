import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/Navbar';
import ServicePage from './pages/ServicePage/ServicePage';
import SellerPage from './pages/SellerPage/SellerPage';
import ServiceDetailPage from './pages/ServiceDetailsPage/ServiceDetailsPage';

function RoutesWithLogging() {
  const location = useLocation();
  console.log('Current path:', location.pathname);

  return (
    <Routes>
      <Route
        path='/service'
        element={<ServicePage />}
      />
      <Route
        path='/service/:id'
        element={<ServiceDetailPage />}
      />
      <Route
        path='/seller/:id'
        element={<SellerPage />}
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <RoutesWithLogging />
    </Router>
  );
}

export default App;
