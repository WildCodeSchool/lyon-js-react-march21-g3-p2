/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import './BookDetail.css';

function BookDetailPage() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/books/${id}/reviews`)
      .then((res) => setReviewList(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const onSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/books/${id}/reviews`, data)
      .then((res) => {
        setReviewList((currentReviews) => {
          return [...currentReviews, res.data];
        });
        reset();
      })
      .catch((err) => console.log(err));
  };

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
              : 'Not ranked'}
          </h1>
          <h3 id="description">{details.volumeInfo.description}</h3>
          <div id="review">
            {reviewList.length === 0 ? (
              <>
                <h3>What did you think about this book ?</h3>
              </>
            ) : (
              <>
                {reviewList &&
                  reviewList.map((review) => (
                    <div key={review.id}>
                      <h3>{review.user_name}</h3>
                      <p>{review.message}</p>
                    </div>
                  ))}
              </>
            )}
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                required
                className="username"
                label="Username"
                id="username"
                defaultValue=""
                variant="outlined"
                {...register('user_name')}
              />
              <TextField
                required
                multiline
                className="message"
                id="message"
                label="Message"
                rows={2}
                defaultValue=""
                variant="outlined"
                {...register('message')}
              />
              <Button variant="outlined" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </>
    )
  );
}

export default BookDetailPage;
