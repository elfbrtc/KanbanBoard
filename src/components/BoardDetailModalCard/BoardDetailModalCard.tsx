import React, { FC } from 'react'
import { BoardDetailModalCardProps } from './BoardDetailModalCard.types'

const BoardDetailModalCard: FC<BoardDetailModalCardProps> = (props) => {
  return (
    <div className='pb-8 cursor-pointer' onClick={props.onCardClick}>
      <div className='flex flex-col  bg-white rounded-3xl border border-gray-200 shadow-md m-auto w-64 h-max'>
        <div className='flex justify-between p-4 pb-4'>
          <p className='font-medium'>{props.title}</p>
        </div>
        <hr className='border-t-1 border-gray-300 w-full'></hr>

        <div className='flex px-2 py-4 justify-between '>
          <span className="material-symbols-outlined">
            visibility
          </span>
          <span className="material-symbols-outlined">attachment</span>

        </div>
      </div>
    </div>



  )
}


export default BoardDetailModalCard