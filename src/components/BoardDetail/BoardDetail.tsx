import { Styled } from './BoardDetail.styled'
import React , {FC} from 'react'
import { BoardDetailProps } from './BoardDetail.types'

const BoardDetail: FC<BoardDetailProps> = (props) => {
  return (
    <Styled>
      {props.icon ? (
        <div className="icon">
          <span className="material-symbols-outlined">{props.icon}</span>
        </div>
      ) : null}
      {}
        <div className="text">
          <span className="">{props.text}</span>
        </div>
    </Styled>
    
  )
}

export default BoardDetail