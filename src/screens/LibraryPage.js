/* eslint-disable no-alert */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import qs from 'query-string';
import Button from '@material-ui/core/Button';
import {
  FormControl,
  Select,
  TextField,
  MenuItem,
  makeStyles,
  InputLabel,
} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down('sm')]: {
      width: '200px',
    },
  },
  searchSubmitButton: {
    width: 'auto',
    height: 'auto',
  },
  advancedButtonComponents: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  themeSelect: {
    width: '100px',
  },
  yearSelect: {
    width: '80px',
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

  const { theme } = useParams();

  const [searchValue, setSearchValue] = useState('');
  const [resultValue, setResultValue] = useState([]);
  const [themeValue, setThemeValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [maxResultValue, setMaxResultValue] = useState(
    maxResultsTemplate.maxResult1
  );

  const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

  const history = useHistory();

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  const handleChangeMaxResultValue = (e) => {
    setMaxResultValue(e.target.value);
  };

  useEffect(() => {
    if (theme) {
      setThemeValue(theme);
    }
  }, []);

  useEffect(() => {
    const searchTerms = [];
    const searchResults = [];

    if (themeValue) {
      searchTerms.push(themeValue);
    }

    if (yearValue) {
      searchTerms.push(yearValue);
    }

    if (maxResultValue) {
      searchResults.push(maxResultValue);
    }

    if (searchTerms?.length) {
      const queryString = qs.stringify(
        { themeValue },
        { skipEmptyString: true }
      );
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?q=' +
            searchTerms.join('+') +
            '&key=' +
            API_KEY +
            '&maxResults=' +
            searchResults
        )
        .then((res) => {
          setResultValue(res.data.items);
          history.push('/' + queryString ? `?${queryString}` : '');
        });
    }
  }, [themeValue, yearValue, maxResultValue]);

  const handleSubmitSearchValue = (e) => {
    e.preventDefault();
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=Search' +
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

  useEffect(() => {
    setThemeValue(theme);
  }, []);

  const muiTheme = createMuiTheme({
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
    <MuiThemeProvider theme={muiTheme}>
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
              onClick={() => setSearchValue(TextField.value)}
              className={classes.searchSubmitButton}
              type="button"
              variant="contained"
              color="primary"
            >
              ►
            </Button>
          </div>
        </div>
      </form>
      <div className={classes.advancedButtonComponents}>
        <FormControl variant="outlined" className="form-theme">
          <InputLabel id="input-theme">Theme</InputLabel>
          <Select
            value={themeValue}
            onChange={(event) => setThemeValue(event.target.value)}
            className={classes.themeSelect}
            label="Theme"
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
        <FormControl variant="outlined" className="form-year">
          <InputLabel id="input-year">Year</InputLabel>
          <Select
            value={yearValue}
            onChange={(event) => setYearValue(event.target.value)}
            className={classes.yearSelect}
            label="Year"
          >
            <MenuItem value={yearsTemplate.year1}>1999</MenuItem>
            <MenuItem value={yearsTemplate.year2}>2012</MenuItem>
            <MenuItem value={yearsTemplate.year3}>2018</MenuItem>
            <MenuItem value={yearsTemplate.year4}>2021</MenuItem>
            <MenuItem value={yearsTemplate.year5}>2023</MenuItem>
          </Select>
        </FormControl>
      </div>
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
