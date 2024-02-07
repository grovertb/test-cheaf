import { Masonry } from '@mui/lab'
import { styled } from '@mui/material'

const PREFIX = 'Listimages'

export const classes = {
  image: `${PREFIX}-image`
}

export default styled(Masonry, {
  name: PREFIX
})(() => ({
  overflow                   : 'hidden',
  [`& .${classes.image} img`]: {
    borderRadius: 24,
    width       : '100%'
  }
}))
