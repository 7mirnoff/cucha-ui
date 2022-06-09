import React from 'react'

import { Canvas } from '@react-three/fiber'

import styles from './app.module.scss'

export const App: React.FC = () => {
  return (
    <div className={styles.scene}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}
