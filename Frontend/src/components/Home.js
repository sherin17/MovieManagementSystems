import { Table, TableCell, TableHead, TableRow, TableBody, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Editmovie from "./EditMovie";

//Style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.dark,
        fontSize:18
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
        border: 5,
    },
}));


//Function
const Home = () => {

    var [movies, setMovie] = useState([]);
    var [updatedMovies, setupdatedMovies] = useState(false)
    var [editMovies, seteditMovies] = useState('')
    var editedMovies


    // VIEW COURSE
    useEffect(() => {
        fetchmovie()
    }, []);

    const fetchmovie = () => {
        axios.get("http://localhost:5000/viewmovies")
            .then((response) => {
                console.log(response.data);
                setMovie(movies = response.data);

            })
    }
    //DELETE COURSE
    const deletemovie = (id) => {
        console.log(id)
        const data = { _id: id }
        axios.post("http://localhost:5000/deletemovie", data)
            .then((response) => {
                console.log(response.data);
                alert("Successfully Deleted!!");
                fetchmovie();
            })
    }
    const updateMovie = (value) => {
        setupdatedMovies(true)
        seteditMovies(value)
        console.log(updateMovie)
    }

    if (updatedMovies) {
        editedMovies = <Editmovie value={editMovies} />
    }
    else {
        editedMovies =
            <div className='forms'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Movie</StyledTableCell>
                                <StyledTableCell align="right">Actor</StyledTableCell>
                                <StyledTableCell align="right">Actress</StyledTableCell>
                                <StyledTableCell align="right">Director</StyledTableCell>
                                <StyledTableCell align="right">Released</StyledTableCell>
                                <StyledTableCell align="right">Camera</StyledTableCell>
                                <StyledTableCell align="right">Producer</StyledTableCell>
                                <StyledTableCell align="right">Language</StyledTableCell>
                                <StyledTableCell align="right">Edit Movie</StyledTableCell>
                                <StyledTableCell align="right">Delete</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                movies.map((value, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">{value.moviename}</StyledTableCell>
                                        <StyledTableCell align="right">{value.actor}</StyledTableCell>
                                        <StyledTableCell align="right">{value.actress}</StyledTableCell>
                                        <StyledTableCell align="right">{value.director}</StyledTableCell>
                                        <StyledTableCell align="right">{value.releaseover}</StyledTableCell>
                                        <StyledTableCell align="right">{value.camera}</StyledTableCell>
                                        <StyledTableCell align="right">{value.producer}</StyledTableCell>
                                        <StyledTableCell align="right">{value.language}</StyledTableCell>
                                        <StyledTableCell align="right">
                                        <Button variant='contained' onClick={()=>updateMovie(value)} color='warning'>Update</Button>
                                        </StyledTableCell>
                                        <StyledTableCell align='right'>
                                            <Button variant='contained' color='error' onClick={() => { deletemovie(value._id) }}>Delete</Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

    }
    return (

        editedMovies
    )
}
export default Home


