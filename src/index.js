import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/seed/picsum/200/300?grayscale";
ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="food-img" alt="not-load" src={img} />
      <img
        className="food-img"
        src="https://image.shutterstock.com/image-photo/urbana-illinois-april-17-2016-600w-1037739901.jpg"
        alt="none"
      />
      <img
        className="food-img"
        alt="lol"
        src="https://image.shutterstock.com/image-photo/college-building-fall-600w-238536373.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
