import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectMovieDataSection } from "../../redux/movie/movieSelector";
import Questions from "../../components/questions/questions.component";

const MoviePage = () => {
    const param = useParams();
    console.log(param.categoryId);
    const collection = useSelector(selectMovieDataSection(param.categoryId))
    return ( 
        <div>
            <Questions collection={collection} />
        </div>
     );
}

export default MoviePage;
