import { useQuery } from '@tanstack/react-query';
import './App.css';
import Navbar from './components/Nav/Navbar';

import Service from './components/Service/Service';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  const {} = useQuery({ queryKey: ['services'], queryFn: });
  return (
    <>
      <Navbar />
      <Service />
      <ServiceDetails />
    </>
  );
}

export default App;
