import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BooksContext } from '../../store/ContextProvider';

const EditBookComponent = () => {
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
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card" style={{ textAlign: 'left' }}>
            <div className="card-title">
              <h2>Update Book</h2>
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
                  <div className="form-group">
                    {status ? null : (
                      <button
                        className="btn btn-success"
                        onClick={(e) => reserveHandler(e, params.id)}
                      >
                        Remove Reservation
                      </button>
                    )}

                    <br />

                    <button className="btn btn-success" type="submit">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookComponent;
