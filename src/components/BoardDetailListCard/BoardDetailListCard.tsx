import { Styled } from './BoardDetailListCard.styled'
import React , {FC} from 'react'
import { BoardDetailListCardProps } from './BoardDetailListCard.types'

const BoardCard: FC<BoardDetailListCardProps> = (props) => {
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