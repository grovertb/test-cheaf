import { CircularProgress, Grid } from '@mui/material'
import { useSnapshot } from 'valtio'
import { Masonry, useInfiniteLoader } from 'masonic'

import { Image, imagesStore } from '../../../store/images'
import { RequestStatus } from '../../../utils/types'

import Root, { classes } from './styles'
import ImageFullScreen from '../ImageFullScreen'
import { useCallback, useState } from 'react'

const ListImages = () => {
  const { images, status, page } = useSnapshot(imagesStore)
  const [ openModal, setOpenModal ] = useState(false)
  const [ selectedImageUrl, setSelectedImageUrl ] = useState<string | null>(null)

  const _handleImageClick = useCallback((imageUrl: string) => {
    setSelectedImageUrl(imageUrl)
    setOpenModal(true)
  }, [])

  const _handleCloseModal = useCallback(() => {
    setOpenModal(false)
  }, [])

  const loadMore = useInfiniteLoader(
    () => {
      if(status === RequestStatus.ready && imagesStore.page < imagesStore.totalPages) imagesStore.fetchImages({ isNext: true })
    }
  )

  return (
    <Root>
      {
        !(page === 0 && status === RequestStatus.loading) ? (
          <Masonry
            columnGutter={16}
            columnWidth={230}
            items={images as Image[]}
            onRender={loadMore}
            overscanBy={1}
            render={({ data: { url }, width, index }) => (
              <div key={index}>
                <img
                  alt='kitty'
                  className={classes.image}
                  onClick={() => _handleImageClick(url)}
                  src={url.replace(/\.[^.]+$/, 'm$&')}
                  style={{ width }} />
              </div>
            )} />
        ) : null
      }
      {
        status === RequestStatus.loading ? (
          <Grid container justifyContent='center'>
            <CircularProgress />
          </Grid>
        ) : null
      }
      <ImageFullScreen
        imageUrl={selectedImageUrl || ''}
        onClose={_handleCloseModal}
        open={openModal} />
    </Root>
  )
}

export default ListImages
