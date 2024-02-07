import { styled } from '@mui/material'

const PREFIX = 'Login'

export const classes = {
  contentFormAccount: `${PREFIX}-contentFormAccount`,
  contentIcons      : `${PREFIX}-contentIcons`,
  contentImage      : `${PREFIX}-contentImage`,
  formAccount       : `${PREFIX}-formAccount`,
  formAccountActions: `${PREFIX}-formAccountActions`,
  formAccountInputs : `${PREFIX}-formAccountInputs`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { spacing } }) => ({
  display                             : 'flex',
  height                              : '100vh',
  [`& .${classes.contentFormAccount}`]: {
    display       : 'flex',
    justifyContent: 'center',
    minWidth      : '60%',
    padding       : spacing(4, 6),
    textAlign     : 'center'
  },
  [`& .${classes.formAccount}`]: {
    display       : 'flex',
    flexDirection : 'column',
    gap           : spacing(3),
    justifyContent: 'center',
    minWidth      : 500,
    textAlign     : 'center'
  },
  [`& .${classes.formAccountActions}`]: {
    '& > button': {
      padding: spacing(1.5, 1)
    },
    display: 'flex',
    gap    : spacing(2)
  },
  [`& .${classes.formAccountInputs}`]: {
    gap: spacing(2)
  },
  [`& .${classes.contentIcons}`]: {
    '& img': {
      height: 18,
      width : 18
    },
    display       : 'flex',
    gap           : spacing(1.5),
    justifyContent: 'center'
  },
  [`& .${classes.contentImage}`]: {
    '& img': {
      height: '100%',
      width : '100%'
    },
    flex: 1
  }
}))
