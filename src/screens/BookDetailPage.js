import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BookDetail.css';

function BookDetailPage() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const API_KEY = process.env.REACT_APP_BOOK_API_KEY;
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, []);

  return (
    details && (
      <>
        <div id="wrap">
          <img
            id="coverbook"
            src={details.volumeInfo.imageLinks.thumbnail}
            alt={details.volumeInfo.title}
          />
          <h2 id="title">{details.volumeInfo.title}</h2>
          <h2 id="authorName">{details.volumeInfo.authors}</h2>
          <h1 id="averageNote">
            {details.volumeInfo.averageRating
              ? details.volumeInfo.averageRating
              : `Désolé il n'y a pas de notes pour le moment`}
          </h1>
          <h3 id="description">{details.volumeInfo.description}</h3>
          <div id="review">
            <form>
              <input type="text" placeholder="Name :" />
              <br />
              <textarea placeholder="Write your review here" />
              <br />
              <button style={{ backgroundColor: '#333355' }} type="submit">
                {' '}
                Send
              </button>
            </form>
          </div>
          <div id="place">Where all scenes took place</div>
          <div id="specification">Details about the book</div>
        </div>
        ))
      </>
    )
  );
}

export default BookDetailPage;
