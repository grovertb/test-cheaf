import { TextField, styled } from '@mui/material'

const PREFIX = 'InputSearch'

export default styled(TextField, {
  name: PREFIX
})({
  '& > div': {
    borderRadius: 24
  },
  '& button': {
    '& > .MuiSvgIcon-root': {
      color: 'white'
    },
    backgroundColor: 'black'
  },
  '& fieldset': {
    border: 'none'
  },
  border      : '2px solid',
  borderRadius: 24,
  boxShadow   : '-8px 7px 20px 0px rgba(0,0,0,0.15)'
})
