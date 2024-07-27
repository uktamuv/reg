import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import HomePage from './Home';

const App = () => {
  // Check if user is already registered
  const isRegistered = localStorage.getItem('isRegistered');

  return (
    <Router>
      <Routes>
        {/* Default route to Registration if not registered, otherwise to Home */}
        <Route
          path="/"
          element={isRegistered ? <Navigate to="/home" /> : <RegistrationForm />}
        />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
