import React from 'react'
import {Sphere,MeshDistortMaterial} from "@react-three/drei"


function AnimatedSphere() {
    
  return (
    <Sphere args={[1,100,200]} scale={4}>
      <MeshDistortMaterial
      color="#2c2c6c"
      attach="material"
      distort={0.5}
      speed={2}
      
      
      />
    </Sphere>
  )
}

export default AnimatedSphere