import { useState } from 'react';
import './App.css';

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    )
}

function ConditionalRendering() {
    let content;
    if (true) {
        content = <AboutPage />
    } else {
        content = <UserProfile />
    }

    return (
        <div>
            {content}
        </div>
    )
}

function ConditionalRendering2() {
    const isSuccess = true;

    return (
        <div>
            {isSuccess ? (<AboutPage />) : (<UserProfile />)}
        </div>
    )
}

function ConditionalRendering3() {
    const isPublished = false

    return (
        <div>
            {isPublished && <UserProfile />}
        </div>
    )
}

function UserProfile() {
    const [isFollowed, setIsFollowed] = useState(false)
    const [count, setCount] = useState(0)

    const data = {
        name: 'John Doe 4',
        work: 'Software Developer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg',
        activeProjects: [
            { id: 1, name: 'Bank App' },
            { id: 2, name: 'News App' },
            { id: 3, name: 'Online Streaming App' },
        ]
    }

    function handleFollow() {
        // alert('You followed this guy!')
        setIsFollowed(!isFollowed)
    }

    function handleCount() {
        setCount(count + 1)
    } 

    return (
        <>
            <img className='profile-image' src={data.image} style={{
                width: '120px',
                height: '120px'
            }} />
            <h4>{data.name}</h4>
            <p>{data.work}</p>
            <h5>Active Projects</h5>
            <ul>
                {data.activeProjects.map(p => (
                    <li key={p.id}>{p.name}</li>
                ))}
            </ul>
            <button onClick={handleFollow}>{isFollowed ? 'Followed' : 'Follow'}</button>
            <div>
                <MyButton />
                <MyButton />
            </div>
            <div>
                <AnotherButton handleCount={handleCount} count={count} />
                <AnotherButton handleCount={handleCount} count={count} />
            </div>
        </>
    )
}

function JustText() {
    return (
        <h1 className="text-red">Just a text red</h1>
    )
}

function AnotherButton({ count, handleCount }) {
    return (
        <button onClick={handleCount}>Shared count {count}</button>
    )
}

function MyButton() {
    const [count, setCount] = useState(0)

    function handleCount() {
        setCount(count + 1)
    }
    return (
        <button onClick={handleCount}>Button clicked {count} times</button>
    )
}

function App() {

    return (
        <>
            <h1>Hello, World!</h1>
            <MyButton />
            <JustText />
            <UserProfile />
        </>
    )
}

export default App
