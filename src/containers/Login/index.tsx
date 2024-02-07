import { Button, Checkbox, FormControl, FormControlLabel, IconButton, TextField, Typography } from '@mui/material'

import { userStore } from '../../store/user'
import Root, { classes } from './styles'
import { ChangeEvent, useMemo, useState } from 'react'
import { useSnapshot } from 'valtio'
import { RequestStatus } from '../../utils/types'

const Login = () => {
  const { status } = useSnapshot(userStore)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const isButtonsDisabled = useMemo(() => !email || !password, [ email, password ])

  const _handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if(name === 'email') setEmail(value)
    else if(name === 'password') setPassword(value)
  }

  const _handleClickLoginWithGoogle = () => {
    userStore.loginWithGoogle()
  }

  const _handleClickSignUp = () => {
    userStore.signUp(email, password)
  }

  const _handleClickSignIn = () => {
    userStore.signIn(email, password)
  }

  return (
    <Root>
      <div className={classes.contentFormAccount}>
        <div className={classes.formAccount}>
          <Typography color='primary' fontWeight='bold' variant='h4'>Create Account</Typography>
          <div className={classes.contentIcons}>
            <IconButton onClick={_handleClickLoginWithGoogle} variant='bordered'>
              <img alt='google' src='https://www.svgrepo.com/show/512321/google-178.svg' />
            </IconButton>
            <IconButton variant='bordered'>
              <img alt='facebook' src='https://www.svgrepo.com/show/512120/facebook-176.svg' />
            </IconButton>
            <IconButton variant='bordered'>
              <img alt='twitter' src='https://www.svgrepo.com/show/513008/twitter-154.svg' />
            </IconButton>
            <IconButton variant='bordered'>
              <img alt='vk' src='https://www.svgrepo.com/show/501054/vk.svg' />
            </IconButton>
          </div>
          <Typography color='text.secondary'>or use your email for registration:</Typography>
          <FormControl className={classes.formAccountInputs}>
            <TextField
              label='Name'
              variant='outlined'  />
            <TextField
              label='Email'
              name='email'
              onChange={_handleInputChange}
              type='email'
              value={email}
              variant='outlined' />
            <TextField
              label='Password'
              name='password'
              onChange={_handleInputChange}
              type='password'
              value={password}
              variant='outlined' />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='I agree to the Terms and Privacy Policy' />
          </FormControl>
          <div>
            {
              status === RequestStatus.failed ? (
                <Typography color='primary'>Hubo un error en el servidor</Typography>
              ) : null
            }
          </div>
          <div className={classes.formAccountActions}>
            <Button
              disabled={isButtonsDisabled}
              fullWidth
              onClick={_handleClickSignUp}
              size='large'
              variant='contained'>
              Sign Up
            </Button>
            <Button
              disabled={isButtonsDisabled}
              fullWidth
              onClick={_handleClickSignIn}
              size='large'
              variant='outlined'>
              Sign In
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.contentImage}>
        <img alt='wallpaper' src='https://sv.boell.org/sites/default/files/styles/var_larger/public/2020-03/3329758.jpg.webp?itok=oj2gd19u' />
      </div>
    </Root>
  )
}

export default Login
