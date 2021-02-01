import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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

export default function Paginations({ total, limit, show , changePage, currentPage }) {
  const classes = useStyles();
  const totalPages = Math.ceil(total / limit)
  const handleChange = (event, value) => {
    console.log("page=>", value)
    changePage(value-1)
  };

  return (
    <>
      { show &&
        <div className={classes.root}>
          <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
        </div>
      }
    </>
  )
}
