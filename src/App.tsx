import LoginForm from './components/LoginForm'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;