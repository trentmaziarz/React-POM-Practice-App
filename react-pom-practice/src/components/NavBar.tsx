import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav data-testid="nav-bar">
      <Link to="/dashboard" data-testid="nav-dashboard">
        Dashboard
      </Link>
      {' | '}
      <Link to="/users" data-testid="nav-users">
        Users
      </Link>
    </nav>
  );
}
