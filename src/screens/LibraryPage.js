/* eslint-disable no-alert */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import qs from 'query-string';
import Button from '@material-ui/core/Button';
import {
  FormControl,
  Select,
  TextField,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  searchComponents: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '100px',
  },
  formComponents: {
    display: 'flex',
    justifyContent: 'center',
  },
  searchBar: {
    width: '700px',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: '4px',
  },
  searchSubmitButton: {
    width: 'auto',
    height: 'auto',
  },
  advancedButton: {
    width: '300px',
    height: 'auto',
  },
  advancedButtonComponents: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  themeSelect: {
    display: 'flex',
  },
  yearSelect: {
    display: 'flex',
  },
  maxResultSelect: {
    display: 'flex',
    justifyContent: 'center',
  },
  themeSubmitButton: {
    width: 'auto',
    height: '100%',
  },
  yearSubmitButton: {
    width: 'auto',
    height: '100%',
  },
  resultComponents: {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'wrap',
    padding: '100px',
  },
  resultImages: {
    width: 'auto',
    height: '200px',
    margin: '10px',
    cursor: 'pointer',
  },
}));

export default function LibraryPage() {
  const classes = useStyles();

  const themesTemplate = {
    theme1: 'Architecture',
    theme2: 'Art',
    theme3: 'Biography',
    theme4: 'Business',
    theme5: 'Computers',
    theme6: 'Education',
    theme7: 'Fiction',
    theme8: 'History',
    theme9: 'Law',
    theme10: 'Mathematics',
    theme11: 'Medical',
    theme12: 'Music',
    theme13: 'Philosophy',
  };

  const yearsTemplate = {
    year1: 1999,
    year2: 2012,
    year3: 2018,
    year4: 2021,
    year5: 2023,
  };

  const maxResultsTemplate = {
    maxResult1: 10,
    maxResult2: 20,
    maxResult3: 30,
    maxResult4: 40,
  };

  const [searchValue, setSearchValue] = useState('');
  const [resultValue, setResultValue] = useState([]);
  const [displayCategories, setDisplayCategories] = useState(false);
  const [themeValue, setThemeValue] = useState(themesTemplate.theme1);
  const [yearValue, setYearValue] = useState(yearsTemplate.year1);
  const [maxResultValue, setMaxResultValue] = useState(
    maxResultsTemplate.maxResult1
  );

  const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

  const history = useHistory();

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  const handleChangeThemeValue = (e) => {
    setThemeValue(e.target.value);
  };
  const handleChangeYearValue = (e) => {
    setYearValue(e.target.value);
  };
  const handleChangeMaxResultValue = (e) => {
    setMaxResultValue(e.target.value);
  };

  const handleSubmitSearchValue = (e) => {
    e.preventDefault();
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          searchValue +
          '&key=' +
          API_KEY +
          '&maxResults=' +
          maxResultValue
      )
      .then((res) => {
        setResultValue(res.data.items);
      });
    setSearchValue('');
  };

  const handleSubmitThemeValue = (e) => {
    e.preventDefault();
    const theme = themeValue;
    const queryString = qs.stringify({ theme }, { skipEmptyString: true });
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          theme +
          '&key=' +
          API_KEY +
          '&maxResults=' +
          maxResultValue
      )
      .then((res) => {
        setResultValue(res.data.items);
        history.push('/' + queryString ? `?${queryString}` : '');
      });
  };

  const handleSubmitYearValue = (e) => {
    e.preventDefault();
    const year = yearValue;
    const queryString = qs.stringify({ year }, { skipEmptyString: true });
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          year +
          '&key=' +
          API_KEY +
          '&maxResults=' +
          maxResultValue
      )
      .then((res) => {
        setResultValue(res.data.items);
        history.push('/' + queryString ? `?${queryString}` : '');
      });
  };

  const closeAvancedResearch = () => {
    setDisplayCategories(!displayCategories);
  };

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
      <form onSubmit={handleSubmitSearchValue}>
        <div className={classes.searchComponents}>
          <div className={classes.formComponents}>
            <TextField
              className={classes.searchBar}
              type="search"
              value={searchValue}
              placeholder="Search for Books"
              autoComplete="off"
              required
              variant="outlined"
              onChange={handleChangeSearchValue}
            />
            <Button
              className={classes.searchSubmitButton}
              type="submit"
              variant="contained"
              color="primary"
            >
              ►
            </Button>
          </div>
          <Button
            className={classes.advancedButton}
            variant="contained"
            color="primary"
            onClick={() => closeAvancedResearch()}
          >
            Advanced Research
          </Button>
        </div>
      </form>
      {displayCategories ? (
        <div className={classes.advancedButtonComponents}>
          <div className={classes.themeSelect}>
            <FormControl variant="outlined" className="form-theme">
              <Select
                value={themeValue}
                onChange={handleChangeThemeValue}
                id="select-theme"
              >
                <MenuItem value={themesTemplate.theme1}>Architecture</MenuItem>
                <MenuItem value={themesTemplate.theme2}>Art</MenuItem>
                <MenuItem value={themesTemplate.theme3}>Biography</MenuItem>
                <MenuItem value={themesTemplate.theme4}>Business</MenuItem>
                <MenuItem value={themesTemplate.theme5}>Computers</MenuItem>
                <MenuItem value={themesTemplate.theme6}>Education</MenuItem>
                <MenuItem value={themesTemplate.theme7}>Fiction</MenuItem>
                <MenuItem value={themesTemplate.theme8}>History</MenuItem>
                <MenuItem value={themesTemplate.theme9}>Law</MenuItem>
                <MenuItem value={themesTemplate.theme10}>Mathematics</MenuItem>
                <MenuItem value={themesTemplate.theme11}>Medical</MenuItem>
                <MenuItem value={themesTemplate.theme12}>Music</MenuItem>
                <MenuItem value={themesTemplate.theme13}>Philosophy</MenuItem>
              </Select>
            </FormControl>
            <form onSubmit={handleSubmitThemeValue}>
              <Button
                className={classes.themeSubmitButton}
                type="submit"
                variant="contained"
                color="primary"
              >
                ►
              </Button>
            </form>
          </div>
          <div className={classes.yearSelect}>
            <FormControl variant="outlined" className="form-year">
              <Select
                value={yearValue}
                onChange={handleChangeYearValue}
                id="select-year"
              >
                <MenuItem value={yearsTemplate.year1}>1999</MenuItem>
                <MenuItem value={yearsTemplate.year2}>2012</MenuItem>
                <MenuItem value={yearsTemplate.year3}>2018</MenuItem>
                <MenuItem value={yearsTemplate.year4}>2021</MenuItem>
                <MenuItem value={yearsTemplate.year5}>2023</MenuItem>
              </Select>
            </FormControl>
            <form onSubmit={handleSubmitYearValue}>
              <Button
                className={classes.yearSubmitButton}
                type="submit"
                variant="contained"
                color="primary"
              >
                ►
              </Button>
            </form>
          </div>
        </div>
      ) : null}
      <div className={classes.resultComponents}>
        {resultValue.map((result) =>
          result.volumeInfo.imageLinks === undefined ? null : (
            <Link key={result.id} to={`/books/${result.id}`}>
              <img
                className={classes.resultImages}
                src={`${result.volumeInfo.imageLinks.thumbnail}`}
                alt={result.volumeInfo.title}
              />
            </Link>
          )
        )}
      </div>
      <div className={classes.maxResultSelect}>
        <FormControl variant="outlined" className="form-theme">
          <Select
            value={maxResultValue}
            onChange={handleChangeMaxResultValue}
            id="select-max"
          >
            <MenuItem value={maxResultsTemplate.maxResult1}>10</MenuItem>
            <MenuItem value={maxResultsTemplate.maxResult2}>20</MenuItem>
            <MenuItem value={maxResultsTemplate.maxResult3}>30</MenuItem>
            <MenuItem value={maxResultsTemplate.maxResult4}>40</MenuItem>
          </Select>
        </FormControl>
      </div>
    </MuiThemeProvider>
  );
}
