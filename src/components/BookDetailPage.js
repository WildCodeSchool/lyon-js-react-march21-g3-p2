import React from 'react';
import './bookDetailPage.css';

const title = 'Les aventures de Benoît';
const authorName = 'Benoît REDONDO';
const averageNote = '🤩🤩🤩';
// eslint-disable-next-line prettier/prettier
const cloudWord =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias corporis enim deleniti possimus dolorem facilis tenetur porroexercitationem  ipsa eligendi velit reprehenderit. Cumque rem, quos sint doloribus voluptas ex delectus';

//* *Je créée ma fonction :

function BookDetailPage() {
  return (
    <>
      <div id="wrap">
        <div id="coverbook">image</div>
        <h2 id="title">{title}</h2>
        <h2 id="authorName">{authorName}</h2>
        <h1 id="averageNote">{averageNote}</h1>
        <h3 id="description">{cloudWord}</h3>
        <div id="media">Media</div>
        <div id="place">Where all scenes took place</div>
        <div id="specification">Details about the book</div>
      </div>
    </>
  );
}

export default BookDetailPage;
