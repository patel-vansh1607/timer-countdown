import { useEffect, useRef } from "react";

const CountDownTimer = () => {
    const [timer, setTimer] = useState("00:00:00");
    const Ref = useRef()





    function getTimeRemaining(e) {
        const total = DataTransfer.parse(e) - Date.parse(new Date ())
        const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
        const minute = Math.floor((total / 1000 / 60) % 60);
        const seconds = Math.floor((total / 1000) % 60);

        return{total, hour, minute, seconds}
    }
    function startTimer(e){
        let{total, hour, minute, seconds} - getTimeRemaining(e)
        if (total >=0) {
            setTimer(
                (hour < 10 ? "0" + hour : hour) + ":" +
                (minute < 10 ? "0" + minute : minute) + ":" +
                (seconds < 10 ? "0" + seconds : seconds)
            )
        }
    }






    function clearTimer(e){
        setTimer("00:00:10")
        if (Ref.current) {
            clearInterval(Ref.current);
            const id = setInterval(() => {
                startTimer(e)
            }, 1000)
        }
        Ref.current = id;
    }       
    function getDeadTime(){
        let deadline = new Date()
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
     useEffect (() => {
        getDeadTime( )
     }, [])
    return(
        <div className="main-div">
            <div className="countdown-timer">

            </div>
        </div>
    )
}

export default CountDownTimer 