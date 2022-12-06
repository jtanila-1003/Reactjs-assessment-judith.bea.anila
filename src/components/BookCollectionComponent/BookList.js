import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Chip from '@mui/material/Chip';
import { BooksContext } from '../../store/ContextProvider';
import { useNavigate } from 'react-router-dom';

function BookList() {
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
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '700px',
        margin: '50px auto',
      }}
    >
      {context.books.map((row, index) => (
        <Card
          sx={{
            width: '200px',
            padding: '10px',
            position: 'relative',
          }}
          key={index}
        >
          {row.status ? (
            <Chip
              color="success"
              size="small"
              label="Available"
              sx={{ position: 'absolute', right: '10px', top: '10px' }}
            />
          ) : (
            <Chip
              color="warning"
              size="small"
              label="Reserved"
              sx={{ position: 'absolute', right: '10px', top: '10px' }}
            />
          )}

          <CardMedia
            component="img"
            width="100%"
            height="170px"
            image={row.image}
            alt=""
            sx={{
              objectFit: 'cover',
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {row.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {row.description}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Author: {row.author}
            </Typography>
          </CardContent>

          <CardActions>
            <ButtonGroup
              aria-label="outlined primary button group"
              sx={{ gap: '20px' }}
            >
              {row.status ? (
                <Button size="small" onClick={(e) => reserveHandler(e, row.id)}>
                  Reserve
                </Button>
              ) : null}
              <BorderColorIcon onClick={(e) => editHandler(e, row.id)}>
                Edit
              </BorderColorIcon>
              <DeleteIcon onClick={(e) => deleteHandler(e, row.id)}>
                Delete
              </DeleteIcon>
            </ButtonGroup>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}

export default BookList;
