
import LoginForm from './components/LoginForm'
import { BrowserRouter, Route, Link, Routes, Navigate  } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;