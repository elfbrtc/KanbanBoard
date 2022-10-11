import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import BoardsList from '../components/BoardsList'
import { BoardsListProps } from '../components/BoardsList/BoardsList.types'
import { boards } from '../services/http/scrumboard/endpoints/boards'
export type BoardsPageProps = {}


const BoardsPage: FC<BoardsPageProps> = (props) => {

  const navigate = useNavigate()

  const handleShowBoardDetail: BoardsListProps['onShowBoardDetail'] = (values) => {
   navigate('/boards-detail')
  }

  const handleCreateBoard:BoardsListProps['onCreateBoard'] = (values) => {
    boards.createBoard(values).then((board) =>{
      console.log(board);
      navigate('/boards-detail')

    })
   }

  return <BoardsList onShowBoardDetail={handleShowBoardDetail} onCreateBoard={handleCreateBoard}  />
}


export default BoardsPage