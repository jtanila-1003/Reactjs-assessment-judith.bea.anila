import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(ID, BookTitle, Author, Price, Status) {
  return { ID, BookTitle, Author, Price, Status };
}

const rows = [
  createData(1, 'An Immense World', 'Ed Yong', 779, 'Reserved'),
  createData(2, 'Act of Oblivion', 'Robert Harris', 800, 'Available'),
  createData(3, 'Stella Maris', 'Cormac McCarthy', 779, 'Available'),
  createData(4, 'Atoms and Ashes', 'Serhii Plocky', 511, 'Available'),
  createData(
    5,
    'The Last Emperor of Mexico',
    'Edward Shawcross',
    1002.67,
    'Available'
  ),
];

const NewBooksComponent = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Book Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Price&nbsp;(Php)</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="center">{row.BookTitle}</TableCell>
              <TableCell align="center">{row.Author}</TableCell>
              <TableCell align="center">{row.Price}</TableCell>
              <TableCell align="center">{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewBooksComponent;
