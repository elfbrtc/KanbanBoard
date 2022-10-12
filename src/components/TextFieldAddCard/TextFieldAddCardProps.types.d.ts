export type TextFieldAddCardProps = {
    title?:string
    value?:string
    onClick?:() => void
    onClear?:() => void
    handleChange?:(e) => void,
  }