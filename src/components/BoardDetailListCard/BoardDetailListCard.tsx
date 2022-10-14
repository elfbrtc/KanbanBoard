import { Styled } from './BoardDetailListCard.styled'
import React, { FC } from 'react'
import { BoardDetailListCardProps } from './BoardDetailListCard.types'
import BoardCard from '../BoardCard'
import TextFieldAddCard from '../TextFieldAddCard'

const BoardDetailListCard: FC<BoardDetailListCardProps> = (props) => {
  return (
    <Styled>
      <div className='flex flex-col max-w-sm bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 '>
        <div className='flex justify-between p-4 pb-12'>
          <p className='font-medium'>Örnek List</p>
          <span className="material-symbols-outlined">more_vert</span>
        </div>
        <hr className='border-t-1 border-gray-300 w-full'></hr>
        <div className='flex px-2 py-4'>
          <span className="material-symbols-outlined">add</span>
          <p className='flex items-center text-sm font-medium px-2'> Add a card</p>
        
        </div>
          <TextFieldAddCard/>
      </div>
    </Styled>
  )
}

export default BoardDetailListCard