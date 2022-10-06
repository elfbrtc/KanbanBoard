import React , {FC} from 'react'
import { Styled } from './Button.styled'

const Button : FC<any>= (props) => {
  return (
    <Styled {...props}/>
  )
}

export default Button