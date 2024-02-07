import { styled } from '@mui/material'

const PREFIX = 'Listimages'

export const classes = {
  image: `${PREFIX}-image`
}

export default styled('div', {
  name: PREFIX
})(() => ({
  [`& .${classes.image}`]: {
    '&:hover': {
      cursor: 'pointer'
    },
    borderRadius: 24
  }
}))
