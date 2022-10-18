import React, { FC, useState } from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { ModalTopBarProps } from './ModalTopBar.types'
import TextFieldAddCard from '../TextFieldAddCard';

const ModalTopBar: FC<ModalTopBarProps> = (props) => {
  

  //Checklist
  const [isClicked, setIsClicked] = useState(false)
  const [value, setValue] = useState("");

  const [checkListanchorEl, setCheckListAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleCheckListClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCheckListAnchorEl(event.currentTarget);
  };
  const handleCheckListClose = () => {
    setCheckListAnchorEl(null);
  };
  const open = Boolean(checkListanchorEl);
  const checkListId = open ? 'simple-popover' : undefined;
   

  const handleSetClicked = () => {
    setIsClicked(!isClicked)
  }

  const handleClearClick = () => {
    if (value) {
      setValue("");
    }
    else {
      handleCheckListClose()
      setIsClicked(false);
    }
  };

  const handleAddCard = () => {
    
    setValue("")
    handleSetClicked()
  
  }

  return (
    <div className="flex justify-between items-center p-4 bg-nav-bar-color border-gray-20 rounded relative inset-0 w-auto">

      <div className="flex space-x-4">
        <span className="material-symbols-outlined text-white font-medium cursor-pointer" onClick={() => {

        }}>today</span>
        <span className="material-symbols-outlined text-white font-medium cursor-pointer" onClick={() => {

        }}>label</span>
        <span className="material-symbols-outlined text-white font-medium cursor-pointer" onClick={() => {

        }}>account_circle</span>
        <span className="material-symbols-outlined text-white font-medium cursor-pointer" onClick={() => {

        }}>attachment</span>
        <div>
          <span aria-describedby={checkListId} onClick={handleCheckListClick} className="material-symbols-outlined text-white font-medium cursor-pointer">check_box</span>
          <Popover
            id={checkListId}
            open={open}
            anchorEl={checkListanchorEl}
            onClose={handleCheckListClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
            <Typography sx={{ p: 1 }}>
              <TextFieldAddCard 
              title={"Checklist title *"}
              value={value}
              handleChange={(e) => {
                setValue(e.target.value)
              }}
              onClear={handleClearClick}
              onClick={handleAddCard}/>
            </Typography>
          </Popover>
        </div>
        <span className="material-symbols-outlined text-white font-medium cursor-pointer">more_horiz</span>
      </div>
      <div>
        <span className="material-symbols-outlined text-white font-medium cursor-pointer" onClick={props.onCloseClick}>close</span>
      </div>

    </div>



  )
}


export default ModalTopBar