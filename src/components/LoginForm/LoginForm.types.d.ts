export type LoginFormProps = {
    onLogin: (values: LoginFormValuesProps) => void
  }
  
  export type LoginFormValuesProps = {
    username: string
    password: string
  }