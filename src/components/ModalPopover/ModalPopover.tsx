import React, { FC, useState } from 'react'
import { ModalPopoverProps } from './ModalPopover.types'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const ModalPopover: FC<ModalPopoverProps> = (props) => {
  

  return (
    <Popover
      id={props.id}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
      <Typography 
      sx={{ p: 1 }}>
        {props.child}
      </Typography>
    </Popover>
  )
}
export default ModalPopover