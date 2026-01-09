//imports//
import { useEffect, useRef, useState } from "react";

function TimerPage() {
    const[seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect (() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setSeconds(s => s +1);
            }, 1000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [running]);

    const handleStart = () => setRunning(true);
    const handleStop = () => {
        setRunning(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };
    const handleReset = () => {
        handleStop();
        setSeconds(0);
    };

    return (
        <section>
            <h2>useEffet & useRef - Timer</h2>
            <p>Elapsed: {seconds}s</p>
            <button onClick={handleStart} disabled={running}>Start</button>
            <button onClick={handleStop} disabled={!running}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    );
}

export default TimerPage;