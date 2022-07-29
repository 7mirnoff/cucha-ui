import React, { useState, Suspense } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Vector3 } from 'three'

import { Drone } from './drone/drone'
import { Loader } from './loader/loader'
import styles from './scene.module.scss'

export const Scene: React.FC = () => {
  const [target, setTarget] = useState(new Vector3(0, 6, 0))
  return (
    <div className={styles.scene}>
      <Canvas dpr={[1, 1.5]}>
        {/*<PerspectiveCamera makeDefault fov={55} position={new Vector3(-17, 8, 8)} />*/}

        <Suspense fallback={<Loader />}>
          <Drone target={target} />
          <ambientLight intensity={0.1} color='#ffffff' />
          <directionalLight color='#ffffff' position={[5, 8, 5]} />
          <directionalLight color='#ffffff' position={[-2, 1, -2]} />
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
        </Suspense>
      </Canvas>
    </div>
  )
}
