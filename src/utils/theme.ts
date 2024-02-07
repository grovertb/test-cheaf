import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export default createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight   : 600,
          textTransform: 'inherit',
          ...(ownerState.variant === 'contained' && {
            boxShadow: 'initial'
          })
        })
      }
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: 'squared' },
          style: {
            border      : '2px solid black',
            borderRadius: '40%'
          }
        },
        {
          props: { variant: 'bordered' },
          style: {
            border: '1px solid black'
          }
        }
      ]
    }
  },
  palette: {
    primary: red
  }
})

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: string;
  }
}
