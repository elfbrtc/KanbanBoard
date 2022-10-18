import React, { FC, useState } from 'react'
import { ModalDescriptionTextFieldProps } from './ModalDescriptionTextField.types'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const ModalDescriptionTextField: FC<ModalDescriptionTextFieldProps> = () => {
  return (
  <div className='p-4 pl-4' >
   <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {width: '75ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          
        />
        </div>
      
    </Box>
  </div>
  )
}
export default ModalDescriptionTextField