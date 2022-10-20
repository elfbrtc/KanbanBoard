export type ModalTopBarProps = {
  card?:any,
  onDueDateClick?:() => void,
  onCheckListClick?:() => void,
  onLabelClick?:() => void,
  onCloseClick?: () => void,
  onChangeItem?: () => void
}

export type ModalCardType = {
  id: number,
  title: string,
  description: string,
  order: string,
  duedate: string,
  createdAt: string,
  updatedAt: string,
  listId: number,
  labels: Array,
  checklists: Array,
  comments: Array,
}