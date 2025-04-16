import {useEffect, useState, useRef} from 'react';
import questions from './../public/questions.json';

const ANSWERING_DURATION = 15000; // 15s
const LOADING_DURATION = 1000;   // 1s
const RESULT_DURATION = 5000;    // 5s
const WAITING_DURATION = 4000;   // 4s

export default function App2(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phase, setPhase] = useState<'answering' | 'loading' | 'result' | 'waiting'>('answering');
    const [countdown, setCountdown] = useState(15);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const current = questions[currentIndex];

    useEffect(() => {
        startPhase('answering');
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [currentIndex]);

    const startPhase = (newPhase: typeof phase) => {
        if (timerRef.current) clearTimeout(timerRef.current);
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
    };

    const tickCountdown = (seconds: number) => {
        let counter = seconds;
        const interval = setInterval(() => {
            counter--;
            setCountdown(counter);
            if (counter <= 0) clearInterval(interval);
        }, 1000);
    };

    const handleSelect = (i: number) => {
        if (phase === 'answering') {
            setSelectedOption(i);
        }
    };

    return (
        <div style={{padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif'}}>
            <h2>Trivia Time!</h2>

            {phase === 'waiting' ? (
                <div style={{color: 'gray'}}>⏳ Next question starting soon...</div>
            ) : (
                <>
                    <div>
                        <strong>Time left:</strong> {countdown}s
                    </div>
                    <h3>{current.question}</h3>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {current.options.map((opt, i) => (
                            <li
                                key={i}
                                onClick={() => handleSelect(i)}
                                style={{
                                    background:
                                        showAnswer && i === current.answer
                                            ? 'lightgreen'
                                            : selectedOption === i
                                                ? 'lightblue'
                                                : 'white',
                                    padding: '8px',
                                    marginBottom: '4px',
                                    border: '1px solid #ccc',
                                    cursor: phase === 'answering' ? 'pointer' : 'default',
                                    pointerEvents: phase === 'answering' ? 'auto' : 'none',
                                }}
                            >
                                {opt}
                            </li>
                        ))}
                    </ul>

                    <div style={{marginTop: '10px'}}>
                        {phase === 'loading' && (
                            <span style={{color: 'gray'}}>Checking answer...</span>
                        )}

                        {phase === 'result' && (
                            selectedOption === current.answer ? (
                                <span style={{color: 'green'}}>✅ Correct!</span>
                            ) : selectedOption != null ? (
                                <span style={{color: 'red'}}>
                  ❌ Incorrect! Correct answer: <strong>{current.options[current.answer]}</strong>
                </span>
                            ) : (
                                <div style={{color: 'gray'}}>
                                    ⏳ Time's up! <strong>No answer submitted.</strong><br/>
                                    Correct answer: <strong>{current.options[current.answer]}</strong>
                                </div>
                            )
                        )}
                    </div>
                </>
            )}
        </div>
    );
}