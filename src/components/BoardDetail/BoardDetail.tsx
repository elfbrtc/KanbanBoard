import { Styled } from './BoardDetail.styled'
import React , {FC, useState} from 'react'
import { BoardDetailProps } from './BoardDetail.types'
import EditableTextInput from '../EditableTextInput'
import BoardNavbar from '../BoardNavbar'

const BoardDetail: FC<BoardDetailProps> = (props) => {

  return (
    <Styled>
       <BoardNavbar/>
    </Styled>
    
  )
}

export default BoardDetail