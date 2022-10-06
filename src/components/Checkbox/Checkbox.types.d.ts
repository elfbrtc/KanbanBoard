export type CheckboxProps = {
  value?: boolean
  defaultValue?: boolean
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, v: boolean) => void
}
