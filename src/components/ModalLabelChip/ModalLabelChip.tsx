import React, { FC, useState, useEffect } from 'react'
import { ModalLabelChipProps } from './ModalLabelChip.types'
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { ModalCardType } from '../ModalTopBar/ModalTopBar.types';
import { boardDetail } from '../../services/http/scrumboard/endpoints/boardDetail';
import { useBoardDetailContext } from '../../contexts/BoardDetailContext/BoardDetailContext';

interface ChipData {
  key: number;
  label: string;
  color: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ModalLabelChip: FC<ModalLabelChipProps> = (props) => {

  const boardDetailContext = useBoardDetailContext()

  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
  ]);
  const [card, setCard] = useState<ModalCardType>(props.card)

  useEffect(() => {
    const chipList : ChipData[] = []
    card.labels.map((label: any) => {
      chipList.push({
        "key": label.CardLabel.id,
        "label": label.title,
        "color": label.color
      })
    })
    setChipData(chipList)
  }, [])

  const handleDelete = (chipToDelete: ChipData) => () => {
    boardDetail.removeCardLabel(chipToDelete.key).then((labelResponse: any) => {
      boardDetail.getByIdBoardList({boardListId: card.listId}).then((data: any) => {
        boardDetailContext.dispatches.updateBoardList(data.data)
      })
    })
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    props.onRemoveItem?.()
  };
  
  return (
    <div className='p-4'>
      <div className='flex'>
      <span className='material-symbols-outlined mr-2'>label</span>
      <p className='font-bold'>Labels</p>
      </div>
      <div className = 'mt-3'>
      <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              color= {data.color === 'red' ? "error" : undefined}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
      </Paper>
      </div>
    </div>
  )
}
export default ModalLabelChip