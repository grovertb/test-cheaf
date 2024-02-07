import { Container, styled } from '@mui/material'

const PREFIX = 'Uploads'

export const classes = {
  imageCard: `${PREFIX}-imageCard`
}

export default styled(Container, {
  name: PREFIX
})(() => ({
  [`& .${classes.imageCard}`]: {
    height   : '100%',
    objectFit: 'contain'
  }
}))
