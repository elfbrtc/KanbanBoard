import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Card from '../Card'
import Checkbox from '../Checkbox'
import Input from '../Input'
import { InputProps } from '../Input/Input.types'
import loginImg from '../../assets/login-image.png'
import { Styled } from './RegisterForm.styled'
import {
  RegisterFormProps,
  RegisterFormValuesProps,
} from './RegisterForm.types'

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const [formValues, setFormValues] = useState<RegisterFormValuesProps>({
    username: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChange: InputProps['onChange'] = (e, v) => {
    const name = e.target.name
    setFormValues((prev) => ({ ...prev, [name]: v }))
  }

  const handleSubmit = () => {
    props.onRegister?.(formValues)
  }

  const navigate = useNavigate()
  return (
    <Styled>
      <div className="login__img  ">
        <img src={loginImg} alt="" />
      </div>
      <div className='register'>
      <Card title="Register">
        <Input
          onChange={handleChange}
          value={formValues.username}
          icon="mail"
          name="username"
          type="text"
          placeholder="Enter your username"
          style={{ marginBottom: '15px' }}
        />
        <Input
          onChange={handleChange}
          name="password"
          value={formValues.password}
          icon="key"
          type="password"
          placeholder="Create a password"
          style={{ marginBottom: '15px' }}
        />

        <Input
          name="passwordConfirm"
          onChange={handleChange}
          value={formValues.passwordConfirm}
          icon="key"
          type="password"
          placeholder="Confirm the password"
          style={{ marginBottom: '15px' }}
        />
        <div className="remember-forgot">
          <Checkbox label="I accept all terms & conditions" />
        </div>

        <Button onClick={handleSubmit}>Register now</Button>
        <p className="register-links">
          Already have an account{' '}
          <Link className="link" to="/login">
            Sign in!
          </Link>
        </p>
      </Card>
      </div>
      
    </Styled>
  )
}

export default RegisterForm
