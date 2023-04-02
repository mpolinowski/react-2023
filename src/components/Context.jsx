import { useState, createContext, useContext } from "react"

// without context
// pass prop down a chain of child components

function PropDrilling() {
    const [count] = useState(44)

    return <Child count={count} />
}

function Child({ count }) {
    return <GrandChild count={count} />
}

function GrandChild({ count }) {
    return <div>{count}</div>
}


// with context
// write prop to context to make it available to all components

const CountContext = createContext(0)

function PropContext() {
    const [count] = useState(88)

    return (
        <CountContext.Provider value={count}>
            <ChildContext count={count} />
        </CountContext.Provider>
    )
}

function ChildContext() {
    return <GrandChildContext />
}

function GrandChildContext() {
    const count = useContext(CountContext)
    return <div>{count}</div>
}


function ContextApi() {
    
    return (
        <>
            <PropDrilling />
            <PropContext />
        </>
    )
  }

export default ContextApi