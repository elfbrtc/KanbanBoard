import React, { FC } from "react";
import { EditableTextInputProps } from "./EditableTextInput.types";

// Create an ElementMaker component
const EditableTextInput:FC<EditableTextInputProps> = (props)=> {
  
  return (
    <div className="edit__text__input cursor-pointer">
      {
        // Use JavaScript's ternary operator to specify <span>'s inner content
        props.showInputEle ? (
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 " placeholder="John" required
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            autoFocus
            />

        ) : (
        
          <label className="block text-m font-medium text-white cursor-pointer "
          onClick={props.handleDoubleClick}
      >
        {props.value}
          </label>
        )
      }
    </div>
  );
}

export default EditableTextInput;