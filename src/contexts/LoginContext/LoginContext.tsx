import {
  useState,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from 'react'
import instance from '../../services/http/scrumboard/instance'
import { ContextType, StateType } from './types'

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
    instance.interceptors.request.use((config) => {
      const _config = { ...config }
      _config.headers = {
        ...config.headers,
        
      }
      _config.headers.Authorization = 'Bearer ' + state.token
      return _config
    })

    /* instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if ([500, 401, 403].includes(error.response.status)) {
          setState((prev) => ({
            ...prev,
            isLoggedIn: false,
            token: '',
            username: '',
          }))
        }
      }
    ) */
  },[state.token])

  const login = (token: string, username: string) => {
    console.log(token)
    setState({
      
      username,
      token,
      isLoggedIn: true,
    })

    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
  }
  const logout = () => {
    setState({
      username: '',
      token: '',
      isLoggedIn: false,
    })
    localStorage.setItem('token', '')
    localStorage.setItem('username', '')
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
  console.log(state.isLoggedIn)
  return {
    username: state.username,
    isLoggedIn: state.isLoggedIn,
    login,
    logout,
  }
}
