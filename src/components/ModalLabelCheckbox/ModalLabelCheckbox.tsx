import React, { FC, useState } from 'react'
import { ModalLabelCheckboxProps } from './ModalLabelCheckbox.types'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const ModalLabelCheckbox: FC<ModalLabelCheckboxProps> = (props) => {


  return (
    <div className='p-2'>
      <FormGroup>
        <div className='flex items-center'>
          <FormControlLabel control={<Checkbox  />} label={props.labelTitle} />
        <span className="material-symbols-outlined">label</span></div>
        
      </FormGroup>
    </div>
  )
}
export default ModalLabelCheckbox