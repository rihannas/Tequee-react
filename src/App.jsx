import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/Navbar';
import ServicePage from './pages/ServicePage/ServicePage';
import SellerPage from './pages/SellerPage/SellerPage';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <ServicePage />
            </>
          }
        />
        <Route
          path='/service/:id'
          element={<ServiceDetails />}
        />
        <Route
          path='/seller/:id'
          element={<SellerPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
