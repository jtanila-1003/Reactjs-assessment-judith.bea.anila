import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BooksContext } from '../../store/ContextProvider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function EditBook() {
  const params = useParams();

  const context = useContext(BooksContext);
  const [booktitle, BookTitlechange] = useState('');
  const [description, DescriptionChange] = useState('');
  const [image, ImageChange] = useState('');
  const [author, Authorchange] = useState('');
  const [status, Statuschange] = useState(true);

  useEffect(() => {
    const book = context.getBook(params.id);
    console.log(params.id);
    BookTitlechange(book.title);
    ImageChange(book.image);
    DescriptionChange(book.description);
    Authorchange(book.author);
    Statuschange(book.status);
  }, [context, params.id]);

  const navigate = useNavigate();

  const reserveHandler = (e, id) => {
    e.preventDefault();
    context.reserveBook(id);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const bookdata = {
      title: booktitle,
      image: image,
      description: description,
      author: author,
      status: status,
    };
    context.updateBook(params.id, bookdata);

    BookTitlechange('');
    DescriptionChange('');
    Authorchange('');
    Statuschange(true);
    navigate('/');
  };
  return (
    <Box
      component="form"
      onSubmit={handlesubmit}
      sx={{
        width: 500,
        margin: '50px auto',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Edit Book
      </Typography>
      <TextField
        fullWidth
        label="Book Title"
        required
        value={booktitle}
        onChange={(e) => BookTitlechange(e.target.value)}
        sx={{ margin: '10px 0' }}
      />
      <TextField
        fullWidth
        label="Book Description"
        required
        value={description}
        onChange={(e) => DescriptionChange(e.target.value)}
        sx={{ margin: '10px 0' }}
      />
      <TextField
        fullWidth
        label="Image"
        required
        value={image}
        onChange={(e) => ImageChange(e.target.value)}
        sx={{ margin: '10px 0' }}
      />
      <TextField
        fullWidth
        label="Author Name"
        value={author}
        onChange={(e) => Authorchange(e.target.value)}
        sx={{ margin: '10px 0' }}
      />
      <ButtonGroup
        aria-label="outlined primary button group"
        sx={{ gap: '30px' }}
      >
        {status ? null : (
          <Button
            variant="outlined"
            size="small"
            onClick={(e) => reserveHandler(e, params.id)}
          >
            Remove Reservation
          </Button>
        )}
        <Button variant="contained" color="success" type="submit">
          Save
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default EditBook;
