import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BooksContext } from '../../store/ContextProvider';
import { Link } from 'react-router-dom';

// function createData(ID, BookTitle, Author, Price, Status) {
//   return { ID, BookTitle, Author, Price, Status };
// }

// const rows = [
//   createData(1, 'Bible', 'God', 1000, 'Reserved'),
//   createData(
//     2,
//     'Stupid is Forever',
//     'Miriam Defensor Santiago',
//     250,
//     'Reserved'
//   ),
//   createData(
//     3,
//     'Stupid is Forevermore',
//     'Miriam Defensor Santiago',
//     250,
//     'Available'
//   ),
//   createData(4, 'Nectar in a Sieve', 'Kamala Markandaya', 350, 'Available'),
//   createData(5, 'Death on the Nile', 'Agatha Christie', 558, 'Available'),
// ];

const BookCollectionComponent = () => {
  const context = useContext(BooksContext);

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
                <img src={row.image} alt="" />
              </TableCell>
              <TableCell align="center">
                {row.status ? 'Available' : 'Reserved'}
              </TableCell>
              <TableCell>
                <Link to={`/editbooks/${row.id}`}>Update</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookCollectionComponent;
