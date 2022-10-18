import {
  Children,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { boardDetail } from '../../services/http/scrumboard/endpoints/boardDetail'
import { BoardDetailType, ContextType, CreateBoardListType } from './types'

export const initialState: BoardDetailType = {
  singleList: [],
}

export const BoardDetailContext = createContext<ContextType>({
  dispatches: {},
  state: initialState,
})

export const BoardDetailProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<BoardDetailType>(initialState)
  const dispatches: ContextType['dispatches'] = {}
  useEffect(() => {
    
  }, [])

  dispatches.getBoardList = (boardList: any) => {
    setState((prev) => ({ ...prev, singleList: boardList }))
  }

  dispatches.createBoardList = (boardList: any) => {
    setState((prev) => ({ ...prev, singleList: boardList }))
  }
  
  dispatches.createListCard = (listId: any, listCard: any) => {
    let allListData = state.singleList
    let dataIndex = allListData.findIndex((item) => 
        item.id === listId
    )
    allListData[dataIndex] = listCard
    setState((prev) => ({ ...prev, singleList: allListData }))
  }

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

export const useBoardDetailContext = () => {
  return useContext(BoardDetailContext)
}