import { Badge, IconButton } from '@mui/material'
import {
  PersonRounded as PersonRoundedIcon, NotificationsRounded as NotificationsRoundedIcon,
  ForumRounded as ForumRoundedIcon,
  QuestionMarkRounded as QuestionMarkRoundedIcon, AddRounded as AddRoundedIcon,
  FavoriteRounded as FavoriteBorderRoundedIcon,
  LogoutRounded as LogoutRoundedIcon
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import { auth } from '../../utils/firebase'
import ListImages from '../../components/Home/ListImages'
import InputSearch from '../../components/Home/InputSearch'
import Root, { classes } from './styles'

const Home = () => {
  const navigate = useNavigate()

  const _handleClickUploads = () => {
    navigate('/uploads')
  }

  const _handleClickLogout = () => {
    auth.signOut()
  }

  return (
    <Root>
      <div className={classes.contentHeader}>
        <IconButton className={classes.btnPint}>
          <img alt='icon' src='https://www.svgrepo.com/show/132018/pinterest.svg' />
        </IconButton>
        <InputSearch />
      </div>
      <div className={classes.contentBody}>
        <div className={classes.contentActions}>
          <div className={classes.actionsFirst}>
            <IconButton variant='squared'>
              <PersonRoundedIcon />
            </IconButton>
            <IconButton  variant='squared'>
              <NotificationsRoundedIcon />
            </IconButton>
            <IconButton  variant='squared'>
              <Badge badgeContent={8} color='primary'>
                <ForumRoundedIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.actionsSecond}>
            <IconButton  variant='squared'>
              <FavoriteBorderRoundedIcon />
            </IconButton>
          </div>
          <div className={classes.actionsThird}>
            <IconButton  variant='squared'>
              <QuestionMarkRoundedIcon />
            </IconButton>
            <IconButton onClick={_handleClickUploads} variant='squared'>
              <AddRoundedIcon />
            </IconButton>
            <IconButton onClick={_handleClickLogout} variant='squared'>
              <LogoutRoundedIcon />
            </IconButton>
          </div>
        </div>
        <ListImages />
      </div>
    </Root>
  )
}

export default Home
