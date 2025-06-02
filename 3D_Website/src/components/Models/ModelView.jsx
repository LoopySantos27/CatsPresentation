import { Html,OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from '../Lights/Lights';
import * as THREE from 'three'
import CatModel from '../../components/Product/CatModel'
import Loader from '../Loader/Loader';

const ModelView =({
  index, groupRef, gsapType, controlRef, setRotationState, size, item
})=> {
  return (
     <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute
        ${index === 2 ? 'right-[-120%]': ''} `}
     >
      <ambientLight intensity={0.3}/>
      <PerspectiveCamera makeDefault position={[0,0,4]}/>
        <Lights/>

        <OrbitControls 
          makeDefault
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0 ,0)}
          onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        /> 

        <group ref={groupRef} name={`${index === 1} ? 'small': 'large'`} position={[0,0,0]}>
        {/**Esto se cargara hasta que el modulo cargue */}
        <Suspense fallback={<Loader/>}>
          {/*<Product
          scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
            />*/}
            <CatModel
            scale={index === 1 ? [1, 1,1] : [1.5, 1.5,1.5]}
            item={item}
            size={size}/>
        </Suspense>
        </group>
     </View>
  )
}

export default ModelView
