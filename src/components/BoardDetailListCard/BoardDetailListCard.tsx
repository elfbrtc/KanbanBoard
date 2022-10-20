import React, { FC, useState } from 'react'
import { BoardDetailListCardProps } from './BoardDetailListCard.types'
import BoardCard from '../BoardCard'
import TextFieldAddCard from '../TextFieldAddCard'
import BoardDetailModalCard from '../BoardDetailModalCard'
import Modal from '../Modal'
import { boardDetail } from '../../services/http/scrumboard/endpoints/boardDetail'
import { useBoardDetailContext } from '../../contexts/BoardDetailContext/BoardDetailContext'

const BoardDetailListCard: FC<BoardDetailListCardProps> = (props) => {
  const [isClicked, setIsClicked] = useState(false)
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState(0)
  const boardDetailContext = useBoardDetailContext()

  const handleUpdateModal = () => {
    
    setShowModal(false)
    setTimeout(function() {
      setShowModal(true)
    }, 1);
    
  }
  const handleSetClicked = () => {
    setIsClicked(!isClicked)
  }

  const handleClearClick = () => {
    if (value) {
      setValue("");
    }
    else {
      setIsClicked(false);
    }
  };

  const handleAddCard = () => {
    boardDetail.createListCard({listId: props.listId, title: value}).then((data: any) => {
      boardDetail.getByIdBoardList({boardListId: props.listId}).then((getList : any) => {
        boardDetailContext.dispatches.createListCard(props.listId, getList.data)
      })
    })
    setValue("")
    handleSetClicked()
  }

  const handleCloseModal = () => {
      setSelectedCardId(0)
      setShowModal(false)
  }

  const handleCardClick = (cardId: number) => {
    setSelectedCardId(cardId)
    setShowModal(true)
  }

  return (
    <div className='flex flex-col bg-gray-200  bg-white rounded-3xl border border-gray-200 shadow-md mr-4 w-72 h-max'>
      <div className='flex justify-between p-4 pb-12'>
        <p className='font-medium'>{props.title}</p>
        <span className="material-symbols-outlined">more_vert</span>

      </div>
      <div>{
        boardDetailContext.state.singleList.filter((list: any) => list.id === props.listId).map((singleList: any) => 
           singleList.cards.map((card: any, key: any) => (
            <BoardDetailModalCard key = {key} title = {card.title} onCardClick={() => {
              handleCardClick?.(card.id)
            }}/>
           ))
        )}
        
        {
          showModal ? (
            <Modal onUpdate = {handleUpdateModal} cardId={selectedCardId} onClose={handleCloseModal}/>
          ) : null
        }
      </div>

      <hr className='border-t-1 border-gray-300 w-full'></hr>
      {!isClicked ? (
        <div className='flex px-2 py-4 cursor-pointer' onClick={handleSetClicked}>
          <span className="material-symbols-outlined">add</span>
          <p className='flex items-center text-sm font-medium px-2'> Add a card</p>

        </div>
      ) :
        <TextFieldAddCard
          value={value}
          title={"Card Title*"}
          handleChange={(e) => {
            setValue(e.target.value)
          }}
          onClear={handleClearClick}
          onClick={handleAddCard}
        />
      }


    </div>
  )
}

export default BoardDetailListCard