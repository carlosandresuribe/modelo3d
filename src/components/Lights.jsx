import { Environment, EnvironmentMap, useEnvironment } from '@react-three/drei'
import React, { Suspense, useEffect, useRef, forwardRef } from 'react'





const Lights = () => {

  // const DL = useRef()
  // useEffect(()=>{
  //   const gui = new dat.GUI({width:200, autoplace:false})
  //   gui.domElement.id = 'gui'

  //   const debugObject = {
  //     lightIntensity:5,

  //   }

  //   gui.add(debugObject, 'lightIntensity')
  //   .min(0)
  //   .max(10)
  //   .step(0.00001)
  //   .name('Intensidad Luz directa')
  //   .onChange(()=>{
  //     DL.current.intensity = debugObject.lightIntensity
  //   })

  //   return ()=>{
  //     gui.destroy()
  //   }
  // })

  return (
    <>
        <ambientLight color={'#ffffff'} intensity={1}/>   
        <directionalLight 
        // ref= {DL}
          color={'#ffffff'} 
          position={[6,6,6]} 
          intensity={0.2}
          castShadow={true}
          shadowBias={-0.001}
          />
          <Environment 
            files={['px.png','nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
            path="/img/"
            // background
          />
    </>
  )
}

export default Lights