
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

function App() {
  const { isLoggedIn } = useLoginContext()

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
          </BoardsProvider>
          <BoardDetailProvider>
            <Routes>
                <Route path="/boards-detail" element={<BoardDetailPage />} />
            </Routes>
          </BoardDetailProvider>
          
        </BrowserRouter>
      )}
    </div>
  )
}
export default App;