import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import "./style.css"
import axios from 'axios'
import useForm from './UseForm'

const Addmovie = () => {

  var [movie,setMovie]=useForm({"moviename":"","actor":"","actress":"","director":"","releaseover":"","camera":"","producer":"","language":""})
  //ADD COURSE
  const addmovie=()=>{
    axios.post("http://localhost:5000/api/createmovie",movie)
    .then((response)=>{
        console.log(response.data);
        alert("Data Added Successfully")
    })
  }
  return (
    <div>
      <div className='forms'>
      <Typography className='heading'>ADD MOVIES</Typography>
      <TextField name='moviename' value={movie.moviename} onChange={setMovie} variant='outlined' color='secondary' label='Movie Name' className='field'></TextField>
      <TextField name='actor' value={movie.actor} onChange={setMovie} variant='outlined' color='secondary' label='Actor' className='field'></TextField>
      <TextField name='actress' value={movie.actress} onChange={setMovie} variant='outlined' color='secondary'  label='Actress' className='field'></TextField>
      <TextField name='director' value={movie.director} onChange={setMovie} variant='outlined' color='secondary'  label='Director' className='field'></TextField>
      <TextField name='releaseover' value={movie.releaseover} onChange={setMovie} variant='outlined' color='secondary'  label='Release Date' className='field'></TextField>
      <TextField name='camera' value={movie.camera} onChange={setMovie} variant='outlined' color='secondary'  label='Camera' className='field'></TextField>
      <TextField name='producer' value={movie.producer} onChange={setMovie} variant='outlined' color='secondary'  label='Producer' className='field'></TextField>
      <TextField name='language' value={movie.language} onChange={setMovie} variant='outlined' color='secondary'  label='Language' className='field'></TextField>
      <Button variant='contained' onClick={addmovie}>Add</Button>
      </div>
    </div>
  )
}

export default Addmovie
