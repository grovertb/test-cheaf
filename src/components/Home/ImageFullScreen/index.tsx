import { FC } from 'react'
import { CloseRounded as CloseRoundedIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import Root, { classes } from './styles'

interface ImageFullScreenProps {
  open: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageFullScreen: FC<ImageFullScreenProps> = ({ open, onClose, imageUrl }) => (
  <Root
    fullScreen
    onClose={onClose}
    open={open}>
    <div className={classes.container}>
      <img alt='imagen' className={classes.image} src={imageUrl} />
      <IconButton className={classes.closeButton} onClick={onClose} variant='bordered'>
        <CloseRoundedIcon />
      </IconButton>
    </div>
  </Root>
)

export default ImageFullScreen
