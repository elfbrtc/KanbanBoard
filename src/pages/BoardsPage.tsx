import React, { FC} from 'react'
import { useNavigate } from 'react-router-dom'
import BoardDetail from '../components/BoardDetail'
import BoardsList from '../components/BoardsList'
import { BoardsListProps } from '../components/BoardsList/BoardsList.types'
import { SingleBoardType } from '../contexts/BoardsContext/types'
import { boards } from '../services/http/scrumboard/endpoints/boards'
export type BoardsPageProps = {}


const BoardsPage: FC<BoardsPageProps> = (props) => {

  const navigate = useNavigate()

  const handleShowBoardDetail: BoardsListProps['onShowBoardDetail'] = (values: SingleBoardType) => {
    navigate('/boards-detail', {state:{board:values}})
  }

  const handleCreateBoard:BoardsListProps['onCreateBoard'] = (values) => {
    boards.createBoard(values).then((created) =>{
      navigate('/boards-detail', {state:{board: created.data}})
    })
   }

  return <BoardsList onShowBoardDetail={handleShowBoardDetail} onCreateBoard={handleCreateBoard} />
        
  
}


export default BoardsPage