import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BooksContext } from '../../store/ContextProvider';

const AddBookComponent = () => {
  const context = useContext(BooksContext);
  // const [booktitle, BookTitlechange] = useState('');
  // const [description, DescriptionChange] = useState('');
  // const [image, ImageChange] = useState('');
  // const [author, Authorchange] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const initialValue = {
    bookTitle: '',
    description: '',
    image: '',
    author: '',
  };
  const [formValues, setFormValues] = useState(initialValue);

  const checkValidation = () => {
    const errors = {};

    if (!formValues.bookTitle) {
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
      setFormErrors({});
      navigate('/');
    } else {
      setFormErrors(errors);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const errors = checkValidation();
    setFormErrors(errors || {});
    setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: 'left' }}>
              <div className="card-title">
                <h2>Add Book</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Book Title</label>
                      <input
                        value={formValues.bookTitle}
                        name="bookTitle"
                        onChange={changeHandler}
                        className="form-control"
                      ></input>
                      <div className="text">
                        <p style={{ color: 'red' }}>{formErrors.bookTitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        value={formValues.description}
                        name="description"
                        onChange={changeHandler}
                        className="form-control"
                      ></input>

                      <div className="text">
                        <p style={{ color: 'red' }}>
                          {' '}
                          {formErrors.description}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Image</label>
                        <input
                          value={formValues.image}
                          name="image"
                          onChange={changeHandler}
                          className="form-control"
                        ></input>
                        <div className="text">
                          <p style={{ color: 'red' }}>{formErrors.image}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Author</label>
                        <input
                          value={formValues.author}
                          name="author"
                          onChange={changeHandler}
                          className="form-control"
                        ></input>
                        <div className="text">
                          <p style={{ color: 'red' }}>{formErrors.author}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn btn-success" type="submit">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBookComponent;
