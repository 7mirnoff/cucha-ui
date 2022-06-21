import React, { Suspense, useRef } from 'react'

import { Html, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group, Vector3 } from 'three'

import { Loader } from '../loader/loader'
import styles from '../scene.module.scss'

interface IDroneProps {
  target: Vector3
}

export const Drone: React.FC<IDroneProps> = ({ target }) => {
  const { scene } = useGLTF('/assets/scene/models/drone.glb')

  const droneRef = useRef<Group>(null)
  useFrame(() => droneRef.current?.position.lerp(target, 0.1))

  return (
    <>
      <Suspense fallback={<Loader />}>
        <group ref={droneRef}>
          <primitive scale={1} object={scene} />
          <Html>
            <div className={styles.text}>
              hello <br />
              world
            </div>
          </Html>
        </group>
      </Suspense>
    </>
  )
}
