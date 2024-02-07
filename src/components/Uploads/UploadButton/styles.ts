import { Fab, styled } from '@mui/material'

const PREFIX = 'UploadButton'

export const classes = {
  hidden: `${PREFIX}-hidden`
}

export default styled(Fab, {
  name: PREFIX
})({
  [`& .${classes.hidden}`]: {
    display: 'none'
  }
})
