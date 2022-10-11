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
import { BoardDetailType, ContextType } from './types'

export const initialState: BoardDetailType = {
    boards: [],

}

export const BoardDetailContext = createContext<ContextType>({
    dispatches: {},
    state: initialState,
})

export const BoardsProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<BoardDetailType>(initialState)
    const dispatches: ContextType['dispatches'] = {}
    useEffect(() => {
        console.log("sdfdsfdsf")
        boards.getListBoard().then(({ data }) => {
            setState((prev) => ({ ...prev, boards: data }))
        })
    }, [])
    return (
        <BoardDetailContext.Provider
          value={{
            state,
            dispatches,
          }}
        >
          {children}
        </BoardDetailContext.Provider>
      )
}

export const useBoardsContext = ()=>{
    return useContext(BoardDetailContext)
}