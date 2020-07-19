import React, { useState } from 'react';
import classes from './classes.sass';

export default () => {
  const [ count, setCount ] = useState(0);

  const randomize = () => {
    import('lodash').then(({ random }: { random: Function }) => {
      changeCount(random(0, 100));
    })
  }

  const changeCount = (value: number) => {
    console.log(value);
    setCount(value);
  };

  return <div className={classes.counter}>
    <div className={classes.display}>
      <button className={classes.sub} onClick={() => changeCount(count - 1)}>Sub</button>
      <span className={classes.value}>{count}</span>
      <button className={classes.add} onClick={() => changeCount(count + 1)}>Add</button>
    </div>
    <button className={classes.random} onClick={randomize}>Random</button>
  </div>
}
