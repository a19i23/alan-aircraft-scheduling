import { Card, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

export const StyledPaperColumn = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: 'lightblue',
  color: theme.palette.text.secondary,
  border: '3px solid grey',
  borderRadius: '15px',
  height: '60vh',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '18px',
  },
  '&::-webkit-scrollbar-track': {
    'margin-top': '5px',
    'margin-bottom': '5px',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    backgroundColor: 'grey',
    border: '3px solid lightblue',
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'default',
  },
}));

export const StyledCheckIcon = styled(CheckIcon)(({ theme }) => ({
  color: theme.palette.success.light,
  '&:hover': {
    color: theme.palette.success.light,
  },
}));

export const StyledAddIcon = styled(AddIcon)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.light,
  },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: '10px',
  margin: '8px 0px',
  borderRadius: '15px',
}));
