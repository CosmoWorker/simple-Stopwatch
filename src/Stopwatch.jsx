import React, { useEffect, useRef, useState } from "react";

export default function Stopwatch(){

    const [running, setRunning]=useState(false)
    const [elapsedTime, setElapsedTime]=useState(0);
    const intervalRef=useRef(null);
    const startTimeRef=useRef(0);

    useEffect(()=>{
        if (running){
            intervalRef.current=setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current);
            }, 10)
        }

        return ()=>{
            clearInterval(intervalRef.current);
        }
    }, [running])
    
    const start=()=>{
        setRunning(true)
        startTimeRef.current=Date.now() - elapsedTime;
    }

    const stop=()=>{
        setRunning(false)
    }

    const reset=()=>{
        setRunning(false)
        setElapsedTime(0)
    }

    const padZero=(num)=>{
        return num<10?"0"+num:num
    }

    const displayTime=()=>{
        let mins=Math.floor(elapsedTime/60000)
        let secs=Math.floor((elapsedTime/1000)-(mins*60))
        let mss=Math.floor(elapsedTime%1000)

        let fmins=mins!=undefined ? mins : 0
        let fsecs=secs!=undefined ? secs: 0
        let fmss=Math.floor(mss/10)

        return `${padZero(fmins)}:${padZero(fsecs)}:${padZero(fmss)}`
        
    }

    return (
        <>
            <div className="watch-container">
                <h1>{displayTime()}</h1>
                <div className="watch-btn">
                    <button className="start" onClick={start}>Start</button>
                    <button className="stop" onClick={stop}>Stop</button>
                    <button className="reset" onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}