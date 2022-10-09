export type BoardsType={
    boards:Array<{
        id: number,
        title: string,
        createdAt: string,
        updatedAt: string,
        ownerId: number,
        members: Array
    }>

}

export type ContextType = {
    state: BoardsType
    dispatches :  any
  }