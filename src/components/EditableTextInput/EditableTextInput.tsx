import React, { FC } from "react";
import { EditableTextInputProps } from "./EditableTextInput.types";

// Create an ElementMaker component
const EditableTextInput: FC<EditableTextInputProps> = (props) => {

  return (
    <div className="edit__text__input cursor-pointer">
      {props.showInputEle ? (
        <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block flex  p-2.5">
          <input type="text" id="first_name" className=" outline-0 text-center font-semibold bg-gray-50 border-gray-300" placeholder="John" required
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            autoFocus
          />
          <div onClick={() => {
            console.log("asdasd")
          }}>
            <span className="material-symbols-outlined" >
              done
            </span>
          </div>
        </div>
      ) : (
        <label className="block text-m font-medium text-white cursor-pointer "
          onClick={props.handleDoubleClick}
        >
          {props.value}
        </label>
      )}
    </div>


  );
}

export default EditableTextInput;