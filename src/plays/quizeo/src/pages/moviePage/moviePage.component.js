import React from 'react';
import { useSelector } from 'react-redux';
import { selectMovieDataSection } from '../../redux/movie/movieSelector';
import Questions from '../../components/questions/questions.component';

import '../../quizeo.css';

function MoviePage({ categoryId }) {
  console.log(categoryId);
  const collection = useSelector(selectMovieDataSection(categoryId));
  return (
    <div>
      <Questions collection={collection} />
    </div>
  );
}

export default MoviePage;
