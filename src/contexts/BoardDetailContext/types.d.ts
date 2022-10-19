import { SingleBoardType } from "../BoardsContext/types"

export type BoardDetailType={
    singleList:Array<SingleBoardDetailList>
    labels: Array<SingleLabel>
    
}

export type CreateBoardListType = {
    boardId: number,
    title: string
}

export type ContextType = {
    state: BoardDetailType
    dispatches :  any
  }

export type SingleBoardDetailList = {
    id: number,
    order?: any,
    title: string
    createdAt: string,
    updatedAt: string,
    boardId: number,
    cards?: Array,
    board?: Array<SingleBoardType>
}

export type SingleLabel = {
    id: number,
    title: string,
    color: string,
    createdAt: string,
    updatedAt: string
}