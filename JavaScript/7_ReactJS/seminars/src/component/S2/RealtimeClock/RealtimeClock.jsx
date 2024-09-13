import {useEffect, useState} from "react";

export const RealtimeClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => clearInterval(timer);
    }, []);

    return (
        <p>Местое время: {time.toLocaleTimeString()}</p>
    )
}