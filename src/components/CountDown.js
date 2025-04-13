import React, { useEffect, useRef, useState } from "react";

const CountDownTimer = () => {
    const [timer, setTimer] = useState("00:00:00");
    const Ref = useRef(null);

    // Calculates the time left until deadline
    function getTimeRemaining(deadline) {
        const total = Date.parse(deadline) - Date.parse(new Date());
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const seconds = Math.floor((total / 1000) % 60);

        return { total, hours, minutes, seconds };
    }

    // Updates the timer every second
    function startTimer(deadline) {
        let { total, hours, minutes, seconds } = getTimeRemaining(deadline);

        if (total >= 0) {
            setTimer(
                `${hours < 10 ? "0" + hours : hours}:` +
                `${minutes < 10 ? "0" + minutes : minutes}:` +
                `${seconds < 10 ? "0" + seconds : seconds}`
            );
        }
    }

    function clearTimer(deadline) {
        setTimer("00:00:10");

        if (Ref.current) clearInterval(Ref.current);

        const id = setInterval(() => {
            startTimer(deadline);
        }, 1000);

        Ref.current = id;
    }

    // Sets deadline to 10 seconds from now
    function getDeadTime() {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10); //you can change time from here
        return deadline;
    }

    useEffect(() => {
        const deadline = getDeadTime();
        clearTimer(deadline);

        // Cleanup on unmount
        return () => clearInterval(Ref.current);
    }, []);

    return (
        <div className="main-div">
            <div className="countdown-timer">
                <h1>{timer}</h1>
            </div>
        </div>
    );
};

export default CountDownTimer;
