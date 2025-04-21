import {useEffect, useState} from "react";
import {formatTime} from "./utils.ts";

export default function Countdown() {
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        if (countdown === 0) return;

        const id = setInterval(() => {
            setCountdown(countdown - 1)
        }, 1000)
        return () => clearInterval(id)
    }, [countdown])

    return <h1>{formatTime(countdown)}</h1>
}