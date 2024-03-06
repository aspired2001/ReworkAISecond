
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProgrammingPlatform from './components/ProgrammingPlatform';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <nav className="flex space-x-4 p-4 bg-gray-500">
          <Link to="/coding-environment" className="text-white">
            Coding Environment
          </Link>
          <Link to="/profile" className="text-white">
            Profile
          </Link>
        </nav>

        <Routes>
          <Route path="/coding-environment" element={<ProgrammingPlatform />} />
          <Route path="/profile" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
