import { CircularProgress, Grid } from '@mui/material'
import { useSnapshot } from 'valtio'
import { Masonry, useInfiniteLoader } from 'masonic'

import { Image, imagesStore } from '../../../store/images'
import { RequestStatus } from '../../../utils/types'

const ListImages = () => {
  const { images, status, page } = useSnapshot(imagesStore)

  const maybeLoadMore = useInfiniteLoader(
    () => {
      if(status === RequestStatus.ready && imagesStore.page < imagesStore.totalPages) imagesStore.fetchImages({ isNext: true })
    }
  )

  return (
    <div>
      {
        !(page === 0 && status === RequestStatus.loading) ? (
          <Masonry
            columnGutter={16}
            columnWidth={230}
            items={images as Image[]}
            onRender={maybeLoadMore}
            overscanBy={1}
            render={({ data: { url }, width, index }) => (
              <div key={index}>
                <img alt='kitty' src={url.replace(/\.[^.]+$/, 'm$&')} style={{ borderRadius: 32, width }} />
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
    </div>
  )
}

export default ListImages
