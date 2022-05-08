import React from "react";
import Directory from "../../components/directory/directory.component";
import Header from "../../components/header/header.component";
import { store } from "../../redux/store";
import { setScore, setQuestionNo } from "../../redux/questions/questions-action";
import '../../Quizeo-App.css';

class QuizeoHome  extends React.Component{
    componentDidMount(){
        store.dispatch(setScore());
        store.dispatch(setQuestionNo());
    }
        
    render(){
        return ( 
        <div className="Quizeo_container">
            <Header/>
            <Directory/>
        </div>
    );

    }
}

export default QuizeoHome;