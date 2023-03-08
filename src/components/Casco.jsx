import React, { useRef, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Stars, Sparkles, ContactShadows,PresentationControls, OrbitControls, Float} from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import Lights from './Lights'

const Casco = () => {
    
const CascoModel = () =>{
    const gltf = useLoader(GLTFLoader, '/models/scene.gltf');
    return(
        <>
            <primitive object = {gltf.scene}/>
        </>
    )
}      
const cascoAR = useRef()
console.log(cascoAR.current);

  return (
    <>
      <div id="realidad-aumentada" className="">
        <div className="">    
          <div className=''>  
            <h2 className="">Modelo de muestra</h2>
          </div>
          <div className='' >
          <Canvas
            gl={{
            outputEncoding: THREE.sRGBEncoding,
            antialias: true,   
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.7
            }}
            shadows='true'
            alpha='true'
            id="ra-canvas"
            camera={{ position: [0, -0.1, 2.5], fov: 50 }}
            style = { {height:'75vh', width:'100vw'}}
            ref = { cascoAR}
            className=''
           >
            
            <Lights />
            <Suspense>
            <PresentationControls
                global
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 4, tension: 1 }}
                rotation={[0, 0.5, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI, Math.PI]}>    
                <Float
                speed={1.5} // Animation speed, defaults to 1
                rotationIntensity={2} // XYZ rotation intensity, defaults to 1
                floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >                          
                <CascoModel 
                    position={[0,2,0]} 
                    scale={1} 
                    rotation={[-Math.PI / 2, 0, 0]}
                    
                />
                {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> */}
                {/* <Sparkles count={50} scale={2} size={2} speed={0.1} /> */}
                </Float>  
            </PresentationControls>
                <OrbitControls makeDefault />
                <ContactShadows position={[0.1, -1.4, 0]} opacity={0.75} scale={15} blur={2.5} far={5} />
            </Suspense>
           </Canvas>
          </div>
        </div>        
      </div>
    </>
  )
}

export default Casco