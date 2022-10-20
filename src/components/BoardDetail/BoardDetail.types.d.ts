export type BoardDetailProps = {
  boardListId?: number
  boardId: number,
  title?: string
  onUpdate?:() => void

}

export type BoardsDetailValuesProps = {
  boardListId?: number
  boardId: number,
  title?: string
}