import React, { FunctionComponent, useState } from 'react';

interface CounterProps {
  initial?: number 
}
// our components props accept a number for the initial value
const Counter:FunctionComponent<CounterProps> = (props) => {
  const { initial = 0 } = props;
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  const [clicks, setClicks] = useState(initial);
  return (<>
    <p>Clicks: {clicks}</p>
    <button onClick={() => setClicks(clicks+1)}>+</button>
    <button onClick={() => setClicks(clicks-1)}>-</button>
  </>)
}

export default Counter;