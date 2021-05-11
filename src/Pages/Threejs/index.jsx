import React, { useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';

import * as THREE from 'three';
import {
  CAM_FOV,
  CAM_ASPECT,
  CAM_NEAR_PLANE,
  CAM_FAR_PLANE,
  RENDERER_SIZE_HEIGHT,
  RENDERER_SIZE_WIDTH
} from 'helpers/constans/three';

import './classes.sass';

export default () => {
  const containerRef = useRef(null);

  const initThree = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      CAM_FOV,
      CAM_ASPECT,
      CAM_NEAR_PLANE,
      CAM_FAR_PLANE
    );
    const renderer = new THREE.WebGLRenderer(scene, camera);
    renderer.setSize(RENDERER_SIZE_WIDTH, RENDERER_SIZE_HEIGHT);
    containerRef.current.appendChild(renderer.domElement);
  };

  useEffect(initThree, []);

  return <Grid alignItems='center' container direction='column' justify='center'>
    <div ref={containerRef} />
  </Grid>;
};
