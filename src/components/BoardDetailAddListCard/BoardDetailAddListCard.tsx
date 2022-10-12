import { Styled } from './BoardDetailAddListCard.styled'
import React, { FC, useState } from 'react'
import { BoardDetailAddListCardProps } from './BoardDetailAddListCard.types'
import TextField from "@mui/material/TextField";
import { IconButton } from '@mui/material';
import ClearIcon from "@mui/icons-material/Clear"
import TextFieldAddCard from '../TextFieldAddCard';

const BoardDetailAddListCard: FC<BoardDetailAddListCardProps> = (props) => {

  const [value, setValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClearClick = () => {
    if (value) {
      setValue("");
    }
    else {
      setIsClicked(false);
    }
  };

  const handleAddClick = () => {
    setIsClicked(true);
  };

 const handleAddListCard=()=>{

 };
 
  return (
    <Styled>
      {!isClicked ? (
        <div className='flex max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 p-4' onClick={handleAddClick}>
          <span className="material-symbols-outlined rounded-full bg-red-600 text-white w-8 h-8 flex items-center justify-center ">add</span>
          <p className='flex items-center justify-center ml-4 font-semibold '>Add a list</p>
        </div>) : (
        <TextFieldAddCard
          value={value}
          title='List title*'
          onClick={handleAddListCard}
          onClear={handleClearClick}
          handleChange={(e) => {
            setValue(e.target.value)
          }}
        />
      )}
    </Styled>
  )
}
export default BoardDetailAddListCard