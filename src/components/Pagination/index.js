import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '40px'
  },
}));

export default function Paginations({ total, limit, show, changePage }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState(10);
  const handleChange = (event, value) => {
    setPage(value);
    changePage(value - 1)
  };

  useEffect(() => {
    const totalPages = Math.ceil(total / limit)
    setPages(totalPages)
  }, [total, limit])


  return (
    <>
      { show &&
        <div className={classes.root}>
          <Pagination count={pages} page={page} onChange={handleChange} />
        </div>
      }
    </>
  )
}
