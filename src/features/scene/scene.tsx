import React, { Suspense } from 'react'

import { useFBX } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Loader } from './loader/loader'
import styles from './scene.module.scss'

export const Scene: React.FC = () => {
  const yBotfbx = useFBX('/assets/scene/models/ybot.fbx')

  return (
    <div className={styles.scene}>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <primitive scale={0.01} object={yBotfbx} />

          <ambientLight intensity={0.1} />
          <directionalLight color='red' position={[0, 0, 5]} />
          {/*<mesh>*/}
          {/*  <boxGeometry />*/}
          {/*  <meshStandardMaterial />*/}
          {/*</mesh>*/}
        </Suspense>
      </Canvas>
    </div>
  )
}
