import {useEffect, useState} from "react";

export const Timer = () => {

    const [time, setTime] = useState(0);
    const [working, setWorking] = useState(false);
    const [viewButton, setViewButton] = useState(false);

    useEffect(() => {
        if (working) {
            const timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [working, time]);

    const changeWorking = () => {
        setWorking(!working);
    };
    const resetTimer = () => {
        setTime(0);
        setWorking(false);
        setViewButton(false)
    };


    return (
        <div>
            <p>Время: {time}</p>
            <button
                type='button'
                onClick={changeWorking}
            >
                <p>{(!working) ? 'Запустить таймер' : 'Остановить таймер'}</p>

            </button>
            {time > 0 && (
                <button type='button' onClick={resetTimer}>
                    <p>Сбросить таймер</p>
                </button>
            )}

        </div>
    )
}