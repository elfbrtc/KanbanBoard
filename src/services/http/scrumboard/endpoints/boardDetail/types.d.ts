import { SingleBoardType } from "../../../../../contexts/BoardsContext/types"

export type BoardsRequestPayload = {
    boardListId?: number
    boardId?: number,
    title?: string
}

export type ListCardRequestPayload = {
    listId?: number,
    title: string
}

export type CardLabelRequestPayload = {
    cardId : number,
    labelId: number
}

export type CardChecklistRequestPayload = {
    cardId : number,
    title: string
}

export type CardChecklistUpdateRequestPayload = {
    checklistId : number,
    title: string
}

export type CardChecklistItemRequestPayload = {
    checklistId : number,
    title: string,
    isChecked: boolean
}

export type CardChecklistItemUpdateRequestPayload = {
    checklistItemId: number,
    isChecked: boolean
}

export type CardUpdateRequestPayload = {
    title?: string,
    boardId: number,
    duedate: string,
}

export type CardCommentRequestPayload = {
    cardId: number,
    message: string
}

export type ListCardReponseType = {
    data: {
        id: number,
        title: string,
        listId: number,
        updatedAt: string,
        createdAt: string
    }
}

export type BoardsDetailCreateListResponseType = {
    data: {
        id: number,
        title: string
        createdAt: string,
        updatedAt: string,
        boardId: number,
    }
}

export type BoardsDetailGetListResponseType = {
    data: Array<{
        id: number,
        order: any,
        title: string
        createdAt: string,
        updatedAt: string,
        boardId: number,
        cards: Array,
        board: Array<SingleBoardType>
    }>
}

