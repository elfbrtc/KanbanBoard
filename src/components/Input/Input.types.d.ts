export type InputProps = {
    placeholder: string
    type: 'text' | 'password'
    icon?: string
    style?: React.CSSProperties
    value?: string
    name?:string
    defaultValue?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, v: string) => void
  }