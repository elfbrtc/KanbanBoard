import service from '../../instance'
import { BoardsRequestPayload, CardChecklistItemRequestPayload, CardChecklistItemUpdateRequestPayload, CardChecklistRequestPayload, CardChecklistUpdateRequestPayload, CardCommentRequestPayload, CardLabelRequestPayload, CardUpdateRequestPayload, ListCardRequestPayload } from './types'

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

export const getCardById = (cardId: number) => 
  service.get('card/' + cardId, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })


export const getLabelList = () =>
  service.get('label', {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })

export const createCardLabel = (payload: CardLabelRequestPayload) => 
  service.post('card-label', payload, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })


export const removeCardLabel = (cardLabelId: number) => 
  service.delete('card-label/'+cardLabelId, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })


export const createCardCheckList = (payload: CardChecklistRequestPayload) => 
  service.post('checklist', payload, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })


export const removeCardChecklist = (checklistId: number) => 
  service.delete('checklist/'+checklistId, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })


export const updateCardChecklist = (payload: CardChecklistUpdateRequestPayload) => 
  service.put('checklist/'+payload.checklistId, payload, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })


export const createCardCheckListItem = (payload: CardChecklistItemRequestPayload) => 
  service.post('checklist-item', payload, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })


export const removeCardChecklistItem = (checklistItemId: number) => 
  service.delete('checklist-item/'+checklistItemId, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })


export const updateCardChecklistItem = (payload: CardChecklistItemUpdateRequestPayload) => 
  service.put('checklist-item/'+payload.checklistItemId, payload, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })

export const createCardComment = (payload: CardCommentRequestPayload) => 
  service.post('comment', payload, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })

export const removeCardComment = (commentId: number) => 
  service.delete('comment/'+commentId, {
    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
  })


export const updateDueDate = (payload: CardUpdateRequestPayload) =>  
service.put('card/'+payload.boardId, payload, {
  headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
})



