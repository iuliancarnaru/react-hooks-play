import React, { useState, useEffect, Fragment } from 'react'

const AppFunction = () => {

    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);

    // useEffect is triggered after each render
    useEffect(() => {
        document.title = `You have clicked ${count} times`;
    })

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const toggleLight = () => {
        setIsOn(prevIsOn => !prevIsOn)
    }

    return (
        <Fragment>
            <h2>Counter Hooks</h2>
            <button onClick={incrementCount}>I was clicked {count} times</button>
            <h2>Toggle light</h2>
            <img
                src={
                    isOn 
                        ? 'https://icon.now.sh/highlight/fd0'
                        : 'https://icon.now.sh/highlight/aaa'}
                style={{
                height: '50px',
                width: '50px',
                }}
                onClick={toggleLight}
                alt="Flashlight">
            </img>
        </Fragment>
        
    )
}

export default AppFunction;
