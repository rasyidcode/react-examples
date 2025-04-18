import {useCallback, useEffect, useRef, useState} from "react";
import questions from "./questions.json";

const ANSWERING_DURATION = 15000;
const LOADING_DURATION = 2000;
const RESULT_DURATION = 3000;
const WAITING_DURATION = 10000;
const START_TIME = new Date('2025-04-16T00:00:00Z');

export default function App3() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phase, setPhase] = useState<'answering' | 'loading' | 'result' | 'waiting'>('answering');
    const [countdown, setCountdown] = useState(15);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const current = questions[currentIndex];

    const startPhase = useCallback((newPhase: typeof phase) => {
        if (timerRef.current) clearInterval(timerRef.current);

        // noinspection DuplicatedCode
        setPhase(newPhase);

        let duration = 0;
        switch (newPhase) {
            case 'answering':
                duration = ANSWERING_DURATION;
                setCountdown(ANSWERING_DURATION / 1000);
                setSelectedOption(null);
                setShowAnswer(false);
                tickCountdown(ANSWERING_DURATION / 1000);
                break;
            case 'loading':
                duration = LOADING_DURATION;
                break;
            case 'result':
                duration = RESULT_DURATION;
                setShowAnswer(true);
                break;
            case 'waiting':
                duration = WAITING_DURATION;
                break;
        }

        timerRef.current = setInterval(() => {
            if (newPhase === 'answering') {
                startPhase('loading');
            } else if (newPhase === 'loading') {
                startPhase('result');
            } else if (newPhase === 'result') {
                startPhase('waiting');
            } else if (newPhase === 'waiting') {
                setCurrentIndex((prev) => (prev + 1) % questions.length);
            }
        }, duration);
    }, []);

    function tickCountdown(seconds: number) {
        let counter = seconds;
        const interval = setInterval(() => {
            counter--;
            setCountdown(counter);
            if (counter <= 0) clearInterval(interval);
        }, 1000);
    }

    useEffect(() => {
        startPhase('answering');
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        }
    }, [currentIndex, startPhase])

}