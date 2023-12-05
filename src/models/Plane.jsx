import React from 'react'
import { useGLTF } from '@react-three/drei'

import plane from '../assets/3d/plane.glb'


function Plane() {

const plane = useGLTF(plane)

  return (
    <mesh>
    <primitive object={plane.scene}></primitive>
        </mesh>
  )
}

export default Plane