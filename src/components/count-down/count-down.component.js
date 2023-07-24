import './count-down.component.scss';
import {useCallback, useEffect, useState} from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export function CountDownComponent() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const updateClock = useCallback(() => {
        const now = new Date();
        const targetDate = new Date('2023-09-17T16:00:00');

        const diff = targetDate - now;

        const days = Math.floor(diff / DAY);

        const hours = Math.floor((diff % DAY ) / HOUR);

        const minutes = Math.floor(((diff % DAY ) % HOUR) / MINUTE);

        const seconds = Math.floor((((diff % DAY ) % HOUR) % MINUTE) / SECOND);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }, []);

    useEffect(() => {
        setInterval(updateClock, 1000);
    }, [updateClock])

    return (
        <div className="countdown-wrapper">
            <div className="time-section">
                <div className="time">{days}</div>
                <small className="time-text">Days</small>
            </div>
            <div className="time-section">
                <div className="time">{hours}</div>
                <small className="time-text">Hours</small>
            </div>
            <div className="time-section">
                <div className="time">{minutes}</div>
                <small className="time-text">Min</small>
            </div>
            <div className="time-section">
                <div className="time">{seconds}</div>
                <small className="time-text">Sec</small>
            </div>
        </div>
    )
}
