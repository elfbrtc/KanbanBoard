import { Styled } from './BoardNavbar.styled'
import React, { FC, useState } from 'react'
import { BoardNavbarProps } from './BoardNavbar.types'
import EditableTextInput from '../EditableTextInput'
import { Link, useNavigate } from 'react-router-dom'
import { useBoardsContext } from '../../contexts/BoardsContext/BoardsContext'
import { boards } from '../../services/http/scrumboard/endpoints/boards'

const BoardNavbar: FC<BoardNavbarProps> = (props) => {
const navigate = useNavigate();

  const [fullName, setFullName] = useState(props.board.title);
  const [showInputEle, setShowInputEle] = useState(false);
  const boardsContext= useBoardsContext()

  const handleUpdateBoardTitle=()=>{
    console.log("ogn");
    boards.updateBoard(props.board).then((data)=>{
      console.log(data);
    })
  }
  return (
    <Styled>
      <nav className="bg-white border-gray-200 py-5 px-20 rounded flex justify-between relative inset-0 w-screen md:fixed md:w-12/12">
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
              handleChange={(e) => {
              props.board.title=e.target.value;
              setFullName(e.target.value)   
          }}
            onUpdate={()=>{
              console.log("dsfdsf")
            }}
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