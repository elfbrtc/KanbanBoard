import service from '../../instance'
import { BoardsRequestPayload, ListCardRequestPayload } from './types'

export const updateBoardList = (payload: BoardsRequestPayload) =>
  service.put('list/' + payload.boardListId, payload, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })

export const createBoardList = (payload: BoardsRequestPayload) =>
  service.post('list', payload, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })

export const deleteBoardList = (payload: BoardsRequestPayload) =>
  service.delete('list' + payload.boardListId, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })

export const getByIdBoardList = (payload: BoardsRequestPayload) =>
  service.get('list/' + payload.boardListId, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })

export const getBoardList = (boardId: number) =>
  service.get('list?' + 'boardId=' + boardId, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })

export const createListCard = (payload: ListCardRequestPayload) => 
  service.post('card', payload, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })




