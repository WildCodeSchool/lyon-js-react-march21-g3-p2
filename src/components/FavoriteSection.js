import './FavoriteSection.css';
import React from 'react';

export default function FavoriteSection() {
  const favoriteBooks = [
    {
      id: 1,
      name: 'My Hero Academia',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
      author: 'Kōhei Horikoshi',
      genre: {
        genre_1: 'Adventure',
        genre_2: 'Fantasy',
        genre_3: 'Superhero',
      },
    },
    {
      id: 2,
      name: 'Attack On Titans',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81E7fve1HbL.jpg',
      author: 'Hajime Isayama',
      genre: {
        genre_1: 'Action',
        genre_2: 'Dark fantasy',
        genre_3: 'Post-apocalyptic',
      },
    },
    {
      id: 3,
      name: 'Quintessential Quintuplets',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81C5msmPz1L.jpg',
      author: 'Negi Haruba',
      genre: {
        genre_1: 'Harem',
        genre_2: 'Romantic comedy',
      },
    },
    {
      id: 4,
      name: 'One Piece',
      url: 'https://images-na.ssl-images-amazon.com/images/I/91WAjehGfFL.jpg',
      author: 'Eiichiro Oda',
      genre: {
        genre_1: 'Adventure',
        genre_2: 'Fantasy',
      },
    },
  ];

  return (
    <div className="favoriteContainer">
      <h1> COUPS DE COEUR</h1>
      <div className="booksFavorite">
        {favoriteBooks.map((book) => (
          <img key={book.id} src={book.url} alt={book.name} />
        ))}
      </div>
    </div>
  );
}
