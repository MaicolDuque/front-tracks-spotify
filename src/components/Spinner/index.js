import React from 'react'
import { CircularProgress } from '@material-ui/core'
import './estilos.css'

export default function Spinner() {
  return (
    <div className="bg-loading">
      <CircularProgress disableShrink className="loader" size="4rem" color="inherit" />
    </div>
  )
}