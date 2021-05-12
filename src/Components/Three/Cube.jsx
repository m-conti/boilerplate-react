import React, { useState, useRef } from 'react';

import useMouseMove from 'Hooks/useMouseMove';
import useEventListener from 'Hooks/useEventListener';

import { SPEED_CUBE_ROTATION } from 'helpers/constans/three';

import CubeBox from './CubeBox';

const createCubeBoxFromIndex = (index) => <CubeBox
  key={index}
  position={[ (index % 3) - 1, (Math.trunc(index / 3) % 3) - 1, Math.trunc(index / 9) - 1 ]}
/>;

const Cube = () => {

  const cube = useRef();

  const [boxes] = useState(() => Array.from(Array(27), (_, index) => createCubeBoxFromIndex(index)));

  // ROTATE CUBE
  const [ needRotate, setNeedRotate ] = useState(false);
  useMouseMove(needRotate, (x, y) => {
    cube.current.rotation.x += (y * SPEED_CUBE_ROTATION);
    cube.current.rotation.y += (x * SPEED_CUBE_ROTATION);
  });
  useEventListener('mouseup', () => { setNeedRotate(false); });

  return <group
    onPointerDown={() => setNeedRotate(true)}
    position={[ 0, 0, 0 ]}
    ref={cube}
  >{boxes}</group>;
};

export default Cube;
