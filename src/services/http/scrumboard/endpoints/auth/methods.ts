import service from '../../instance'
import { LoginRequestPayload, RegisterRequestPayload, RegisterResponseType } from './types'

export const login = (payload: LoginRequestPayload) =>
  service.post('auth/login', payload)

export const register = (payload: RegisterRequestPayload) : Promise<RegisterResponseType> =>
  service.post('auth/register', payload,{})
