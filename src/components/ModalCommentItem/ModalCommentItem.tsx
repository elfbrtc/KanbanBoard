import React, { FC, useEffect, useState } from 'react'
import { ModalCommentItemProps } from './ModalCommentItem.types'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { ModalCardType } from '../ModalTopBar/ModalTopBar.types';


const ModalCommentItem: FC<ModalCommentItemProps> = (props) => {

  const [card, setCard] = useState<ModalCardType>(props.card)

  useEffect(() => {
    
  }, [])

  return (
    <div className='p-4'>
    <div className='flex'>
      <span className='material-symbols-outlined mr-2'>list</span>
      <p className='font-bold'>Activity</p>
    </div>
    {
      card.comments.map((_card: any, key : any) => (
        <div className='flex mt-3 items-center' key = {key}>
        <Avatar className='mr-2' alt="Elif Barutcu" src="https://productimages.hepsiburada.net/s/108/1500/110000051496084.jpg" />
        <div className='h-auto w-auto border border-slate-300 p-4 rounded-l-lg rounded-r-2xl '>
          <div className='flex items-center'>
          <p className='text-s mr-3'>{_card.author.username}</p>
          <p className='text-xs text-slate-500'>less than a minute ago</p>
          </div>
          <p className='text-s'>{_card.message}</p>
  
        </div>
      </div>
      ))
    }
   
  </div>
  )
}
export default ModalCommentItem