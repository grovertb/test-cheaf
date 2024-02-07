import React, { useState, useEffect } from 'react'
import { ImageList, ImageListItem, Paper } from '@mui/material'
import { collection, onSnapshot } from 'firebase/firestore'

import { firestore, listAllImages } from '../../utils/firebase'
import UploadButton from '../../components/Uploads/UploadButton'

import Root, { classes } from './styles'

const Uploads: React.FC = () => {
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

  return (
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
  )
}

export default Uploads
