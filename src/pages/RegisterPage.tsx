import { useNavigate } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'
import { RegisterFormProps } from '../components/RegisterForm/RegisterForm.types'
import { useLoginContext } from '../contexts/LoginContext/LoginContext'
import { auth } from '../services/http/scrumboard/endpoints/auth'

const RegisterPage = () => {
  const navigate = useNavigate()
  const {login} = useLoginContext()
  const handleRegister: RegisterFormProps['onRegister'] = (values) => {
    auth.register(values).then(({data})=>{
      login(data.token,data.username)
      navigate('/')
    })
  }

  return <RegisterForm onRegister={handleRegister} />
}

export default RegisterPage
