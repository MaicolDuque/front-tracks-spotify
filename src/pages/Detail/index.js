import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Card from '@material-ui/core/Card';
import useArtists from '../../hooks/useArtists';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    marginTop: '50px',
    flexWrap: 'wrap'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginLeft: '20px'
  },
  cover: {
    width: 400,
  },
  title: {
    fontSize: '75px',
    fontWeight: 600
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: '30px',
    marginBottom: '30px',
    fontSize: '18px'
  },
  play: {
    color: '#1db954',
    fontSize: '40px',
  },
  sectionPlay: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black'
  }
}));

export default function Detail() {
  const classes = useStyles()
  const { id } = useParams()
  const [track, setTrack] = useState({})
  const { stringArtists } = useArtists(track?.album?.artists)

  const calculateTime = () => {
    const minutes = Math.floor(track.duration_ms / 60000)
    const seconds = Math.floor((track.duration_ms - minutes * 60000) / 1000)
    return `${minutes} min ${seconds} seg`
  }
  useEffect(() => {
    fetch(`http://localhost:5000/search/track/${id}`)
      .then(res => res.json())
      .then(data => {
        setTrack(data)
      })
  }, [id])

  return (
    <Card className={classes.root}>
      <img className={classes.cover} src={track.album ? track.album.images[1].url : ''} alt="profile" />
      <div className={classes.details}>
        <span className={classes.title}>{track.name}</span>
        <div className={classes.info}>
          <div> <strong>Cantante:</strong> {stringArtists}</div>
          <div> <strong>Año lanzamiento:</strong> {track.album?.release_date.split('-')[0]}</div>
          <div> <strong>Cantidad de canciones:</strong> {track.track_number} {track.track_number > 1 ? 'canciones' : 'canción'}</div>
          <div> <strong>Duración:</strong> {calculateTime()}</div>
          <div>
            <a className={classes.sectionPlay} href={track?.external_urls?.spotify} target="_blank" rel="noreferrer">
              <PlayCircleFilledWhiteIcon className={classes.play} />
              <span style={{ fontSize: '14px' }}>Reproducir en Spotify</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}
