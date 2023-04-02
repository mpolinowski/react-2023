import { useState, useEffect } from "react";


function Timer() {
    const [count, setCount] = useState(1000);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count - 1);
      }, 1000);
    });
  
    return <h1>Countdown: T{count}s</h1>;
  }


function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => Math.pow(count, 2));
  }, [count]); // <- add the count variable here

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Add Awesomeness</button>
      <p>Awesomeness: {count}</p>
      <p>Awesomeness²: {calculation}</p>
    </>
  );
}


function LifeCycle() {
    
    return (
        <>
            <Counter />
            <Timer />
        </>
    )
  }

  export default LifeCycle