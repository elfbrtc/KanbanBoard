export type RegisterFormProps = {
  onRegister: (values: RegisterFormValuesProps) => void
}

export type RegisterFormValuesProps = {
  username: string
  password: string
  passwordConfirm: string
}
