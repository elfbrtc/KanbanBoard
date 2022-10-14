import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BoardDetail from '../components/BoardDetail'
import BoardsList from '../components/BoardsList'
import { BoardsListProps } from '../components/BoardsList/BoardsList.types'
import { boards } from '../services/http/scrumboard/endpoints/boards'
import { useLocation } from "react-router-dom";
export type BoardsDetailPageProps = {}


const BoardsDetailPage: FC<BoardsDetailPageProps> = (props) => {
    const location = useLocation();
    useEffect(() => {

    })
    return <BoardDetail boardId={location.state.board.id} />


}


export default BoardsDetailPage