import { Styled } from './BoardCard.styled'
import React , {FC} from 'react'
import { BoardCardProps } from './BoardCard.types'

const BoardCard: FC<BoardCardProps> = (props) => {
  return (
    <Styled>
      <div className="board__card" onClick={props.onClick}>
      {props.icon ? (
        <div className="icon" >
          <span className="material-symbols-outlined">{props.icon}</span>
        </div>
      ) : null}
      {}
        <div className="text">
          <span className="">{props.text}</span>
        </div>
        </div>
    </Styled>
    
  )
}

export default BoardCard