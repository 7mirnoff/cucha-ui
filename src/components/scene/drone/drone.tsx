import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group, Vector3 } from 'three'

interface IDroneProps {
  target: Vector3
}

export const Drone: React.FC<IDroneProps> = ({ target }) => {
  const { scene } = useGLTF('/assets/scene/models/drone.glb')

  const droneRef = useRef<Group>(null)
  const idleAnimationRef = useRef<Group>(null)
  useFrame(() => {
    droneRef.current?.position.lerp(target, 0.015)
  })
  useFrame((x) => {
    idleAnimationRef.current?.position.lerp(new Vector3(0, Math.sin(x.clock.elapsedTime) * 1.1, 0), 0.1)
  })

  return (
    <>
      <group ref={droneRef}>
        <group ref={idleAnimationRef}>
          <primitive scale={1} object={scene} />
          {/*<Html>*/}
          {/*  <div>*/}
          {/*    hello <br />*/}
          {/*    world*/}
          {/*  </div>*/}
          {/*</Html>*/}
        </group>
      </group>
    </>
  )
}
