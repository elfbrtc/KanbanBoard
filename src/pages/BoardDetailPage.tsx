import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BoardDetail from '../components/BoardDetail'
import BoardsList from '../components/BoardsList'
import { BoardsListProps } from '../components/BoardsList/BoardsList.types'
import { boards } from '../services/http/scrumboard/endpoints/boards'
import { useLocation } from "react-router-dom";
export type BoardsDetailPageProps = {}


const BoardsDetailPage: FC<BoardsDetailPageProps> = (props) => {
    const location = useLocation();
    const [ lastUpdate, setLastUpdate ] = useState(0);
    useEffect(() => {

    })

    const handleUpdateState = () => {
        setLastUpdate(Date.now());
        console.log("Geldiiii")
        console.log(location.state.board)
    }

    return <BoardDetail onUpdate = {handleUpdateState} boardId={location.state.board.id} />


}


export default BoardsDetailPage