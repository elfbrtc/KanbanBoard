import { SingleBoardType } from "../../../../../contexts/BoardsContext/types"

export type BoardsRequestPayload = {
    boardListId?: number
    boardId:number,
    title:string
}

export type BoardsDetailCreateListResponseType = {
    data : {
        id: number,
        title: string
        createdAt: string,
        updatedAt: string,
        boardId: number,
    }
}

export type BoardsDetailGetListResponseType = {
    data : Array<{
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

