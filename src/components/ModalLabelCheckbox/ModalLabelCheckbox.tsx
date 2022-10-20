import React, { FC, useState, useEffect } from 'react'
import { CardLabelType, ModalLabelCheckboxProps } from './ModalLabelCheckbox.types'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useBoardDetailContext } from '../../contexts/BoardDetailContext/BoardDetailContext';
import { ModalCardType } from '../ModalTopBar/ModalTopBar.types';
import { boardDetail } from '../../services/http/scrumboard/endpoints/boardDetail';


const ModalLabelCheckbox: FC<ModalLabelCheckboxProps> = (props) => {

  const boardDetailContext = useBoardDetailContext()

  const [card, setCard] = useState<ModalCardType>(props.card)
  const [label, setLabel] = useState<CardLabelType>(props.label)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    console.log(label)
    const isThere = card.labels.find((_label: any) => _label.id == label.id)
    if(isThere){
      setIsChecked(true)
    }
      
  }, [])

  const getSelectedLabelId = () => {
    const selectedLabel = card.labels.find((_label: any) => _label.id == label.id) 
    return selectedLabel.CardLabel.id
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(isChecked){
      boardDetail.removeCardLabel(getSelectedLabelId()).then((labelResponse: any) => {
        boardDetail.getByIdBoardList({boardListId: card.listId}).then((data: any) => {
          boardDetailContext.dispatches.updateBoardList(data.data)
        })
      })
    }
    else{
      boardDetail.createCardLabel({cardId: card.id, labelId: label.id}).then((labelResponse: any) => {
        boardDetail.getByIdBoardList({boardListId: card.listId}).then((data: any) => {
          boardDetailContext.dispatches.updateBoardList(data.data)
        })
      })
    }
    setIsChecked(event.target.checked);
  };

  return (
    <div className='p-2'>
      <FormGroup>
        <div className='flex items-center'>
          <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleChange} />} label={label.title} />
        <span className="material-symbols-outlined">label</span></div>
        
      </FormGroup>
    </div>
  )
}
export default ModalLabelCheckbox