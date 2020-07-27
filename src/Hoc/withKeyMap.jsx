import React, { useState, forwardRef, createRef } from 'react';


export default (Component) => forwardRef(({ tabIndex = '0', ...props }, ref) => {
  const [ keys, setKeys ] = useState({});
  const refKey = createRef();
  const actions = (event) => {
    const action = keys[event.key];
    if (action) {
      event.preventDefault();
      event.stopPropagation();
      action(event);
    }
    return event;
  };
  return <div onKeyDown={actions} ref={refKey} tabIndex={tabIndex}>
    <Component ref={ref} {...props} actionKeys={actions} focusKeys={() => refKey.current.focus()} setKeys={setKeys} />
  </div>;
});
