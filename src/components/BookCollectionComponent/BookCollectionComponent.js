import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BooksContext } from '../../store/ContextProvider';
import { useNavigate } from 'react-router-dom';

const BookCollectionComponent = () => {
  const context = useContext(BooksContext);
  const navigate = useNavigate();

  const editHandler = (e, id) => {
    e.preventDefault();
    navigate(`/editbooks/${id}`);
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const x = window.confirm('Are you sure you want to delete this book?');
    if (x) {
      context.deleteBook(id);
    }
  };

  const reserveHandler = (e, id) => {
    e.preventDefault();
    context.reserveBook(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Book Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {context.books.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.author}</TableCell>
              <TableCell align="center">
                <img
                  src={row.image}
                  alt=""
                  style={{
                    width: '80px',
                    height: '120px',
                    objectFit: 'cover',
                  }}
                />
              </TableCell>
              <TableCell align="center">
                {row.status ? 'Available' : 'Reserved'}
              </TableCell>
              <TableCell>
                {row.status ? (
                  <button onClick={(e) => reserveHandler(e, row.id)}>
                    Reserve
                  </button>
                ) : null}
                <button onClick={(e) => editHandler(e, row.id)}>Edit</button>
                <button onClick={(e) => deleteHandler(e, row.id)}>
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookCollectionComponent;
