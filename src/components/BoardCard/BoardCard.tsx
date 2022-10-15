import React , {FC} from 'react'
import { BoardCardProps } from './BoardCard.types'

const BoardCard: FC<BoardCardProps> = (props) => {
  return (
      <div className='flex flex-col items-center justify-center mr-6 rounded-3xl bg-white w-32 h-32 cursor-pointer'  onClick={props.onClick}>
      <div className="flex flex-col items-center justify-center ">
      {props.icon ? (
        <div className="icon rounded-3xl bg-purple-300 w-10 h-10 flex justify-center items-center" >
          <span className="material-symbols-outlined">{props.icon}</span>
        </div>
      ) : null}
      {}
        <div className="text-sm m-2 text-center">
          <span className="">{props.text}</span>
        </div>
        </div>
        </div>
    
  )
}

export default BoardCard