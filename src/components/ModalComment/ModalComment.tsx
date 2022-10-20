import React, { FC, useState } from 'react'
import { ModalCommentProps } from './ModalComment.types'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useBoardDetailContext } from '../../contexts/BoardDetailContext/BoardDetailContext';
import { boardDetail } from '../../services/http/scrumboard/endpoints/boardDetail';
import { ModalCardType } from '../ModalTopBar/ModalTopBar.types';

const ModalComment: FC<ModalCommentProps> = (props) => {

  const [card, setCard] = useState<ModalCardType>(props.card)

  const [value, setValue] = useState("")
  const boardDetailContext = useBoardDetailContext()


  const handleCreateComment = () => {
    if (value) {
      const list = boardDetailContext.state.singleList.find((list: any) => list.cards.find((sList: any) => sList.id === card!!.id))
      boardDetail.createCardComment({ cardId: card!!.id, message: value }).then((cardResponse: any) => {
        boardDetail.getByIdBoardList({ boardListId: list!!.id }).then((list: any) => {
          boardDetailContext.dispatches.updateBoardList(list.data)
          setValue("")
          props.onAddComment?.()
        })
      })
    }
  }

  return (
    <div className='p-4'>
      <div className='flex'>
        <span className='material-symbols-outlined mr-2'>comment</span>
        <p className='font-bold'>Comment</p>
      </div>
      <div className='flex mt-3'>
        <Avatar className='mr-2' alt="Elif Barutcu" src="https://productimages.hepsiburada.net/s/108/1500/110000051496084.jpg" />
        <div className='w-full'>
          <Box
            sx={{
              width: '100%',
              maxWidth: '100%',
            }}
          >
            <TextField 
              value={value} 
              fullWidth 
              placeholder='Add Comment ' 
              id="fullWidth" 
              onChange={(e) => {
                setValue(e.target.value)
              }}
            />
          </Box>

          <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold rounded-full w-16 py-2 mt-3" onClick={handleCreateComment}>
            Save
          </button>
        </div>
      </div>
    </div>

  )
}
export default ModalComment