import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Canvas } from '@react-three/fiber';
import Cube from 'Components/Three/Cube';

import './classes.sass';

export default () => <Grid alignItems='center' container direction='column' justify='center'>
  <Canvas style={{ height: 800 }}>
    {/* <ambientLight intensity={0.5} />
    <spotLight angle={0.15} penumbra={1} position={[ 10, 10, 10 ]} />
    <pointLight position={[ -10, -10, -10 ]} /> */}
    <Cube />
  </Canvas>
</Grid>;
