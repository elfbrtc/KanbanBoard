import React, { FC, useEffect, useState } from 'react'
import { Styled } from './Input.styled'
import { InputProps } from './Input.types'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Input: FC<InputProps> = (props) => {
  const [isSecret, setIsSecret] = useState<boolean>(props.type === 'password')
  const [value, setValue] = useState<string>(
    props.defaultValue || props.value || ''
  )

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value)
    }
  }, [props.value])

  const calculateType = () => {
    if (props.type === 'text') return 'text'
    if (props.type === 'password' && isSecret) return 'password'
    if (props.type === 'password' && !isSecret) return 'text'
    return props.type
  }

  const handleClickEye = () => {
    setIsSecret((prev) => !prev)
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const v = e.target.value
    setValue(v)
    props.onChange?.(e, v)
  }

  return (
    <div className=''>
      <Styled style={props.style}>
      {props.icon ? (
        <div className="icon">
          <span className="material-symbols-outlined">{props.icon}</span>
        </div>
      ) : null}
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label={props.placeholder} variant="outlined" 
        name={props.name}
        onChange={handleChange}
        type={calculateType()}
        value={value}
        /> */}
        
        <TextField
          required
          id="standard-required"
          name={props.name}
          defaultValue="Hello World"
          variant="standard"
          onChange={handleChange}
          type={calculateType()}
          value={value}
          label={props.placeholder}
        />
    </Box>
      {props.type === 'password' ? (
        <button onClick={handleClickEye} className="eye">
          <span className="material-symbols-outlined">
            {isSecret ? 'visibility' : 'visibility_off'}
          </span>
        </button>
      ) : null}
    </Styled>
    </div>
    
  )
}

export default Input