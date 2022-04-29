
export const calculateScore = (score, answer) =>{
    // eslint-disable-next-line eqeqeq
    if(answer.answer){
        if(answer.answer === answer.correct){
            score = score + 1
            return score;
        }else{
            return score;
        }
    }
}