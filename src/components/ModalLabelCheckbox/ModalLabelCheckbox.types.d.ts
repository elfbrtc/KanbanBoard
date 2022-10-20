export type ModalLabelCheckboxProps = {
    card: any,
    label: any
}

export type CardLabelType = {
    id: number,
    title: string,
    color: string,
    createdAt: string,
    updatedAt: string,
    CardLabel: SingleCardLabelType
}

export type SingleCardLabelType = {
    id: number,
    createdAt: string,
    updatedAt: string,
    cardId: number,
    labelId: number
}