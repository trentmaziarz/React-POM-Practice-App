import { useState } from 'react';
import AppRoutes from './app/routes';
import NavBar from './components/NavBar';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated && <NavBar />}
      <AppRoutes onLogin={() => setIsAuthenticated(true)} />
    </div>
  );
}
