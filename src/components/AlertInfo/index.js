import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: 'fixed',
    zIndex: 5,
    bottom: '25px'
  },
  containerAlert: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function AlertInfo({ type='error', info='informartion', show = true, hideAlert }) {
  const classes = useStyles();
  return (
    <div className={classes.containerAlert}>
      { show ?
        <div className={classes.root}>
          <Alert severity={type} onClose={() => hideAlert(false)} > {info} </Alert>
        </div>
        : null
      }
    </div>
  )
}
