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
        
        boards.getListBoard().then(({ data }) => {
            setState((prev) => ({ ...prev, boards: data }))
            console.log(state)
        })
    }, [])
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