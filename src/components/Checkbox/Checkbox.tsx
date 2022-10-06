import React, { useState, FC } from 'react'
import { Styled } from './Checkbox.styled'
import { CheckboxProps } from './Checkbox.types'

const Checkbox: FC<CheckboxProps> = (props) => {
  const [value, setValue] = useState<boolean>(
    props.defaultValue || props.value || false
  )

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const v = e.target.checked
    setValue(v)
    props.onChange?.(e, v)
  }

  return (
    <Styled onClick={() => setValue((prev) => !prev)}>
      <input onChange={handleChange} type="checkbox" checked={value} />
      <div>
        <div className="checkbox-container">
          {value ? (
            <span className="material-symbols-outlined check-icon">check</span>
          ) : null}
        </div>
      </div>
      {props.label ? <span className="label">{props.label}</span> : null}
    </Styled>
  )
}

export default Checkbox
