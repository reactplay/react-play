import React from "react";
import { useSelector } from 'react-redux'
import { selectMovieDataSection } from "../../redux/movie/movieSelector";
import Questions from "../../components/questions/questions.component";
import Header from "../../components/header/header.component";

import '../../quizeo.css'
const MoviePage = ({categoryId}) => {
    console.log(categoryId);
    const collection = useSelector(selectMovieDataSection(categoryId))
    return ( 
        <div>
            <Header/>
            <Questions collection={collection} />
        </div>
    );
}

export default MoviePage;
