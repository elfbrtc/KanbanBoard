export type EditableTextInputProps = {
  showInputEle:boolean,
  value:string,
  handleChange?:(e) => void,
  handleBlur?:() => void,
  handleDoubleClick?:() => void
  onUpdate?:() => void
  }