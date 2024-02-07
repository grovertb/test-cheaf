import { Dialog, styled } from '@mui/material'

const PREFIX = 'ImageFullScreen'

export const classes = {
  closeButton: `${PREFIX}-closeButton`,
  container  : `${PREFIX}-container`,
  image      : `${PREFIX}-image`
}

export default styled(Dialog, {
  name: PREFIX
})({
  [`& .${classes.image}`]: {
    maxHeight: '100%',
    maxWidth : '100%'
  },
  [`& .${classes.container}`]: {
    alignItems    : 'center',
    display       : 'flex',
    height        : '100%',
    justifyContent: 'center'
  },
  [`& .${classes.closeButton}`]: {
    position: 'absolute',
    right   : 10,
    top     : 10
  }
})
