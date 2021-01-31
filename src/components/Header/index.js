import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LogoSpotify from './logo-spotify.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    backgroundColor: 'black'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingRight: '10px',
    fontSize: '2rem'
  },
  img: {
    width: '200px',
    maxWidth: '38%'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h3" className={classes.title}>
          Buscar canciones en
        </Typography>
        <img src={LogoSpotify} alt="logo spotify" className={classes.img} />
      </Toolbar>
    </AppBar>
  )
}
