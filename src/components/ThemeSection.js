import React from 'react';
import { Link } from 'react-router-dom';
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
      name: 'Architecture',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },
    {
      id: 2,
      name: 'Art',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 3,
      name: 'Biogrpahie',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 4,
      name: 'Business',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 5,
      name: 'Computers',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 6,
      name: 'Education',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 7,
      name: 'Fiction',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },

    {
      id: 8,
      name: 'History',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },
    {
      id: 9,
      name: 'Law',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },
    {
      id: 10,
      name: 'Mathematics',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },
    {
      id: 11,
      name: 'Medical',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },
    {
      id: 12,
      name: 'Music',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },
    {
      id: 13,
      name: 'Philosophy',
      url: 'https://images-na.ssl-images-amazon.com/images/I/81chNo+roXL.jpg',
    },
  ];

  return (
    <div className={classes.themeContainer}>
      <h1>THEMES </h1>

      <div className={classes.display}>
        {themeBooks.map((theme) => (
          <Card className={classes.card} key={theme.id}>
            <Link to={`/library/${theme.name}`}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={theme.url}
                  title={theme.name}
                />
                <CardContent className={classes.content}>
                  <Typography variant="h5">{theme.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
