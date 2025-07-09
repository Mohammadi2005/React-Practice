import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer
        if (isRunning) {
        timer = setInterval(() => {
            setSecond((prevSecond) => {
                if (prevSecond === 59) {
                    setMinute(prevMinute => prevMinute + 0.5);
                        return 0;
                    }
                    else {
                        return prevSecond + 1;
                    }
                })
            }, 1000)
        }

        return () => clearInterval(timer)
    })

    const stop = () => {
        setIsRunning(false);
    }

    const start = () => {
        setIsRunning(true);
        setSecond(0);
        setMinute(0);
    }

    const reset = () => {
        setIsRunning(false);
        setSecond(0);
        setMinute(0);
    }

    return (
        <div className="App" >
            <h1>{minute} : {second}</h1>
            <button onClick={stop}>Stop</button>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default App;
