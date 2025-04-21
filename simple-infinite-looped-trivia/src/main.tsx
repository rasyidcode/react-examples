import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
// import AnsweringCountdown from "./AnsweringCountdown.tsx";
import Clock from "./Clock.tsx";
import Countdown from "./Countdown.tsx";
// import App from './App.tsx'
// import App2 from './App2.tsx'
// import DotaTriviaApp from "./DotaTriviaApp.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<App />*/}
        {/*<App2/>*/}
        {/*<DotaTriviaApp />*/}
        {/*<AnsweringCountdown />*/}
        <Clock />
        <Countdown />
    </StrictMode>,
)
