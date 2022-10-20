import {
  useState,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from 'react'
import instance from '../../services/http/scrumboard/instance'
import { ContextType, StateType } from './types';

const initialState: StateType = {
  isLoggedIn: Boolean(localStorage.getItem('token')),
  token: localStorage.getItem('token') || '',
  username: localStorage.getItem('username') || '',
}

export const LoginContext = createContext<ContextType>({
  login: () => null,
  logout: () => null,
  state: initialState,
})

export const LoginProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState)
  useEffect(() => {
    console.log("Login Context")
    console.log(state.token)
    instance.interceptors.response.use(
      (response) => {                
        const _config = { ...response}
        _config.headers = {
          ...response.headers,
        }
        _config.headers.Authorization = 'Bearer ' + state.token
        return _config
      },
      (error) => {
        console.log("Error")      
        if ([401, 403].includes(error.response.status)) {
          logout()
          //Değiştirilebilir
          window.location.href = '/login'
        }
        return Promise.reject(error);
      }
    )
  },[state.token])

  const login = (token: string, username: string) => {
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
    setState({
      username,
      token,
      isLoggedIn: true,
    })
  }
  const logout = () => {
    
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setState({
      username: '',
      token: '',
      isLoggedIn: false,
    })
  }

  return (
    <LoginContext.Provider
      value={{
        login: login,
        logout: logout,
        state: state,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export const useLoginContext = () => {
  const { state, login, logout } = useContext(LoginContext)
  return {
    username: state.username,
    isLoggedIn: state.isLoggedIn,
    login,
    logout,
  }
}
