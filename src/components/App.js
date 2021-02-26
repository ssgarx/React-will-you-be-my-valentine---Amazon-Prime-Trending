import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';
const App = ({ slides }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index === 0) {
      document.querySelector('[data-testid="button-prev"]').disabled = true;
      document.querySelector('[data-testid="button-restart"]').disabled = true;
      document.querySelector('[data-testid="button-next"]').disabled = false;
    }
    else if (index === slides.length - 1) {
      document.querySelector('[data-testid="button-prev"]').disabled = false;
      document.querySelector('[data-testid="button-restart"]').disabled = false;
      document.querySelector('[data-testid="button-next"]').disabled = true;
    } else {
      document.querySelector('[data-testid="button-prev"]').disabled = false;
      document.querySelector('[data-testid="button-restart"]').disabled = false;
      document.querySelector('[data-testid="button-next"]').disabled = false;
    }
  }, [index]);
  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
      <button
        data-testid="button-restart"
        onClick={() => setIndex((prevIdx) => 0)}
      >
        Restart
      </button>
      <button
        data-testid="button-prev"
        onClick={() =>
          setIndex((prevIdx) => (prevIdx > 0 ? prevIdx - 1 : prevIdx)
          )
        }
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        onClick={() =>
          setIndex((prevIdx) =>
            prevIdx < slides.length - 1 ? prevIdx + 1 : prevIdx)
        }
      >
        Next
      </button>
    </>
  );
};
export default App;