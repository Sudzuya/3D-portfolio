import React from 'react'

import { useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'

const Bird = () => {

const { scene, animation } = useGLTF(birdScene)

  return (
    <mesh>
      <primitive object={scene}></primitive>
    </mesh>
  )
}

export default Bird