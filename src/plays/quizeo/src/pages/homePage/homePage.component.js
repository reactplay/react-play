import React from "react";
import Directory from "../../components/directory/directory.component";
import { store } from "../../redux/store";
import { setScore, setQuestionNo } from "../../redux/questions/questions-action";

class Home  extends React.Component{
    componentDidMount(){
        store.dispatch(setScore());
        store.dispatch(setQuestionNo());
    }
        
    render(){
        return ( 
        <div>
            <Directory/>
        </div>
    );

    }
}

export default Home;