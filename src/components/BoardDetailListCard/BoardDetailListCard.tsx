import React, { FC, useState } from 'react'
import { BoardDetailListCardProps } from './BoardDetailListCard.types'
import BoardCard from '../BoardCard'
import TextFieldAddCard from '../TextFieldAddCard'
import BoardDetailModalCard from '../BoardDetailModalCard'
import Modal from '../Modal'

const BoardDetailListCard: FC<BoardDetailListCardProps> = (props) => {
  const [isClicked, setIsClicked] = useState(false)
  const [value, setValue] = useState("");
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

  }

  return (
    <div className='flex flex-col bg-gray-200  bg-white rounded-3xl border border-gray-200 shadow-md mr-4 w-72 h-max'>
      <div className='flex justify-between p-4 pb-12'>
        <p className='font-medium'>{props.title}</p>
        <span className="material-symbols-outlined">more_vert</span>

      </div>
      <div>
        <Modal/>
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