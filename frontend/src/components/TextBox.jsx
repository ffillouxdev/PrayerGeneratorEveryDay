// TextBox.jsx

import React from 'react';

const TextBox = ({ imageUrl, linkUrl, altText, title, description }) => {
  return (
    <div className="text-box">
      <img src={imageUrl} alt={altText} />
      <a href={linkUrl} target='_blank'><h3>{title}</h3></a>
      <p>{description}</p>
    </div>
  );
};

export default TextBox;
