import './ThemeSection.css';
import React from 'react';

export default function ThemeSection() {
  const themeBooks = [
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
    {
      id: 5,
      name: 'Naruto',
      url: 'https://images-na.ssl-images-amazon.com/images/I/91D9z2WL3WL.jpg',
      author: 'Masashi Kishimoto',
      genre: {
        genre_1: 'Adventure',
        genre_2: 'Fantasy comedy',
        genre_3: 'Martial arts',
      },
    },
    {
      id: 6,
      name: 'Dragon Ball Super',
      url: 'https://images-na.ssl-images-amazon.com/images/I/913g8zhpCYL.jpg',
      author: 'Akira Toriyama',
      genre: {
        genre_1: 'Adventure',
        genre_2: 'Fantasy',
        genre_3: 'Martial arts',
      },
    },
    {
      id: 7,
      name: 'Dragon Ball Super',
      url: 'https://images-na.ssl-images-amazon.com/images/I/913g8zhpCYL.jpg',
      author: 'Akira Toriyama',
      genre: {
        genre_1: 'Adventure',
        genre_2: 'Fantasy',
        genre_3: 'Martial arts',
      },
    },
    {
      id: 8,
      name: 'Dragon Ball Super',
      url: 'https://images-na.ssl-images-amazon.com/images/I/913g8zhpCYL.jpg',
      author: 'Akira Toriyama',
      genre: {
        genre_1: 'Adventure',
        genre_2: 'Fantasy',
        genre_3: 'Martial arts',
      },
    },
  ];

  return (
    <div className="themeContainer">
      <h1>THEMES </h1>
      <div className="booksTheme">
        {themeBooks.map((book) => (
          <img key={book.id} src={book.url} alt={book.name} />
        ))}
      </div>
    </div>
  );
}
