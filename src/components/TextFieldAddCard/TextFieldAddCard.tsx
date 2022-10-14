import { Styled } from './TextFieldAddCard.styled'
import React , {FC, useState} from 'react'
import { TextFieldAddCardProps } from './TextFieldAddCardProps.types'
import TextField from "@mui/material/TextField";
import { IconButton } from '@mui/material';
import ClearIcon from "@mui/icons-material/Clear"

const TextFieldAddCard: FC<TextFieldAddCardProps> = (props) => {


  return (
    <Styled>
        <TextField id="outlined-basic" label={`${props.title}`} variant="outlined"
          onChange={
           props.handleChange
          }
          value={props.value}
          InputProps={{
            endAdornment: (
              <IconButton 
                sx={{ visibility:"visible"}}
                onClick={props.onClear}
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
        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold rounded-full mb-4 ml-4 w-16 py-2 px-4" onClick={props.onClick}>
          Add
        </button>
    </Styled>
    
  )
}

export default TextFieldAddCard