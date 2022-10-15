import React, { FC, useState, useRef } from 'react'
import { BoardDetailProps, BoardsDetailValuesProps } from './BoardDetail.types'
import EditableTextInput from '../EditableTextInput'
import BoardNavbar from '../BoardNavbar'
import BoardDetailAddListCard from '../BoardDetailAddListCard'
import { useLocation } from "react-router-dom";
import BoardDetailListCard from '../BoardDetailListCard'
import { useBoardDetailContext } from '../../contexts/BoardDetailContext/BoardDetailContext'
import { useEffect } from 'react'
import { boardDetail } from '../../services/http/scrumboard/endpoints/boardDetail'

const BoardDetail: FC<BoardDetailProps> = (props) => {
  const boardDetailContext = useBoardDetailContext()
  const location = useLocation();
  const [board, setBoard] = useState<BoardsDetailValuesProps>({
    boardId: props.boardId,
  })

  const handleGetBoardDetailList = (board: any) => {
    boardDetailContext.dispatches.getBoardList(board)
  }

  useEffect(() => {
    boardDetail.getBoardList(board.boardId).then(({ data }) => {
      handleGetBoardDetailList(data)
    })
  }, [])

  return (
    <>
      <BoardNavbar board={location.state.board} />
      <div className="flex w-max py-32 px-16">
        {boardDetailContext.state.singleList.map((list: any, key: any) => (
          <BoardDetailListCard key={key} title={list.title}/>
        ))}
        <BoardDetailAddListCard boardId={props.boardId} />
      </div>
      
    </>
  )

}

export default BoardDetail