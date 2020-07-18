import React, { useState } from 'react';
import style from './styles.sass';

export default (props) => {
  const [ count, setCount ] = useState(0);

  const randomize = () => {
    import('lodash').then(({ random }) => {
      changeCount(random(0, 100));
    })
  }

  const changeCount = (value) => {
    console.log(value);
    setCount(value);
  };

  return <div className={style.counter}>
    <div className={style.display}>
      <button className={style.sub} onClick={() => changeCount(count - 1)}>Sub</button>
      <span className={style.value}>{count}</span>
      <button className={style.add} onClick={() => changeCount(count + 1)}>Add</button>
    </div>
    <button className={style.random} onClick={randomize}>Random</button>
  </div>
}
