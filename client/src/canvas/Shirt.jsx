/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import {easing} from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF,useTexture } from '@react-three/drei'

import state from '../store'

const Shirt = () => {
  const snap = useSnapshot(state)
  const {nodes, materials} = useGLTF('/shirt_baked.glb')
  // const {nodes, materials} = useGLTF('/sneaker_baked.glb')
  
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state,delta) => {
    // Ensuring the application fo the color smoothly
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
  })

  // This var makes sure react renders the model on state changes
  const stateString = JSON.stringify(snap)

  // const geo = nodes.Nike_Logo_left004.geometry
  const geo =  nodes.T_Shirt_male.geometry

  return (
    <group key={stateString}>
      <mesh castShadow geometry={geo} material={materials.lambert1} material-roughness={1} dispose={null}>
        {snap.isFullTexture && (<Decal position={[0,0,0]} rotation={[0,0,0]} scale={1} map={fullTexture}/>)}
        {snap.isLogoTexture && (<Decal position={[0,0.04,0.15]} rotation={[0,0,0]} scale={0.15} map={logoTexture} depthTest={false} depthWrite={true}/>)}
      </mesh>
    </group>
  )
}

export default Shirt