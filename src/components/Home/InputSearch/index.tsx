import { ChangeEvent, useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
import { ReplyRounded as ReplyRoundedIcon } from '@mui/icons-material'

import useDebounceText from '../../../utils/hooks'
import { imagesStore } from '../../../store/images'

import Root, { classes } from './styles'

const InputSearch = () => {
  const [ searchTag, setSearchTag ] = useState('')
  const searchTagDebounce = useDebounceText(searchTag, 600)

  useEffect(() => {
    imagesStore.fetchImages({ tag: searchTagDebounce })
  }, [ searchTagDebounce ])

  const _handleChangeSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearchTag(ev.target.value)
  }

  return (
    <Root
      InputProps={{
        endAdornment: (
          <IconButton>
            <ReplyRoundedIcon className={classes.icon} />
          </IconButton>
        )
      }}
      fullWidth
      onChange={_handleChangeSearch}
      placeholder='Search'
      value={searchTag} />
  )
}

export default InputSearch
