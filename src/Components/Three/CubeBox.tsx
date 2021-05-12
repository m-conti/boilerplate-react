import React from 'react';

import { Vector3, MeshProps } from '@react-three/fiber';
import * as THREE from 'three';


interface ICubeBoxProps extends MeshProps {
  position: Vector3;
}


const CubeBox = (props: ICubeBoxProps): JSX.Element => {
  console.log();
  return <mesh position={props.position}>
    <boxBufferGeometry args={[ 0.98, 0.98, 0.98 ]} attach='geometry' />
    <meshNormalMaterial attach='material' side={THREE.FrontSide} />
  </mesh>;
};

export default CubeBox;
