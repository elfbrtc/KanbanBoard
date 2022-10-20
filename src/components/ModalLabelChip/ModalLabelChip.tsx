import React, { FC, useState } from 'react'
import { ModalLabelChipProps } from './ModalLabelChip.types'
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ModalLabelChip: FC<ModalLabelChipProps> = (props) => {

  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  

  return (
    <div className='p-4'>
      <div className='flex'>
      <span className='material-symbols-outlined mr-2'>label</span>
      <p className='font-bold'>Labels</p>
      </div>
      <div>
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