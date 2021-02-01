import React, { useState } from 'react'
import { Button, FormControl, InputAdornment, InputLabel, makeStyles, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Track from '../../components/Track/Index';
import Paginations from '../../components/Pagination';
import Spinner from '../../components/Spinner'
import AlertInfo from '../../components/AlertInfo';

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
  const [loading, setLoading] = useState(false)
  const [tracks, setTracks] = useState([])
  const [infoAlert, setInfoAlert] = useState({ info: '', type: '', show: false})
  const [infoPages, setInfoPages] = useState({ total: 0, limit: 12, show: false })
  const [currentPage, setCurrentPage] = useState(1)

  const getTracks = (page = 0) => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_URL}/search?q=${search}&page=${page}&limit=${infoPages.limit}`)
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(({ tracks }) => {
        setTracks(tracks.items)
        setCurrentPage(page+1)
        setInfoPages({ total: tracks.total, limit: tracks.limit, show: true })
        setLoading(false)
      })
      .catch( error => {
        setLoading(false)
        setInfoAlert({ type: 'error', info: `Error al consultar canciones: ${error}`, show: true})
      })
  }

  return (
    <div>
      { loading ? <Spinner /> :
        <>
          <AlertInfo {...infoAlert} hideAlert={()=> setInfoAlert({...infoAlert, show: false})} />
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
          <Paginations {...infoPages} currentPage={currentPage} changePage={(p) => getTracks(p)} />
        </>
      }
    </div>
  )
}
