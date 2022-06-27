
export const calculateScore = (score, answer) =>{
    if(answer.answer){
        if(answer.answer === answer.correct){
            score = score + 1
            return score;
        }else{
            return score;
        }
    }
}