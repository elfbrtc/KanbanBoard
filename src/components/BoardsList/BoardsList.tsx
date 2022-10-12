import React, { FC, useEffect, useState } from 'react'
import { Styled } from './BoardsList.styled'
import './BoardsList.css'
import BoardCard from '../BoardCard'
import { useBoardsContext } from '../../contexts/BoardsContext/BoardsContext'
import { BoardsListProps, BoardsListValuesProps } from './BoardsList.types'

const BoardsList: FC<BoardsListProps>  = (props) => {
  
  const [refresh, setRefresh] = useState(false);

  const [boardValues, setBoardValues] = useState<BoardsListValuesProps>({
    id:0,
    title:"Untitled Board",
  })

  useEffect(() => {
    if(!refresh) setRefresh(true)
  }, [refresh])
  const boardsContext= useBoardsContext()
  
  const handleShowBoard=(singleBoardType:any)=>{
    console.log(singleBoardType)
    props.onShowBoardDetail(singleBoardType)
  }
  
  const handleAddNewBoard=()=>{ 
    props.onCreateBoard(boardValues)
    // window.location.reload();
  }

  return (
    
      <Styled>
        <div className="min-h-screen flex items-center justify-center">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 p-5'>
      {boardsContext.state.boards.map((board)=>(
        <BoardCard
        icon="analytics" 
        text={board.title}
        onClick={()=>handleShowBoard(board)}></BoardCard>
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