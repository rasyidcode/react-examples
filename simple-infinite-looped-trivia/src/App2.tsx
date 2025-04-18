import {useEffect, useState, useRef, useCallback} from 'react';
import questions from './questions.json';

const ANSWERING_DURATION = 10000; // 10s
const LOADING_DURATION = 2000;   // 2s
const RESULT_DURATION = 3000;    // 3s
const WAITING_DURATION = 3000;   // 3s
// const FULL_CYCLE = ANSWERING_DURATION + LOADING_DURATION + RESULT_DURATION + WAITING_DURATION
// const START_TIME = new Date('2025-04-16T00:00:00Z')

export default function App2() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phase, setPhase] = useState<'answering' | 'loading' | 'result' | 'waiting'>('answering');
    const [countdown, setCountdown] = useState(15);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const current = questions[currentIndex];

    const startPhase = useCallback((newPhase: typeof phase) => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setPhase(newPhase);

        let duration = 0;
        switch (newPhase) {
            case 'answering':
                duration = ANSWERING_DURATION;
                setCountdown(ANSWERING_DURATION / 1000);
                setSelectedOption(null);
                tickCountdown(ANSWERING_DURATION / 1000);
                break;
            case 'loading':
                duration = LOADING_DURATION;
                break;
            case 'result':
                duration = RESULT_DURATION;
                break;
            case 'waiting':
                duration = WAITING_DURATION;
                break;
        }

        timerRef.current = setTimeout(() => {
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

    useEffect(() => {
        startPhase('answering');
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [currentIndex, startPhase]);

    const tickCountdown = (seconds: number) => {
        let counter = seconds;
        const interval = setInterval(() => {
            counter--;
            setCountdown(counter);
            if (counter <= 0) clearInterval(interval);
        }, 1000);
    };

    const handleSelect = (opt: string) => {
        if (phase === 'answering' && selectedOption === null) {
            setSelectedOption(opt);
        }
    };

    return (
        <div style={{padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif'}}>
            <h2>Trivia Time!</h2>
            <div>
                <strong>Time left:</strong> {countdown}s
            </div>
            <h3>{current.question}</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
                {current.options.map((opt, i) => (
                    <li
                        key={i}
                        onClick={() => handleSelect(opt)}
                        style={{
                            background:
                                phase === "result" && opt === current.answer
                                    ? 'lightgreen'
                                    : selectedOption === opt
                                        ? 'lightblue'
                                        : 'white',
                            padding: '8px',
                            marginBottom: '4px',
                            border: '1px solid #ccc',
                            cursor: phase === 'answering' && selectedOption === null ? 'pointer' : 'default',
                            pointerEvents: phase === 'answering' && selectedOption === null ? 'auto' : 'none',
                            opacity: selectedOption !== null && selectedOption !== opt ? 0.6 : 1,
                        }}
                    >
                        {opt}
                    </li>
                ))}
            </ul>

            <div style={{marginTop: '10px'}}>
                {phase === 'answering' && (<span style={{color: 'gray'}}>Pick an answer...</span>)}

                {phase === 'waiting' && (<span style={{color: 'gray'}}>⏳ Next question starting soon...</span>)}

                {phase === 'loading' && (
                    <span style={{color: 'gray'}}>Checking answer...</span>
                )}

                {phase === 'result' && (
                    selectedOption === current.answer ? (
                        <span style={{color: 'green'}}>✅ Correct!</span>
                    ) : selectedOption != null ? (
                        <span style={{color: 'red'}}>
                  ❌ Incorrect! Correct answer: <strong>{current.answer}</strong>
                </span>
                    ) : (
                        <div style={{color: 'gray'}}>
                            ⏳ Time's up! <strong>No answer submitted.</strong><br/>
                            Correct answer: <strong>{current.answer}</strong>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}