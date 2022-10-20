import React, { FC, useState, useEffect } from 'react'
import { ModalCardType } from '../ModalTopBar/ModalTopBar.types'
import { BoardDetailModalCardProps } from './BoardDetailModalCard.types'
import dayjs from 'dayjs';

const BoardDetailModalCard: FC<BoardDetailModalCardProps> = (props) => {

  const [card, setCard] = useState<ModalCardType>(props.card)
  const [checklistSize, setChecklistSize] = useState(0)
  const [checkedSize, setCheckedSize] = useState(0)

  useEffect(() => {
    var checkedCount = 0
    var checklistCount = 0

    console.log("sdf")

    card.checklists.map((checklist: any) => {
      checklist.items.map((item: any) => {
        checklistCount++
      })
    })
    
    card.checklists.map((checklist: any) => {
      checklist.items.map((item: any) => {
        if(item.isChecked===true){
          checkedCount++
        }
      })
    })
    setChecklistSize(checklistCount) 
    setCheckedSize(checkedCount)
  }, [])

  return (
    <div className='pb-8 cursor-pointer' onClick={props.onCardClick}>
      <div className='flex flex-col  bg-white rounded-3xl border border-gray-200 shadow-md m-auto w-64 h-max'>
        <div className='flex justify-between p-4 pb-4'>
          <p className='font-medium'>{props.card.title}</p>
        </div>
        <div className='flex justify-evenly mb-2'>
          {
            props.card.duedate !== null ? (
              <div className='flex border items-center  bg-red-600 rounded-3xl px-2'>
                <span className="text-lg material-symbols-outlined  mr-1  text-white">schedule</span>
                <p className='text-white text-sm'>{dayjs(props.card.duedate).format('MMM D, YYYY')}</p>
              </div>
            ) : null
          }
          {
            props.card.checklists.length !== 0 ? (
              <div className='flex border items-center bg-stone-500 rounded-3xl px-2'>
                <span className="material-symbols-outlined  text-lg mr-1 text-white">check_circle</span>
                <p className='text-white text-sm'>{checkedSize}/{checklistSize}</p>
              </div>
            ) : null
          }


        </div>


        <hr className='border-t-1 border-gray-300 w-full'></hr>

        <div className='flex px-2 py-4 justify-between '>
          <div className=''>
            <span className="material-symbols-outlined text-xl mr-2">visibility</span>
            <span className="material-symbols-outlined text-xl">description</span>
          </div>
          <div className='flex'>
            <span className="material-symbols-outlined text-xl mr-2">attachment</span>
            <p className='mr-2'>0</p>
            <div className='flex'>
              <span className="material-symbols-outlined text-xl mr-2">comment</span>
              <p>{props.card.comments.length}</p>
            </div>

          </div>

        </div>
      </div>
    </div>



  )
}


export default BoardDetailModalCard