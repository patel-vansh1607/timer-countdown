import { useEffect, useRef } from "react";

const CountDownTimer = () => {
    const [timer, setTimer] = useState("00:00:00");
    const Ref = useRef()





    function getTimeRemaining(e) {
        const total = DataTransfer.parse(e) - Date.parse(new Date ())
    }
    function startTimer(e){
        let{total, hour, minute, seconds} - getTimeRemaining(e)
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