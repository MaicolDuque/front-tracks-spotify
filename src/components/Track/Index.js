import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // marginBottom: '4%'
  },
  media: {
    height: 245
  },
  artists: {
    color: '#b3b3b3',
    fontSize: '17px'
  }
});

export default function Track({ track }) {
  const classes = useStyles()
  const { album, name, id } = track
  const artists = album.artists.map(({ name }) => name).join(',')

  const viewDetails = () => {
    alert(id)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={album?.images[1].url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.artists}>
            {artists}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'flex-end'}} onClick={viewDetails}>
        <Button size="small">
          Ver Detalles
          <VisibilityIcon style={{marginLeft: '7px'}} />
        </Button>
      </CardActions>
    </Card>
  )
}
