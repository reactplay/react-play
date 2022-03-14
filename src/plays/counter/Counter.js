import { useState } from "react";

const Counter = (props) => {

    const [times, setTimes] = useState(0);

    function increase() {
        setTimes((prev) => {
            if (prev === props.times) {
                return 0;
            } else {
                return prev + 1;
            }
        })
    }

    function reset(){
        setTimes(0);
    }

    return (
        <div className="counter">
            <button title="Click to increment" className="counter_btn" onClick={increase}>{times}</button>
            <button className="reset_btn" onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;