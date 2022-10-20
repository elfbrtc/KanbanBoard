import React, { FC, useEffect, useState } from 'react'
import { Styled } from './BoardsList.styled'
import './BoardsList.css'
import BoardCard from '../BoardCard'
import { useBoardsContext } from '../../contexts/BoardsContext/BoardsContext'
import { BoardsListProps, BoardsListValuesProps } from './BoardsList.types'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const BoardsList: FC<BoardsListProps> = (props) => {

  const boardsContext = useBoardsContext()

  const [refresh, setRefresh] = useState(false);

  const [boardValues, setBoardValues] = useState<BoardsListValuesProps>({
    id: 0,
    title: "Untitled Board",
  })

  useEffect(() => {
    if (!refresh) setRefresh(true)
  }, [refresh])


  const handleShowBoard = (singleBoardType: any) => {
    props.onShowBoardDetail(singleBoardType)
  }

  const handleAddNewBoard = () => {
    props.onCreateBoard(boardValues)
    // window.location.reload();
  }

  const handleOnDragEnd = (result : any ) => {
    if(!result.destination) return
    const items = Array.from(boardsContext.state.boards)
    const [reOrderItems] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reOrderItems)
    boardsContext.state.boards = items 
  }

  return (

    <Styled>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='boardList'>
          {(provided) => (
            <div className="min-h-screen flex items-center justify-center" {...provided.droppableProps} ref={provided.innerRef}>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 p-5'>
                {boardsContext.state.boards.map((board: any, index: any) => (
                  <Draggable key={board.id} draggableId={board.id.toString()} index={index}>
                    {(provided) => (
                      <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <BoardCard
                          icon="analytics"
                          text={board.title}
                          onClick={() => handleShowBoard(board)} />
                      </div>

                    )}

                  </Draggable>

                ))}
                {provided.placeholder}
                <BoardCard
                  icon="add"
                  text="Ekle"
                  onClick={handleAddNewBoard}></BoardCard>

              </div>
            </div>
          )}
        </Droppable>

      </DragDropContext>
    </Styled >
  )
}
export default BoardsList