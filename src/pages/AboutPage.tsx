import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage = () => {
  const history = useHistory();

  return (
    <>
      <h1>Страница информации</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam corporis veritatis error rem laudantium repellendus cum minima id explicabo fuga.</p>
      <button
        onClick={() => history.push('/')}
        className="btn"
      >
        Обратно к списку дел
      </button>
    </>
  );
};

export default AboutPage;
