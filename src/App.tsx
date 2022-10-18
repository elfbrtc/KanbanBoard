
import LoginForm from './components/LoginForm'
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useLoginContext } from './contexts/LoginContext/LoginContext'
import BoardsPage from './pages/BoardsPage'
import { BoardsProvider } from './contexts/BoardsContext/BoardsContext'
import BoardDetail from './components/BoardDetail'
import BoardDetailPage from './pages/BoardDetailPage'
import { BoardDetailProvider } from './contexts/BoardDetailContext/BoardDetailContext'
import instance from './services/http/scrumboard/instance'
function App() {
  const { isLoggedIn, logout } = useLoginContext()

  return (
    <div className="App">
      {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
       
          <BoardsProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/boards-page" />} />
              <Route path="/boards-page" element={<BoardsPage />} />
            </Routes>
          <BoardDetailProvider>
            <Routes>
                <Route path="/boards-detail" element={<BoardDetailPage />} />
            </Routes>
          </BoardDetailProvider>
          </BoardsProvider>
         
          
        </BrowserRouter>
      )}
    </div>
  )
}
export default App;