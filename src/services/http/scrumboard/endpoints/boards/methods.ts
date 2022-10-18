import service from '../../instance'
import { BoardsRequestPayload } from './types'

export const updateBoard = (payload: BoardsRequestPayload) =>
  service.put('board/'+payload.id, payload, {
    headers:{"Authorization": "Bearer " + localStorage.getItem("token")}
  })

  export const createBoard = (payload: BoardsRequestPayload) =>
  service.post('board', payload, {
    headers:{"Authorization": "Bearer " + localStorage.getItem("token")}
  })

  export const deleteBoard = (payload: BoardsRequestPayload) =>
  service.delete('board'+payload.id,)

  export const getByIdBoard = (payload: BoardsRequestPayload) =>
  service.get('board'+payload.id,)

  export const getListBoard = () =>
  service.get('board',
  {
    headers:{"Authorization": "Bearer " + localStorage.getItem("token")}
  })



