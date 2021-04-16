import React from 'react';
import Button from '@material-ui/core/Button';
import { FixedSizeList } from 'react-window';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Search from '../components/Search';
import './Library.css';

export default function LibraryPage() {
  const [showCat, setShowCat] = React.useState(false);
  const [showGenre, setShowGenre] = React.useState(false);
  const [showPrice, setShowPrice] = React.useState(false);
  const [showYear, setShowYear] = React.useState(false);

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
  const genre = [
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
  ];
  /* const Aaaaa = () => {
    alert('AAAAAAAH !');
  }; */

  const genreList = ({ index, style }) => (
    <ListItem button style={style} key={index} id="item">
      <ListItemText primary={genre[index]} /* onClick={Aaaaa} */ />
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

  const books = [
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
  ];

  const [searchValue, setSearchValue] = React.useState('');
  const handleValue = (event) => {
    setSearchValue(event.target.value);
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
      <div className="research">
        <Search handleValue={handleValue} />
        <Button
          onClick={() => closeAll()}
          id="advance"
          variant="contained"
          color="primary"
        >
          Advanced Research
        </Button>
      </div>
      {showCat ? (
        <div className="advancedButtons">
          <Button
            onClick={() => closeGenre()}
            id="theme"
            variant="contained"
            color="primary"
          >
            Genre
          </Button>
          <Button
            onClick={() => closePrice()}
            id="price"
            variant="contained"
            color="primary"
          >
            Price
          </Button>
          <Button
            onClick={() => closeYear()}
            id="year"
            variant="contained"
            color="primary"
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
      <div className="books">
        {books
          .filter(
            (book) =>
              book.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              book.author.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((book) => (
            <img key={book.id} src={book.url} alt={book.name} />
          ))}
      </div>
    </MuiThemeProvider>
  );
}
