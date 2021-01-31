import React, { useState } from 'react'
import { Button, FormControl, InputAdornment, InputLabel, makeStyles, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Track from '../../components/Track/Index';
import Paginations from '../../components/Pagination';

const infoStyles = makeStyles((theme) => ({
  button: {
    marginBottom: "30px",
    marginTop: '20px',
    minWidth: '210px',
    maxWidth: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black'
    }
  },
  formControl: {
    width: '700px',
    maxWidth: '100%',
    margin: '0 auto',
    marginTop: '30px',
    display: 'flex'
  },
  tracks: {
    display: 'grid',
    gridTemplateColumns: "repeat(auto-fit, minmax(345px,max-content))",
    justifyContent: 'space-evenly',
    gridRowGap: '2.5rem',
    gridColumnGap: '1rem'
  }
}));

export default function Home() {
  const classes = infoStyles()
  const [search, setSearch] = useState('')
  const [tracks, setTracks] = useState([])
  const [infoPages, setInfoPages] = useState({ total: 0, limit: 12, show: false })

  const getTracks = (page = 0) => {
    fetch(`http://localhost:5000/search?q=${search}&page=${page}&limit=${infoPages.limit}`)
      .then(res => res.json())
      .then(({ tracks }) => {
        setTracks(tracks.items)
        setInfoPages({ total: tracks.total, limit: tracks.limit, show: true })
      })
  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <OutlinedInput
          id="txt_keyword"
          name="keyword"
          label="Buscar canciones"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={e => (e.key === 'Enter') ? getTracks() : null}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon edge="end" />
            </InputAdornment>
          }>
        </OutlinedInput>
        <InputLabel>Buscar canciones</InputLabel>
      </FormControl>
      <Button
        id="btn_search"
        name="search"
        variant="contained"
        style={{ display: 'flex' }}
        onClick={() => getTracks(0)}
        className={classes.button}>
        Buscar
      </Button>
      <div className={classes.tracks}>
        {tracks.map(track => <Track key={track.id} track={track} />)}
      </div>
      <Paginations {...infoPages} changePage={(p) => getTracks(p)} />
    </div>
  )
}
