export type ModalCheckListProps = {
    checklist: any
    onShow?: boolean
    onClose?:() => void
    onAddChecklistItem?: () => void
  }

export type SingleChecklistType = {
  id: number,
  title: string,
  createdAt: string,
  updatedAt: string,
  cardId: number,
  items: Array<SingleChecklistItemType>
}

export type SingleChecklistItemType = {
  id: number,
  title: string,
  isChecked: boolean,
  createdAt: string,
  updatedAt: string,
  checklistId: number
}