import React from "react";
import { selectDirectorySection } from "../../redux/directory/directory-selectors";
import MoviePage from "../../pages/moviePage/moviePage.component";
import { useSelector} from 'react-redux';
import MenuItem from "../menu-item/menuItem.component";
import { selectQuestionIndex, selectClickedAction} from "../../redux/movie/movieSelector";

import './directory.styles.css';
const Directory = () => { 

    let questionIndex = useSelector(selectQuestionIndex);
    let isClick = useSelector(selectClickedAction);
    const sections = useSelector(selectDirectorySection);

    return (
        <div>
            {
                isClick ? <MoviePage categoryId={questionIndex}/> :  
                <div className="directoryMenu">
                    {sections.map(({id, ...otherSectionComponent}) => (
                    <MenuItem key={id} {...otherSectionComponent}/>
                ))}
                </div>
            }
        </div>
    );
}

export default Directory;