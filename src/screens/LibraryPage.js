/* eslint-disable no-alert */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { FixedSizeList } from 'react-window';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Library.css';
import {
  // FormControl,
  // InputLabel,
  // Select,
  TextField,
  // MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function LibraryPage() {
  const newMax = {
    maxValue1: 10,
    maxValue2: 20,
    maxValue3: 30,
    maxValue4: 40,
  };

  const genre = {
    theme: [
      'Adventure',
      'Fantasy',
      'Superhero',
      'Action',
      'Dark fantasy',
      'Post-apocalyptic',
      'Harem',
      'Romantic comedy',
      'Fantasy comedy',
      'Martial arts',
    ],
  };

  const [newBook, setNewBook] = useState('');
  // const [newSubject, setNewSubject] = useState(genre);
  const [result, setResult] = useState([]);
  const [maxResult, setMaxResult] = useState(newMax.maxValue1);
  const [showCat, setShowCat] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

  const handleChange = (e) => {
    setNewBook(e.target.value);
  };
  const handleChangeMaxResult = (e) => {
    setMaxResult(e.target.value);
  };
  /* const handleNewSubject = (e) => {
    setNewSubject(e.target.value);
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    !newBook
      ? alert('Nothing is defined !')
      : axios
          .get(
            'https://www.googleapis.com/books/v1/volumes?q=' +
              newBook +
              '&key=' +
              API_KEY +
              '&maxResults=' +
              maxResult
          )
          .then((res) => {
            setResult(res.data.items);
          });
    setNewBook('');
  };

  /* const handleNewSubjectTest = (e) => {
    e.preventDefault();
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=subject:' +
          newSubject +
          '&key=' +
          apiKey +
          '&maxResults=' +
          maxResult
      )
      .then((res) => {
        setResult(res.data.items);
      });
  }; */

  const closeAll = () => {
    setShowCat(!showCat);
    setShowGenre(false);
    setShowPrice(false);
    setShowYear(false);
  };
  const closeGenre = () => {
    setShowGenre(!showGenre);
    setShowPrice(false);
    setShowYear(false);
  };
  const closePrice = () => {
    setShowPrice(!showPrice);
    setShowGenre(false);
    setShowYear(false);
  };
  const closeYear = () => {
    setShowYear(!showYear);
    setShowPrice(false);
    setShowGenre(false);
  };

  const genreList = ({ index, style }) => (
    <ListItem button style={style} key={index} id="item">
      <ListItemText
        primary={genre.theme[index]}
        // value={newSubject}
        // onClick={handleNewSubjectTest}
      />
    </ListItem>
  );
  const Price = ({ index, style }) => (
    <div id="item" style={style}>
      {index + 1}$
    </div>
  );
  const Year = ({ index, style }) => (
    <div id="item" style={style}>
      {index > 9 ? 20 + [index] : 200 + [index]}
    </div>
  );

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#aa6655',
      },
      secondary: {
        main: '#ecc39f',
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <div className="three-components">
          <div className="form">
            <TextField
              className="search-bar"
              type="search"
              value={newBook}
              placeholder="Search for Books"
              autoComplete="off"
              variant="outlined"
              onChange={handleChange}
            />
            <Button
              className="search-button"
              type="submit"
              variant="contained"
              color="primary"
            >
              ►
            </Button>
          </div>
          <Button
            className="advanced-button"
            variant="contained"
            color="primary"
            onClick={() => closeAll()}
          >
            Advanced Research
          </Button>
        </div>
        {showCat ? (
          <div className="advancedButtons">
            <Button
              id="theme"
              variant="contained"
              color="primary"
              onClick={() => closeGenre()}
            >
              Genre
            </Button>
            <Button
              id="price"
              variant="contained"
              color="primary"
              onClick={() => closePrice()}
            >
              Price
            </Button>
            <Button
              id="year"
              variant="contained"
              color="primary"
              onClick={() => closeYear()}
            >
              Year
            </Button>
          </div>
        ) : null}
        {showGenre ? (
          <div className="itemList">
            <FixedSizeList
              className="list"
              height={150}
              itemCount={10}
              itemSize={35}
              width={700}
            >
              {genreList}
            </FixedSizeList>
          </div>
        ) : null}
        {showPrice ? (
          <div className="itemList">
            <FixedSizeList
              className="list"
              height={150}
              itemCount={20}
              itemSize={35}
              width={700}
            >
              {Price}
            </FixedSizeList>
          </div>
        ) : null}
        {showYear ? (
          <div className="itemList">
            <FixedSizeList
              className="list"
              height={150}
              itemCount={22}
              itemSize={35}
              width={700}
            >
              {Year}
            </FixedSizeList>
          </div>
        ) : null}
      </form>
      <div className="books">
        {result.map((book) =>
          book.volumeInfo.imageLinks === undefined ? null : (
            <Link key={book.id} to={`/books/${book.id}`}>
              <img
                src={`${book.volumeInfo.imageLinks.thumbnail}`}
                alt={book.volumeInfo.title}
              />
            </Link>
          )
        )}
      </div>
      <div className="books-number">
        <select className="select-number" onChange={handleChangeMaxResult}>
          <option id="number" value={maxResult.maxValue1}>
            10
          </option>
          <option id="number" value={maxResult.maxValue2}>
            20
          </option>
          <option id="number" value={maxResult.maxValue3}>
            30
          </option>
          <option id="number" value={maxResult.maxValue4}>
            40
          </option>
        </select>
      </div>
    </MuiThemeProvider>
  );
}
