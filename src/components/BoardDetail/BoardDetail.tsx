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
import BoardDetailModalCard from '../BoardDetailModalCard'
import { useBoardsContext } from '../../contexts/BoardsContext/BoardsContext'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const BoardDetail: FC<BoardDetailProps> = (props) => {

  const boardDetailContext = useBoardDetailContext()
  const boardContext = useBoardsContext()
  const location = useLocation();
  const [board, setBoard] = useState<BoardsDetailValuesProps>({
    boardId: props.boardId,
  })

  const [lastUpdate, setLastUpdate] = useState(0);

  const handleGetBoardDetailList = (board: any) => {
    boardDetailContext.dispatches.getBoardList(board)
  }

  useEffect(() => {
    boardDetail.getBoardList(board.boardId).then(({ data }) => {
      handleGetBoardDetailList(data)
    })
  }, [])

  const handleUpdateState = () => {
    setLastUpdate(Date.now());
    props.onUpdate?.()
  }

  const handleOnDragEnd = (result : any ) => {
    if(!result.destination) return
    const items = Array.from(boardDetailContext.state.singleList)
    const [reOrderItems] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reOrderItems)
    boardDetailContext.state.singleList = items 
  }

  return (
    <>
      <BoardNavbar board={location.state.board} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='cardList' >
          {(provided) => (
            <div className="flex w-max py-32  px-16" {...provided.droppableProps} ref={provided.innerRef}>
              {boardDetailContext.state.singleList.map((list: any, index: any) => (
                <Draggable key={list.id} draggableId={list.id.toString()} index={index}>
                {(provided) => (
                  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <BoardDetailListCard onUpdate={handleUpdateState} key={list.id} title={list.title} listId={list.id} />
                  </div>  
                )}
                </Draggable>
                
              ))}
              {provided.placeholder}
              <BoardDetailAddListCard boardId={props.boardId} />
            </div>
          )}

        </Droppable>
      </DragDropContext>


    </>
  )

}

export default BoardDetail