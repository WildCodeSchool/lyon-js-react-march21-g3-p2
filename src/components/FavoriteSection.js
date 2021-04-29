import './FavoriteSection.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FavoriteSection() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=Naruto&maxResults=4')
      .then((res) => {
        setResult(res.data.items);
      });
  }, []);

  return (
    <div className="favoriteContainer">
      <h1> COUPS DE COEUR</h1>
      <div className="booksFavorite">
        {result.map((book) =>
          book.volumeInfo.imageLinks === undefined ? null : (
            <img
              key={book.id}
              src={`${book.volumeInfo.imageLinks.thumbnail}`}
              alt={book.title}
            />
          )
        )}
      </div>
    </div>
  );
}
