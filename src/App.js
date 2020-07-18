import React, { useState } from 'react';


export default (props) => {
  const [ count, setCount ] = useState(0);
  return <div>
    APP
    <button onClick={() => {console.log(count + 1); setCount(count + 1)}}>Add</button>
    <div>{count}</div>
    <button onClick={() => {console.log(count - 1); setCount(count - 1)}}>Sub</button>
  </div>
}
