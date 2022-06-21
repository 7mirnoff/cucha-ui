import React, { useState } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Vector3 } from 'three'

import { Drone } from './drone/drone'
import styles from './scene.module.scss'

export const Scene: React.FC = () => {
  const [target, setTarget] = useState(new Vector3(0, 0, 0))
  return (
    <div className={styles.scene}>
      <Canvas dpr={[1, 2]}>
        <Drone target={target} />
        {/*<ambientLight intensity={0.1} />*/}
        <directionalLight color='#ffffff' position={[5, 5, 5]} />
        <mesh
          rotation-x={Math.PI * -0.5}
          onClick={(evt) => {
            const { point } = evt
            setTarget(new Vector3(point.x, 6, point.z))
          }}
        >
          <planeBufferGeometry args={[100, 100]} />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
