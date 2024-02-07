import { ReactNode, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CircularProgress, Grid } from '@mui/material'
import { auth } from '../utils/firebase'

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const [ loading, setLoading ] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleAuthStateChanged = (user: any) => {
      setLoading(false)
      const isLogged = Boolean(user)

      if((location.pathname === '/' && isLogged) || (location.pathname !== '/' && !isLogged))
        navigate(isLogged ? '/home' : '/')
    }

    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged)

    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ location.pathname ])

  return (
    <>
      {
        loading ? (
          <Grid container justifyContent='center'>
            <CircularProgress />
          </Grid >
        ) : children
      }
    </>
  )
}

export default Main
