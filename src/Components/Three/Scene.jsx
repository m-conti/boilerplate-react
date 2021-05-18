import React, { useRef } from 'react';

import withKeyMap from 'Hoc/withKeyMap';
import useMount from 'Hooks/useMount';

import { ROTATIONS } from 'helpers/constans/three';

import { Canvas } from '@react-three/fiber';
import Cube from 'Components/Three/Cube';

const SceneComponent = (props) => {

  const cube = useRef();

  const performRotationWithKey = (rot) => cube.current.performRotation(rot.axis, rot.location, rot.rotation);

  useMount(() => {
    props.setKeys({
      'u': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.UP),
      'U': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.UP2),
      'd': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.DOWN),
      'D': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.DOWN2),
      'l': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.LEFT),
      'L': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.LEFT2),
      'r': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.RIGHT),
      'R': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.RIGHT2),
      'f': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.FRONT),
      'F': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.FRONT2),
      'b': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.BACK),
      'B': () => cube.current.isAnimate() || performRotationWithKey(ROTATIONS.BACK2),
    });
    props.focusKeys();
  });
  return (
    <Canvas style={{ height: 800, width: 1000 }}>
      <ambientLight intensity={0.5} />
      <spotLight angle={0.15} penumbra={1} position={[ 10, 10, 10 ]} />
      <pointLight position={[ -10, -10, -10 ]} />
      <Cube ref={cube} />
    </Canvas>
  );
};

export default withKeyMap(SceneComponent);
