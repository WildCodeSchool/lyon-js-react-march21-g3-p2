import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  themeContainer: {
    width: 'auto',
    height: 'auto',
    marginLeft: 200,
    marginRight: 200,
    marginTop: 100,
  },
  titreContainer: {
    color: '#333355',
    fontFamily: 'Raleway',
    fontWeight: 'lighter',
    textAlign: 'left',
    fontSize: '3em',
    margin: 50,
  },
  display: {
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'wrap',
  },
  content: {
    backgroundColor: 'white',
    height: 'auto',
  },
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
  nomTheme: {
    color: '#333355',
    fontFamily: 'Raleway',
  },
  lien: {
    textDecoration: 'none',
  },
});

export default function ThemeSection() {
  const classes = useStyles();

  const themeBooks = [
    {
      id: 1,
      name: 'Architecture',
      url: 'https://i.imgur.com/UfmE6Z3.jpg',
    },
    {
      id: 2,
      name: 'Art',
      url: 'https://i.imgur.com/6heG1r0.jpg',
    },

    {
      id: 3,
      name: 'Biogrpahie',
      url: 'https://i.imgur.com/mm0iqSx.jpg',
    },

    {
      id: 4,
      name: 'Business',
      url: 'https://i.imgur.com/d1UAxzF.jpg',
    },

    {
      id: 5,
      name: 'Computers',
      url: 'https://i.imgur.com/8HTyMqd.jpg',
    },

    {
      id: 6,
      name: 'Education',
      url: 'https://i.imgur.com/TPzC7du.jpg',
    },

    {
      id: 7,
      name: 'Fiction',
      url: 'https://i.imgur.com/ic4B0YB.jpg',
    },

    {
      id: 8,
      name: 'History',
      url: 'https://i.imgur.com/fxRkrUy.jpg',
    },
    {
      id: 9,
      name: 'Law',
      url: 'https://i.imgur.com/c7jI5iu.jpg',
    },
    {
      id: 10,
      name: 'Mathematics',
      url: 'https://i.imgur.com/mnKLOqN.jpg',
    },
    {
      id: 11,
      name: 'Medical',
      url: 'https://i.imgur.com/IaYHPKi.jpg',
    },
    {
      id: 12,
      name: 'Music',
      url: 'https://i.imgur.com/fs7ww1Z.jpg',
    },
    {
      id: 13,
      name: 'Philosophy',
      url: 'https://i.imgur.com/t5hFZQV.jpg',
    },
  ];

  //  div titreContainer normalement h1 mais en conflit avec le css de book detail
  return (
    <div className={classes.themeContainer}>
      <div className={classes.titreContainer}>THEMES</div>

      <div className={classes.display}>
        {themeBooks.map((theme) => (
          <Card className={classes.card} key={theme.id}>
            <Link className={classes.lien} to={`/library/${theme.name}`}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={theme.url}
                  title={theme.name}
                />
                <CardContent className={classes.content}>
                  <Typography className={classes.nomTheme} variant="h5">
                    {theme.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
