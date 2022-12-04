import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BooksContext } from '../../store/ContextProvider';

const AddBookComponent = () => {
  const context = useContext(BooksContext);

  const [booktitle, BookTitlechange] = useState('');
  const [description, DescriptionChange] = useState('');
  const [image, ImageChange] = useState('');
  const [author, Authorchange] = useState('');
  const [status, Statuschange] = useState(true);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const bookdata = {
      id: Math.floor(Math.random() * 1000 + 1),
      title: booktitle,
      description: description,
      image: image,
      author: author,
      status: status,
    };
    context.addBook(bookdata);

    BookTitlechange('');
    DescriptionChange('');
    ImageChange('');
    Authorchange('');
    Statuschange(false);

    // fetch('http://localhost:3000/', {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(bookdata),
    // })
    //   .then((res) => {
    //     alert('Saved successfully.');
    //     navigate('/');
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
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
                      <label>BookTitle</label>
                      <input
                        required
                        value={booktitle}
                        onChange={(e) => BookTitlechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {booktitle.length === 0 && (
                        <span className="text-danger">
                          Enter the Book Title
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        required
                        value={description}
                        onChange={(e) => DescriptionChange(e.target.value)}
                        className="form-control"
                      ></input>
                      {description.length === 0 && (
                        <span className="text-danger">
                          Enter the description
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Image</label>
                      <input
                        required
                        value={image}
                        onChange={(e) => ImageChange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Author</label>
                      <input
                        value={author}
                        onChange={(e) => Authorchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={status}
                        onChange={(e) => Statuschange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Available</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
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
