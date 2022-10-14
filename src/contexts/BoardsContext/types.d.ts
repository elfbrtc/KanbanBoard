export type BoardsType={
    boards:Array<
        SingleBoardType
    >

}

export type ContextType = {
    state: BoardsType
    dispatches :  any
  }

  export type SingleBoardType={
    id: number,
    title: string,
    createdAt: string,
    updatedAt: string,
    ownerId: number,
    members?: Array
}