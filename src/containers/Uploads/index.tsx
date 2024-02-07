import React, { useState, useEffect } from 'react'
import { AppBar, IconButton, ImageList, ImageListItem, Paper, Toolbar, Typography } from '@mui/material'
import { collection, onSnapshot } from 'firebase/firestore'
import { ArrowBackRounded as ArrowBackRoundedIcon } from '@mui/icons-material'

import { firestore, listAllImages } from '../../utils/firebase'
import UploadButton from '../../components/Uploads/UploadButton'

import Root, { classes } from './styles'
import { useNavigate } from 'react-router-dom'

const Uploads: React.FC = () => {
  const navigate = useNavigate()
  const [ images, setImages ] = useState<string[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = await listAllImages()
      setImages(imageUrls)
    }

    const unsubscribe = onSnapshot(collection(firestore, 'images'), (snapshot) => {
      const newImages: string[] = snapshot.docs.map((doc) => doc.data().url)
      setImages(newImages)
    })

    fetchImages()

    return () => unsubscribe()
  }, [])

  const _handleClickGoHome = () => {
    navigate('/home')
  }

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            aria-label='menu'
            color='inherit'
            edge='start'
            onClick={_handleClickGoHome}
            size='large'
            sx={{ mr: 2 }}>
            <ArrowBackRoundedIcon />
          </IconButton>
          <Typography component='div' sx={{ flexGrow: 1 }} variant='h6'>
            Uploads
          </Typography>
        </Toolbar>
      </AppBar>
      <Root>
        <UploadButton />
        <ImageList
          cols={6}
          gap={16}
          rowHeight={164}
          sx={{ pb: 1 }}>
          {
            images.map((imageUrl, index) => (
              <ImageListItem component={Paper} key={index}>
                <img
                  alt={`upload-${index}`}
                  className={classes.imageCard}
                  loading='lazy'
                  src={imageUrl} />
              </ImageListItem>
            ))
          }
        </ImageList>
      </Root>
    </>
  )
}

export default Uploads
