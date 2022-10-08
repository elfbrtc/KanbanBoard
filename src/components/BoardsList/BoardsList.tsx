import React from 'react'
import { Styled } from './BoardsList.styled'
import './BoardsList.css'
import BoardCard from '../BoardCard'

const BoardsList = () => {
  return (
    <Styled>

        <BoardCard
        icon="add" text="gulu gulu gulu"></BoardCard>
        <BoardCard></BoardCard>
        <BoardCard></BoardCard>
    </Styled>
    
  )
}

export default BoardsList