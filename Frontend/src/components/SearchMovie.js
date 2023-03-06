
import {  Button, TextField,Table, TableCell, TableHead, TableRow,TableBody, Typography, } from '@mui/material'
import React, { useState } from 'react'
import UseForm from './UseForm'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

//Style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 2,
    },
}));

const SearchMovie = () => {

    var [movies,setMovie]= UseForm({"moviename":""});
    var [result,setResult]= useState([]);

    const searchMovie = ()=> {
        axios.post("http://localhost:5000/api/search",movies)
        .then((response)=>{
            console.log(response.data)
            setResult(result=response.data);
        })
    }
  return (
    <div>
        <div className='forms'>
        <Typography>Course Movies</Typography>
      <TextField name='moviename' value={movies.moviename} onChange={setMovie} className='field' variant='outlined' label='Movie Name'></TextField>
      <Button variant='contained' color='secondary' onClick={searchMovie}>Search</Button>
        </div>
        <div className='forms'>
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Movie Name</StyledTableCell>
                            <StyledTableCell align="right">Actor</StyledTableCell>
                            <StyledTableCell align="right">Actress</StyledTableCell>
                            <StyledTableCell align="right">Director</StyledTableCell>
                            <StyledTableCell align="right">Release Year</StyledTableCell>
                            <StyledTableCell align="right">Camera</StyledTableCell>
                            <StyledTableCell align="right">Producer</StyledTableCell>
                            <StyledTableCell align="right">Language</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            result.map((value, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row">{value.moviename}</StyledTableCell>
                                    <StyledTableCell align="right">{value.actor}</StyledTableCell>
                                    <StyledTableCell align="right">{value.actress}</StyledTableCell>
                                    <StyledTableCell align="right">{value.director}</StyledTableCell>
                                    <StyledTableCell align="right">{value.releaseover}</StyledTableCell>
                                    <StyledTableCell align="right">{value.camera}</StyledTableCell>
                                    <StyledTableCell align="right">{value.producer}</StyledTableCell>
                                    <StyledTableCell align="right">{value.language}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
      
    </div>
  )
}

export default SearchMovie
