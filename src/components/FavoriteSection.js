import './FavoriteSection.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 250,
    height: '100%',
    margin: 50,
    transition: '0.3s',
    boxShadow: '1px 1px 5px rgba(0,0,0,0.3)',
    borderRadius: '10px',
    '&:hover': {
      boxShadow: '1px 1px 20px 5px rgba(0,0,0,0.3)',
    },
  },
  media: {
    height: 100,
    paddingTop: '100%',
  },
  display: {
    display: 'flex',
    justifyContent: 'space-around',
    flexFlow: 'wrap',
  },
  content: {
    textAlign: 'left',
    color: '#ecc39f',
    backgroundColor: 'white',
    height: 'auto',
  },
  favoriteContainer: {
    width: 'auto',
    height: 'auto',
    marginLeft: 200,
    marginRight: 200,
    marginTop: 100,
  },
});

export default function FavoriteSection() {
  const classes = useStyles();
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=HarryPotter&maxResults=4'
      )
      .then((res) => {
        setResult(res.data.items);
      });
  }, []);

  return (
    <div className={classes.favoriteContainer}>
      <h1> COUPS DE COEUR</h1>
      <div className={classes.display}>
        {result.map((book) =>
          book.volumeInfo.imageLinks === undefined ? null : (
            <Card className={classes.card} key={book.id}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  title={book.title}
                />
                <CardContent className={classes.content}>
                  <Typography variant="h5">{book.volumeInfo.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
