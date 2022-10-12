import { Styled } from './BoardNavbar.styled'
import React, { FC, useState } from 'react'
import { BoardNavbarProps } from './BoardNavbar.types'
import EditableTextInput from '../EditableTextInput'
import { Link, useNavigate } from 'react-router-dom'

const BoardNavbar: FC<BoardNavbarProps> = (props) => {
const navigate = useNavigate();

  const [fullName, setFullName] = useState("Joe Abraham");
  const [showInputEle, setShowInputEle] = useState(false);
  return (
    <Styled>
      <nav className="bg-white border-gray-200 py-5 px-20 rounded flex justify-between">
          
            <div className="navbar__left text-black cursor-pointer" onClick={()=>{navigate(-1)}}>
          <div>
          <span className="material-symbols-outlined">analytics</span>
          </div>
          <div>
            Boards
          </div> 
          </div>
       
        <div className="navbar__center flex items-center cursor-pointer">
          <EditableTextInput
            value={fullName}
            handleChange={(e) => setFullName(e.target.value)}
            handleDoubleClick={() => setShowInputEle(true)}
            handleBlur={() => setShowInputEle(false)}
            showInputEle={showInputEle} />

        </div>
        <div className="navbar__right cursor-pointer">
          <span className="material-symbols-outlined text-white">settings</span>
        </div>
      </nav>
    </Styled>

  )
}
export default BoardNavbar