import {useEffect, useRef, useState} from "react";

type Question = {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

const QUESTION_DURATION = 15000 // 15 seconds total per question
const ANSWER_PHASE_DURATION = 10000; // First 10 seconds to answer
const JOIN_CUTOFF_DURATION = 2000; // Last 2 seconds of answer phase -> don't allow late joins
const START_TIME = new Date("2025-04-16T00:00:00Z").getTime();

export default function App() {
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [current, setCurrent] = useState<Question | null>(null)
    const [answerLocked, setAnswerLocked] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [countdown, setCountdown] = useState<number>(10)
    const [joiningLate, setJoiningLate] = useState<boolean>(false)
    const lastIndexRef = useRef<number | null>(null)

    useEffect(() => {
        fetch('/questions.json')
            .then((res) => res.json())
            .then((data) => setQuestions(data))
    }, [])

    useEffect(() => {
        if (questions.length === 0) return;

        const tick = () => {
            const now = Date.now();
            const elapsed = now - START_TIME
            const index = Math.floor(elapsed / QUESTION_DURATION) % questions.length;
            const timeInCycle = elapsed % QUESTION_DURATION

            const countdownSeconds = Math.max(0, Math.ceil((ANSWER_PHASE_DURATION - timeInCycle) / 1000))
            setCountdown(countdownSeconds)
            setCurrentIndex(index)
            setCurrent(questions[index])

            if (index !== lastIndexRef.current) {
                lastIndexRef.current = index
                const isTooLate = timeInCycle >= (ANSWER_PHASE_DURATION - JOIN_CUTOFF_DURATION)
                setJoiningLate(isTooLate)
                setSelectedOption(null)
            }

            setAnswerLocked(timeInCycle >= ANSWER_PHASE_DURATION)
            setShowAnswer(timeInCycle >= ANSWER_PHASE_DURATION)
        }

        const interval = setInterval(tick, 200)
        return () => clearInterval(interval)
    }, [questions]);

    useEffect(() => {
        setSelectedOption(null)
        setAnswerLocked(false)
        setShowAnswer(false)
    }, [currentIndex]);

    function handleAnswer(opt: string) {
        if (!answerLocked && selectedOption === null) {
            setSelectedOption(opt)
        }
    }

    function getOptionStyle(opt: string) {
        if (!showAnswer && selectedOption === opt) {
            return {backgroundColor: '#ddd'}
        }
        if (showAnswer) {
            if (opt === current?.answer) return {backgroundColor: 'green', color: 'white'}
            if (opt === current?.answer) return {backgroundColor: 'red', color: 'white'}
        }
        return {}
    }

    return (
        <div className='App'>
            <h1>Live Trivia (Synced)</h1>
            {current ? (
                joiningLate ? (
                    <div>
                        <h2>⏳ Next question starting soon...</h2>
                        <p>Please wait to join the next round!</p>
                    </div>
                ) : (
                    <div>
                        <h2>{current.question}</h2>
                        {!answerLocked ? (
                            <p>⏳ Answer revealed in: <strong>{countdown}</strong> sec</p>
                        ) : (
                            <p>🔒 Answer locked. Revealing correct answer...</p>
                        )}

                        <div>
                            {current.options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(opt)}
                                    style={{
                                        ...getOptionStyle(opt),
                                        margin: '5px',
                                        padding: '10px 20px',
                                        cursor: answerLocked ? 'default' : 'pointer'
                                    }}
                                    disabled={answerLocked || !!selectedOption}>{opt}</button>
                            ))}
                        </div>
                        <div style={{marginTop: '10px'}}>
                            {showAnswer ? (
                                selectedOption === current.answer ? (
                                    <span style={{color: 'green'}}>✅Correct!</span>
                                ) : selectedOption ? (
                                    <span style={{color: 'red'}}>
                                    ❌Incorrect! Correct answer: <strong>{current.answer}</strong>
                                </span>) : (
                                    <div style={{color: 'gray'}}>
                                        ⏳Time's up! <strong>No answer submitted.</strong><br/>
                                        Correct answer: {current.answer}
                                    </div>)
                            ) : selectedOption ? (
                                <span style={{color: 'gray'}}>Answer will be revealed soon...</span>) : (
                                <span style={{color: 'gray'}}>Pick an answer!</span>)}
                        </div>
                    </div>)
            ) : (<p>Loading questions...</p>)}
        </div>
    )
}
