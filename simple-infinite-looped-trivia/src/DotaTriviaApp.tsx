import './prototypes.ts';
import './DotaTriviaApp.css';
import {useCallback, useEffect, useRef, useState} from "react";
import {formatTime} from "./utils.ts";
import questions from "./dota_triva_questions.json"

const ANSWERING_DURATION = 15000;
const LOADING_DURATION = 2000;
const RESULT_DURATION = 3000;
const WAITING_DURATION = 10000;

export default function DotaTriviaApp() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [countdown, setCountdown] = useState<number>(0);
    const [waitingCountdown, setWaitingCountdown] = useState<number>(0);
    const [phase, setPhase] = useState<'answering' | 'loading' | 'result' | 'waiting'>('answering');
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const currentQuestion = questions[currentIndex]
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // noinspection DuplicatedCode
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
                setWaitingCountdown(WAITING_DURATION / 1000);
                tickWaitingCountdown(WAITING_DURATION / 1000);
                break;
        }

        // noinspection DuplicatedCode
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

    // noinspection DuplicatedCode
    const tickCountdown = (seconds: number) => {
        let counter = seconds;
        const interval = setInterval(() => {
            counter--;
            setCountdown(counter);
            if (counter <= 0) clearInterval(interval);
        }, 1000);
    };

    const tickWaitingCountdown = (seconds: number) => {
        let counter = seconds;
        const interval = setInterval(() => {
            counter--;
            setWaitingCountdown(counter);
            if (counter <= 0) clearInterval(interval);
        }, 1000);
    };

    const handleAnswer = (opt: string) => {
        if (phase === 'answering' && selectedOption === null) {
            setSelectedOption(opt);
        }
    };

    useEffect(() => {
        startPhase('answering');
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        }
    }, [currentIndex, startPhase])

    return (
        <div className='dota-trivia-app'>
            <h1>Queue Time Trivia</h1>
            <div className='dota-trivia-app__question-wrapper'>
                <p>{currentQuestion.question.text}</p>
                <div className='dota-trivia-app__question-content'>
                    <img src={currentQuestion.question.content} alt='Question Content'/>
                </div>
            </div>
            <div className='dota-trivia-app__options'>
                {currentQuestion.options.map((opt, i) => ( // add shuffle
                    <button key={i}
                            onClick={() => handleAnswer(opt)}
                            style={{
                                background:
                                    (phase === "result" && opt === currentQuestion.answer)
                                    || (phase === 'waiting' && opt === currentQuestion.answer)
                                        ? 'lightgreen'
                                        : 'white',
                                cursor: phase === 'answering' && selectedOption === null ? 'pointer' : 'default',
                                pointerEvents: phase === 'answering' && selectedOption === null ? 'auto' : 'none',
                                opacity: selectedOption !== null && selectedOption !== opt ? 0.6 : 1,
                            }}
                            disabled={phase !== 'answering' || selectedOption !== null}>
                        <span>{['A', 'B', 'C', 'D'][i]}</span>
                        {phase === 'result'
                            && opt === currentQuestion.answer
                            && selectedOption !== null
                            && selectedOption === currentQuestion.answer
                            && <span>✅</span>}
                        {phase === 'result'
                            && opt === selectedOption
                            && selectedOption !== null
                            && selectedOption !== currentQuestion.answer
                            && (<span>❌</span>)}
                        {opt}
                    </button>
                ))}
            </div>
            <div className='dota-trivia-app__states'>
                {phase === 'answering' && (<div>
                    <h2>{formatTime(countdown)}</h2>
                    <p>Time Remaining</p>
                </div>)}
                {phase === 'loading' && (<span>Loading...</span>)}
                {phase === 'result' && (
                    selectedOption === currentQuestion.answer ? (
                        <span style={{color: 'green', textTransform: 'uppercase'}}>Correct!</span>
                    ) : selectedOption != null ? (
                        <span style={{color: 'red', textTransform: 'uppercase'}}>Incorrect!</span>
                    ) : (
                        <div style={{color: 'gray'}}>
                            ⏳ Time's up! <strong>No answer submitted.</strong><br/>
                        </div>
                    )
                )}
            </div>
            <div className='dota-trivia-app__footer'>
                <p style={{visibility: phase === 'waiting' ? 'visible' : 'hidden'}}>Next question
                    in {formatTime(waitingCountdown)}</p>
                <p>#{currentIndex + 1}</p>
            </div>
        </div>
    )
}