import { SingleBoardType } from "../BoardsContext/types"

export type BoardDetailType={
    singleList:Array<SingleBoardDetailList>
}

export type CreateBoardListType = {
    boardId: number,
    title: string
}

export type ContextType = {
    state: BoardsType
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