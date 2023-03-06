import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'

const EditMovie = (props) => {
  console.log(props)
 
  const [newmovies, setnewMovies] = useState({
    moviename: props.value.moviename,
    actor: props.value.actor,
    actress: props.value.actress,
    director: props.value.director,
    releaseover: props.value.releaseover,
    camera: props.value.camera,
    producer: props.value.producer,
    language: props.value.language,
  })
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setnewMovies((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };
  const readValues = () => {
    var postData = { ...newmovies, _id: props.value._id };
    axios.post("http://localhost:5000/updatemovie", postData)
      .then((response) => {
        console.log(response.data);
        alert("Successfully Updated");
        window.location.reload();
      });
  };


  return (
    <div>
        <div className='forms'>
          <Typography className='heading' color='white'>EDIT MOVIES</Typography>
          <TextField name='moviename' value={newmovies.moviename} onChange={inputHandler} variant='outlined' color='secondary' label='Movie Name' className='field'></TextField>
          <TextField name='actor' value={newmovies.actor} onChange={inputHandler} variant='outlined' color='secondary' label='Actor' className='field'></TextField>
          <TextField name='actress' value={newmovies.actress} onChange={inputHandler} variant='outlined' color='secondary' label='Actress' className='field'></TextField>
          <TextField name='director' value={newmovies.director} onChange={inputHandler} variant='outlined' color='secondary' label='Director' className='field'></TextField>
          <TextField name='releaseover' value={newmovies.releaseover} onChange={inputHandler} variant='outlined' color='secondary' label='Release Date' className='field'></TextField>
          <TextField name='camera' value={newmovies.camera} onChange={inputHandler} variant='outlined' color='secondary' label='Camera' className='field'></TextField>
          <TextField name='producer' value={newmovies.producer} onChange={inputHandler} variant='outlined' color='secondary' label='Producer' className='field'></TextField>
          <TextField name='language' value={newmovies.language} onChange={inputHandler} variant='outlined' color='secondary' label='Language' className='field'></TextField>
          <Button variant='contained' color='secondary' onClick={readValues}>Update</Button>
        </div>
    </div>
  )

}
export default EditMovie
