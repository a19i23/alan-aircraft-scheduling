import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
