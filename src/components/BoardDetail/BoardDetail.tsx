import { Styled } from './BoardDetail.styled'
import React , {FC, useState} from 'react'
import { BoardDetailProps } from './BoardDetail.types'
import EditableTextInput from '../EditableTextInput'
import BoardNavbar from '../BoardNavbar'
import BoardDetailAddListCard from '../BoardDetailAddListCard'
import {useLocation} from "react-router-dom";

const BoardDetail: FC<BoardDetailProps> = (props) => {
  const location = useLocation();
  return (
    <Styled>
       <BoardNavbar board={location.state.board}/>
       <BoardDetailAddListCard/>
    </Styled>
    
  )
}

export default BoardDetail