import React, { FC, useState, useEffect } from 'react'
import { ModalCheckListProps, SingleChecklistItemType, SingleChecklistType } from './ModalCheckList.types'
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { isNonNullExpression } from 'typescript';
import { boardDetail } from '../../services/http/scrumboard/endpoints/boardDetail';
import { useBoardDetailContext } from '../../contexts/BoardDetailContext/BoardDetailContext';
import ModalPopover from '../ModalPopover';


const ModalCheckList: FC<ModalCheckListProps> = (props) => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const boardDetailContext = useBoardDetailContext()

  const [checklist, setChecklist] = useState<SingleChecklistType>(props.checklist)
  const [checklistItemValue, setChecklistItemValue] = useState("")
  const [ lastUpdate, setLastUpdate ] = useState(0);

  const [labelListanchorEl, setLabelListAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleLabelListClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLabelListAnchorEl(event.currentTarget);
  };
  const handleLabelListClose = () => {
    setLabelListAnchorEl(null);
  };
  const labelListOpen = Boolean(labelListanchorEl);
  const labelListId = labelListOpen ? 'simple-popover' : undefined;


  useEffect(() => {
    
  }, [])

  const handleNewChecklistItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecklistItemValue(event.target.value);
  }

  const getCheckedCount = () => {
    const checkedList = checklist.items.filter((singleChecklist) => singleChecklist.isChecked)
    return checkedList.length.toString()
  }

  const handleCreateChecklistItem = async () => {
    if(checklistItemValue){
      const list = boardDetailContext.state.singleList.find((list: any) => list.cards.find((sList: any) => sList.id === checklist.cardId))
      boardDetail.createCardCheckListItem({ checklistId: checklist.id, title: checklistItemValue, isChecked: false }).then((data) => {
        boardDetail.getByIdBoardList({ boardListId: list!!.id }).then((list: any) => {
          boardDetailContext.dispatches.updateBoardList(list.data)
          setChecklistItemValue("")
          props.onAddChecklistItem?.()
        })
      })
    }
  
    
  }

  const handleRemoveChecklistItem = (item: SingleChecklistItemType) => {
    const list = boardDetailContext.state.singleList.find((list: any) => list.cards.find((sList: any) => sList.id === checklist.cardId))
    boardDetail.removeCardChecklistItem(item.id).then((data) => {
      boardDetail.getByIdBoardList({ boardListId: list!!.id }).then((list: any) => {
        boardDetailContext.dispatches.updateBoardList(list.data)
      })
    })
    props.onAddChecklistItem?.()
  }

  const getProgressValue = () => {
    const checkedList = checklist.items.filter((singleChecklist) => singleChecklist.isChecked)
    if(checkedList.length === 0 && checklist.items.length === 0){
      return "0%"
    }
    const progressValue = ((checkedList.length / checklist.items.length)*100)
    return progressValue + "%"
  }

  const updateCardChecklistItem = () => {

  }

  const handleChangeChecked = (item: any) => {
    const list = boardDetailContext.state.singleList.find((list: any) => list.cards.find((sList: any) => sList.id === checklist.cardId))
    boardDetail.updateCardChecklistItem({checklistItemId: item.id, isChecked: !item.isChecked}).then((data) => {
      boardDetail.getByIdBoardList({ boardListId: list!!.id }).then((list: any) => {
        boardDetailContext.dispatches.updateBoardList(list.data)
      })
    })
    props.onAddChecklistItem?.()
  };

  const handleRemoveChecklist = ()=>{
    const list = boardDetailContext.state.singleList.find((list: any) => list.cards.find((sList: any) => sList.id === checklist.cardId))
    boardDetail.removeCardChecklist(checklist.id).then((data: any)=>{
      boardDetail.getByIdBoardList({ boardListId: list!!.id }).then((list: any) => {
        boardDetailContext.dispatches.updateBoardList(list.data)
      })
    })
    handleLabelListClose()
    props.onAddChecklistItem?.()
  }

  const handleRenameChecklist = ()=>{

  }

  return (
    <>
      <div className='flex justify-between items-center p-2' >
        <div className='flex items-center'>
          <Checkbox {...label} disabled checked color="default" />
          <p className=''>{checklist.title}</p>
        </div>
        <div>
          <span aria-describedby={labelListId} onClick={handleLabelListClick} className="material-symbols-outlined">more_vert</span>
          <ModalPopover
           id={labelListId}
           open={labelListOpen}
           anchorEl={labelListanchorEl}
           onClose={handleLabelListClose}
           child={
           <div>
            <div className='flex p-2 cursor-pointer' onClick={handleRemoveChecklist}>
              <span className="material-symbols-outlined mr-2">delete</span>
              <p>Remove Checklist</p>
            </div>
            
            <div className='flex p-2 cursor-pointer'onClick={handleRenameChecklist}>
            <span className="material-symbols-outlined mr-2">edit</span>
            <p>Rename Checklist</p>
            </div>
           </div>
           }
          />
        </div>

      </div>
      <div className='px-4 flex items-center'>
        <p className='pr-2'>{getCheckedCount()}/{checklist.items.length}</p>
        <div className="w-full bg-gray-200 h-1">
          <div className="bg-blue-600 h-1" style={{ "width": getProgressValue()}}></div>
        </div>
      </div>
      {
        checklist.items.length > 0 ? (
          checklist.items.map((item: any, key: any) => {
            return <div key={key} className='flex items-center p-2 '>
              <Checkbox
                onChange={() => {
                  handleChangeChecked(item)
                }}
                checked={item.isChecked}
                value={item.title} />
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '65ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-size-medium"
                  value={item.title}
                  variant="outlined"
                  size="medium"
                />
              </Box>
              <span onClick={() => {
                  handleRemoveChecklistItem(item)
              }} className="material-symbols-outlined cursor-pointer text-gray-500 font-">delete</span>
            </div>
          })
        ) : null
      }
      <div className='flex items-center justify-center p-2 px-4 pl-10'>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '65ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={checklistItemValue}
            id="outlined-size-medium"
            label="Add an item"
            variant="outlined"
            size="medium"
            onChange={handleNewChecklistItem}
          />
        </Box>
        <span onClick={handleCreateChecklistItem} className="material-symbols-outlined rounded-full bg-gray-400 hover:bg-blue-600 cursor-pointer text-white w-8 h-8 flex items-center justify-center">add</span>
      </div>


    </>
  )
}
export default ModalCheckList