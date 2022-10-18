import {
    Children,
    createContext,
    FC,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react'
import { boards } from '../../services/http/scrumboard/endpoints/boards'
import { BoardsType, ContextType } from './types'
import instance from '../../services/http/scrumboard/instance'

export const initialState: BoardsType = {
    boards: [],

}

export const BoardsContext = createContext<ContextType>({
    dispatches: {},
    state: initialState,
})

export const BoardsProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, setState] = useState<BoardsType>(initialState)
    const dispatches: ContextType['dispatches'] = {}
    useEffect(() => {
      console.log("boards")
        boards.getListBoard().then(({ data }) => {
            setState((prev) => ({ ...prev, boards: data }))
        })
    }, [])

    dispatches.updateBoardTitle = (id:number,title:string)=>{
      setState(prev=>({
          ...prev,
          boards: prev.boards.map(tit=>({
              ...tit,
              title : (id===tit.id) ? title : tit.title
          }))
      }))
    }
    return (
        <BoardsContext.Provider
          value={{
            state,
            dispatches,
          }}
        >
          {children}
        </BoardsContext.Provider>
      )
}

export const useBoardsContext = ()=>{
    return useContext(BoardsContext)
}