import { Styled } from './BoardDetailAddListCard.styled'
import React, { FC, useState } from 'react'
import { BoardDetailAddListCardProps } from './BoardDetailAddListCard.types'
import TextField from "@mui/material/TextField";
import { IconButton } from '@mui/material';
import ClearIcon from "@mui/icons-material/Clear"
import Card from '../Card';


const BoardDetailAddListCard: FC<BoardDetailAddListCardProps> = (props) => {
  const [value, setValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClearClick = () => {
    if(value){
      setValue("");
  }
  else{
    setIsClicked(false);}
  };

  const handleAddClick = () => {
    setIsClicked(true);
  };
  
  return (
    <Styled>
      {!isClicked?(
      <div className='flex max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 p-4' onClick={handleAddClick}>
      <span className="material-symbols-outlined rounded-full bg-red-600 text-white w-8 h-8 flex items-center justify-center ">add</span>
      <p className='flex items-center justify-center ml-4 font-semibold '>Add a list</p>
      </div>):(
      <div className=' flex flex-col max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 '>
        <TextField id="outlined-basic" label="List title*" variant="outlined"
          onChange={(newValue) => {
            setValue(newValue.target.value);
          }}
          value={value}
          InputProps={{
            endAdornment: (
              <IconButton 
                sx={{ visibility:"visible"}}
                onClick={handleClearClick}
              >
                <ClearIcon />
              </IconButton>
            ),
          }}
          sx={{
            m: 2,
            "& .Mui-focused .MuiIconButton-root": { color: "primary.main" },
          }}
        />
        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold rounded-full mb-4 ml-4 w-16 py-2 px-4">
          Add
        </button>
      </div>
)}
    </Styled>
  )
}
export default BoardDetailAddListCard