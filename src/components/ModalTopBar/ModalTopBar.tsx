import React, { FC, useState, useEffect } from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { ModalCardType, ModalTopBarProps } from './ModalTopBar.types'
import TextFieldAddCard from '../TextFieldAddCard';
import ModalPopover from '../ModalPopover';
import ModalLabelCheckbox from '../ModalLabelCheckbox';
import { useBoardDetailContext } from '../../contexts/BoardDetailContext/BoardDetailContext';
import { boardDetail } from '../../services/http/scrumboard/endpoints/boardDetail';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ModalTopBar: FC<ModalTopBarProps> = (props) => {

  const boardDetailContext = useBoardDetailContext();

  const [card, setCard] = useState<ModalCardType>(props.card)

  //Checklist
  const [isClicked, setIsClicked] = useState(false)
  const [checklistValue, setChecklistValue] = useState("");
  //Checklist Popover
  const [checkListanchorEl, setCheckListAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleCheckListClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCheckListAnchorEl(event.currentTarget);
  };
  const handleCheckListClose = () => {
    setCheckListAnchorEl(null);
  };
  const checkListOpen = Boolean(checkListanchorEl);
  const checkListId = checkListOpen ? 'simple-popover' : undefined;

  //Duedate Popover
  const [dueDateValue, setDueDateValue] = useState<string>("");

  const [dueDateAnchorEl, setDueDateAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleDueDateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDueDateAnchorEl(event.currentTarget);
  };
  
  const dueDateOpen = Boolean(dueDateAnchorEl);
  const dueDateId = dueDateOpen ? 'simple-popover' : undefined;

  //Label Popover
  const [labelListanchorEl, setLabelListAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleLabelListClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLabelListAnchorEl(event.currentTarget);
  };
  const handleLabelListClose = () => {
    const list = boardDetailContext.state.singleList.find((list: any) => list.cards.find((cList: any) => cList.id === card!!.id))
    const newCard = list?.cards.find((cList: any) => cList.id === card!!.id)
    setCard({ ...newCard })
    setLabelListAnchorEl(null);
    props.onChangeItem?.()
  };

  const labelListOpen = Boolean(labelListanchorEl);
  const labelListId = labelListOpen ? 'simple-popover' : undefined;

  const handleSetClicked = () => {
    setIsClicked(!isClicked)
  }

  const handleClearClick = () => {
    if (checklistValue) {
      setChecklistValue("");
    }
    else {
      setIsClicked(false);
      handleCheckListClose()
    }
  };

  const handleAddChecklist = () => {
    
    boardDetail.createCardCheckList({ cardId: card.id, title: checklistValue }).then((data: any) => {
      boardDetail.getByIdBoardList({ boardListId: card.listId }).then((data: any) => {
        boardDetailContext.dispatches.updateBoardList(data.data)
      })
    })
    setChecklistValue("")
    handleSetClicked()
    handleCheckListClose()
  }

  const handleAddDueDate = () => {
    if(dueDateValue.length !== 0){
      if(dayjs(dueDateValue).isValid()){
        boardDetail.updateDueDate({duedate: dueDateValue, boardId: card.id}).then((data: any) => {
          boardDetail.getByIdBoardList({ boardListId: card.listId }).then((data: any) => {
            boardDetailContext.dispatches.updateBoardList(data.data)
          })
        })
      }
    }
    handleDueDateClose()
  }

  const handleDueDateClose = () => {
    const list = boardDetailContext.state.singleList.find((list: any) => list.cards.find((cList: any) => cList.id === card!!.id))
    const newCard = list?.cards.find((cList: any) => cList.id === card!!.id)
    setCard({ ...newCard })
    setDueDateAnchorEl(null);
    props.onChangeItem?.()
  };

  useEffect(() => {

  }, [])

  return (
    <div className="flex justify-between items-center p-4 bg-nav-bar-color border-gray-20 rounded relative inset-0 w-auto">

      <div className="flex space-x-4">
        <div>
          <span aria-describedby={dueDateId} onClick={handleDueDateClick} className="material-symbols-outlined text-white font-medium cursor-pointer">today</span>
          <ModalPopover
            id={dueDateId}
            open={dueDateOpen}
            anchorEl={dueDateAnchorEl}
            onClose={handleDueDateClose}
            child={
              <div className='flex flex-col'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={dueDateValue}
                    onChange={(newValue) => {
                      const abc = dayjs(newValue)
                      console.log(abc.format('YYYY-MM-DD'))
                      setDueDateValue(abc.format('YYYY-MM-DD'));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold rounded-full w-max py-2 px-2 mt-3" onClick={handleAddDueDate}>
                  Add Duedate
                </button>
              </div>

            } />
        </div>

        <div>
          <span aria-describedby={labelListId} onClick={handleLabelListClick} className="material-symbols-outlined text-white font-medium cursor-pointer">label</span>
          <ModalPopover
            id={labelListId}
            open={labelListOpen}
            anchorEl={labelListanchorEl}
            onClose={handleLabelListClose}
            child={boardDetailContext.state.labels.map((label: any, key: any) => (
              <ModalLabelCheckbox card={card} key={key} label={label} />
            ))} />
        </div>
        <span className="material-symbols-outlined text-white font-medium cursor-pointer" onClick={() => {

        }}>account_circle</span>
        <span className="material-symbols-outlined text-white font-medium cursor-pointer" onClick={() => {

        }}>attachment</span>
        <div>
          <span aria-describedby={checkListId} onClick={handleCheckListClick} className="material-symbols-outlined text-white font-medium cursor-pointer">check_box</span>
          <ModalPopover
            id={checkListId}
            open={checkListOpen}
            anchorEl={checkListanchorEl}
            onClose={handleCheckListClose}
            child={
              <TextFieldAddCard
                title={"Checklist title*"}
                value={checklistValue}
                handleChange={(e) => {
                  setChecklistValue(e.target.value)
                }}
                onClear={handleClearClick}
                onClick={handleAddChecklist} />
            } />
        </div>
        <span className="material-symbols-outlined text-white font-medium cursor-pointer">more_horiz</span>
      </div>
      <div>
        <span className="material-symbols-outlined text-white font-medium cursor-pointer" onClick={props.onCloseClick}>close</span>
      </div>

    </div>



  )
}


export default ModalTopBar