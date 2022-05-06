import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectMovieDataSection } from "../../redux/movie/movieSelector";
import Questions from "../../components/questions/questions.component";
import Header from "../../components/header/header.component";

import '../../App.css';
const MoviePage = () => {
    const param = useParams();
    const collection = useSelector(selectMovieDataSection(param.categoryId))
    return ( 
        <div className="App">
        <Header/>
            <Questions collection={collection} />
        </div>
     );
}

export default MoviePage;
