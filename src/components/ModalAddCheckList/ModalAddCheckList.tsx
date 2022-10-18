import React, { FC, useState } from 'react'
import { ModalAddCheckListProps } from './ModalAddCheckList.types'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const ModalAddCheckList: FC<ModalAddCheckListProps> = () => {
  return (
  <div className='p-4 pl-4' >
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '75ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Title*" variant="outlined" />
    </Box>
  </div>
  )
}
export default ModalAddCheckList