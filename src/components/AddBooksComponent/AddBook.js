import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BooksContext } from '../../store/ContextProvider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const helperTextStyles = makeStyles((theme) => ({
  root: {
    margin: 4,
    color: 'red',
  },
}));

function AddBook() {
  const initialValue = {
    bookTitle: '',
    description: '',
    image: '',
    author: '',
  };

  const helperTestClasses = helperTextStyles();
  const context = useContext(BooksContext);
  const [formErrors, setFormErrors] = useState(initialValue);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValue);

  const checkValidation = () => {
    const errors = {};

    if (formValues.bookTitle === '' || !formValues.bookTitle) {
      errors.bookTitle = 'Title is required';
    }

    if (!formValues.description) {
      errors.description = 'Description is required';
    }

    if (!formValues.author) {
      errors.author = 'Author is required';
    }

    if (!formValues.image) {
      errors.image = 'Image url is required';
    }

    return errors;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const errors = checkValidation();

    if (Object.keys(errors).length === 0) {
      const bookdata = {
        id: Math.floor(Math.random() * 1000 + 1),
        title: formValues.bookTitle,
        description: formValues.description,
        image: formValues.image,
        author: formValues.author,
        status: true,
      };

      context.addBook(bookdata);
      setFormValues(initialValue);
      setFormErrors((prevState) => {});
      navigate('/');
    } else {
      setFormErrors((prevState) => errors);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'bookTitle':
        if (!value) {
          setFormErrors((prevState) => {
            return { ...prevState, [name]: 'Title is required' };
          });
        } else {
          setFormErrors((prevState) => {
            return { ...prevState, [name]: '' };
          });
        }
        break;
      case 'description':
        if (!value) {
          setFormErrors((prevState) => {
            return { ...prevState, [name]: 'Description is required' };
          });
        } else {
          setFormErrors((prevState) => {
            return { ...prevState, [name]: '' };
          });
        }
        break;
      case 'author':
        if (!value) {
          setFormErrors((prevState) => {
            return { ...prevState, [name]: 'Author is required' };
          });
        } else {
          setFormErrors((prevState) => {
            return { ...prevState, [name]: '' };
          });
        }
        break;
      case 'image':
        if (!value) {
          setFormErrors((prevState) => {
            return { ...prevState, [name]: 'Image url is required' };
          });
        } else {
          setFormErrors((prevState) => {
            return { ...prevState, [name]: '' };
          });
        }
        break;
      default:
        break;
    }
    setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });
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
        Add New Book
      </Typography>
      <TextField
        fullWidth
        id="filled-error-helper-text"
        label="Book Title"
        value={formValues.bookTitle}
        name="bookTitle"
        onChange={changeHandler}
        helperText={formErrors.bookTitle}
        FormHelperTextProps={{ classes: helperTestClasses }}
        sx={{ margin: '10px 0' }}
      />
      <TextField
        fullWidth
        id="filled-error-helper-text"
        label="Book Description"
        value={formValues.description}
        name="description"
        onChange={changeHandler}
        helperText={formErrors.description}
        FormHelperTextProps={{ classes: helperTestClasses }}
        sx={{ margin: '10px 0' }}
      />
      <TextField
        id="filled-error-helper-text"
        fullWidth
        label="Image"
        value={formValues.image}
        name="image"
        onChange={changeHandler}
        helperText={formErrors.image}
        FormHelperTextProps={{ classes: helperTestClasses }}
        sx={{ margin: '10px 0' }}
      />
      <TextField
        id="filled-error-helper-text"
        fullWidth
        label="Author Name"
        value={formValues.author}
        name="author"
        onChange={changeHandler}
        helperText={formErrors.author}
        FormHelperTextProps={{ classes: helperTestClasses }}
        sx={{ margin: '10px 0' }}
      />
      <Button variant="contained" color="success" type="submit">
        Save
      </Button>
    </Box>

    //Bea's choice

    // <Box
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1 },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <Input defaultValue="Hello world" inputProps={ariaLabel} />
    //   <Input placeholder="Placeholder" inputProps={ariaLabel} />
    //   <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
    //   <Input defaultValue="Error" error inputProps={ariaLabel} />
    // </Box>
  );
}

export default AddBook;
