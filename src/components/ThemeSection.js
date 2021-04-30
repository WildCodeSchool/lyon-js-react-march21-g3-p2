import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './ThemeSection.css';

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
  themeContainer: {
    width: 'auto',
    height: 'auto',
    marginLeft: 200,
    marginRight: 200,
    marginTop: 100,
  },
});

export default function ThemeSection() {
  const classes = useStyles();
  const themeBooks = [
    {
      id: 1,
      name: 'Aventure',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },
    {
      id: 2,
      name: 'nom du thème',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 3,
      name: 'nom du thème',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 4,
      name: 'nom du thème',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 5,
      name: 'nom du thème',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 6,
      name: 'nom du thème',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 7,
      name: 'nom du thème',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 8,
      name: 'nom du thème',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },
  ];
  return (
    <div className={classes.themeContainer}>
      <h1>THEMES </h1>

      <div className={classes.display}>
        {themeBooks.map((book) => (
          <Card className={classes.card} key={book.id}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={book.url}
                title={book.name}
              />
              <CardContent className={classes.content}>
                <Typography variant="h5">{book.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}
