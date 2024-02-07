import { styled } from '@mui/material'

const PREFIX = 'Home'

export const classes = {
  actionsFirst  : `${PREFIX}-actionsFirst`,
  actionsSecond : `${PREFIX}-actionsSecond`,
  actionsThird  : `${PREFIX}-actionsThird`,
  btnPint       : `${PREFIX}-btnPint`,
  contentActions: `${PREFIX}-contentActions`,
  contentBody   : `${PREFIX}-contentBody`,
  contentHeader : `${PREFIX}-contentHeader`
}

export default styled('div', {
  name: PREFIX
})(({ theme: { spacing } }) => ({
  display                  : 'flex',
  flexDirection            : 'column',
  gap                      : spacing(4),
  height                   : '100vh',
  padding                  : spacing(4),
  [`& .${classes.btnPint}`]: {
    '& > img': {
      height: '100%',
      width : '100%'
    },
    height : 56,
    padding: spacing(.5),
    width  : 56
  },
  [`& .${classes.contentHeader}`]: {
    display: 'flex',
    gap    : spacing(6.5)
  },
  [`& .${classes.contentBody}`]: {
    display            : 'grid',
    flex               : 1,
    gap                : spacing(6.5),
    gridTemplateColumns: '56px 1fr'
  },
  [`& .${classes.contentActions}`]: {
    '& .MuiSvgIcon-root': {
      color: 'black'
    },
    '& > div': {
      display      : 'flex',
      flexDirection: 'column',
      gap          : spacing(2)
    },
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'column',
    gap          : spacing(8)
  },
  [`& .${classes.actionsFirst}`]: {
    '& > button': {
      '& .MuiBadge-badge': {
        transform: 'translate(70%, -70%)'
      },
      boxShadow: '0px 10px 15px 0px rgba(0,0,0,0.15)'
    }
  },
  [`& .${classes.actionsSecond}`]: {
    '& > button': {
      '& > .MuiSvgIcon-root': {
        color: 'white'
      },
      backgroundColor: 'black'
    }
  },
  [`& .${classes.actionsThird}`]: {
    '& > button': {
      boxShadow: '-4px -6px 0px 0px rgba(0,0,0,0.15)'
    }
  }
}))
