import {formatTime} from "./utils.ts";
import {useEffect, useState} from "react";

const ANSWERING_DURATION = 15000;

export default function AnsweringCountdown() {
    const [countdown, setCountdown] = useState<number>(0);

    useEffect(() => {
        setInterval(() => {

        }, 1000)
    }, [countdown])

    return (
        <div>
            <h2>{formatTime(countdown)}</h2>
            <p>Time Remaining</p>
        </div>
    )
}