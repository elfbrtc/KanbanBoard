export type BoardsListProps = {
    onShowBoardDetail: (values: any) => void,
    onCreateBoard: (values:BoardsListValuesProps) => void,
}

export type BoardsListValuesProps = {
    id:number,
    title: string
  }