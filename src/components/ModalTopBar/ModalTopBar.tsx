import React, { FC, useState, useEffect } from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { ModalCardType, ModalTopBarProps } from './ModalTopBar.types'
import TextFieldAddCard from '../TextFieldAddCard';
import ModalPopover from '../ModalPopover';
import ModalLabelCheckbox from '../ModalLabelCheckbox';
import { useBoardDetailContext } from '../../contexts/BoardDetailContext/BoardDetailContext';
import { boardDetail } from '../../services/http/scrumboard/endpoints/boardDetail';

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

  //Label Popover
  const [labelListanchorEl, setLabelListAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleLabelListClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLabelListAnchorEl(event.currentTarget);
  };
  const handleLabelListClose = () => {
    setLabelListAnchorEl(null);
  };
  const labelListOpen = Boolean(labelListanchorEl);
  const labelListId = checkListOpen ? 'simple-popover' : undefined;

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
    console.log(card.id)
    boardDetail.createCardCheckList({cardId : card.id, title: checklistValue}).then((data: any) => {
      boardDetail.getByIdBoardList({boardListId: card.listId}).then((data: any) => {
        boardDetailContext.dispatches.updateBoardList(data.data)
      })
    })
    setChecklistValue("")
    handleSetClicked()
    handleCheckListClose()
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className="flex justify-between items-center p-4 bg-nav-bar-color border-gray-20 rounded relative inset-0 w-auto">

      <div className="flex space-x-4">
        <span className="material-symbols-outlined text-white font-medium cursor-pointer" onClick={() => {

        }}>today</span>
        <div>
          <span aria-describedby={labelListId} onClick={handleLabelListClick} className="material-symbols-outlined text-white font-medium cursor-pointer">label</span>
          <ModalPopover
            id={labelListId}
            open={labelListOpen}
            anchorEl={labelListanchorEl}
            onClose={handleLabelListClose}
            child= {boardDetailContext.state.labels.map((label: any, key: any) => (
              <ModalLabelCheckbox key = {key} labelTitle={label.title}/>
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