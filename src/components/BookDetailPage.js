import React from 'react';
import './bookDetailPage.css';

const title = 'Les aventures de Benoît';
const authorName = 'Benoît REDONDO';
const averageNote = '🤩🤩🤩';
// eslint-disable-next-line prettier/prettier
const cloudWord =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias corporis enim deleniti possimus dolorem facilis tenetur porroexercitationem  ipsa eligendi velit reprehenderit. Cumque rem, quos sint doloribus voluptas ex delectus';
const bookCover = 'https://i.ibb.co/tpj91z3/9782265144286-475x500-1.webp';

//* *Je créée ma fonction :

function BookDetailPage() {
  return (
    <>
      <div id="wrapHeader">
        <img src={bookCover} alt="première de couverture :{title} " />
        <h1 id="title">{title}</h1>
        <h1 id="authorName">{authorName}</h1>
        <h1 id="averageNote">{averageNote}</h1>
        <h1 id="description">{cloudWord}</h1>
      </div>

      <div id="wrapFooter">
        <div id="media">Media</div>
        <div id="place">Where all scenes took place</div>
        <div id="specification">Details about the book</div>
      </div>
    </>
  );
}

export default BookDetailPage;
