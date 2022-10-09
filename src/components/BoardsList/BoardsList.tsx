import React from 'react'
import { Styled } from './BoardsList.styled'
import './BoardsList.css'
import BoardCard from '../BoardCard'
import { useBoardsContext } from '../../contexts/BoardsContext/BoardsContext'

const BoardsList = () => {

  const boardsContext= useBoardsContext()
  
  const handleAddNewBoard=()=>{ 
    
  }

  return (
    
      <Styled>
        <div className="min-h-screen flex items-center justify-center">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 p-5'>
      {boardsContext.state.boards.map((board)=>(
        <BoardCard
        icon="analytics" 
        text={board.title}
        onClick={handleAddNewBoard}></BoardCard>
      ))} 
      <BoardCard
        icon="add" 
        text="Ekle"
        onClick={handleAddNewBoard}></BoardCard>
      </div>
      </div>
    </Styled>  
  )
}
export default BoardsList