import { useEffect, useRef } from "react";

const CountDownTimer = () => {
    const [timer, setTimer] = useState("00:00:00");
    const Ref = useRef()
     useEffect (() => {
        getDeadTime( )
     })
    return(
        <div className="main-div">
            <div className="countdown-timer">

            </div>
        </div>
    )
}

export default CountDownTimer 