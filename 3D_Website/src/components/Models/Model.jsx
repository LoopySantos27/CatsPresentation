import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ModelView from './ModelView';
import {yellowImg} from '../../utils';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { sizes } from '../../constants/index';
import { animateWithGsapTimeLine } from '../../utils/animations';
import style from './ModelSection.module.css'

const  Model=()=> {
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        //Estado default
        title:'Pet it! Pet it!',
        color: ['#8F8A81', '#FFE7B9', '#ff0000'],
        img: yellowImg, 
    })
    useGSAP(()=>{
        gsap.to('#heading', {y:0, opacity: 1})
    }, []);

    // Camera control for the model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    //modelo a tener
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    //rotation
    const[smallRotation, setSmallRotation] = useState(0);
    const[largeRotation, setLargeRotation] = useState(0);

    const tl = gsap.timeline();
    useEffect(()=>{
        console.log(size);
        //Revisar que tipo de modelo está
        if(size === 'large'){
            animateWithGsapTimeLine(tl,small, smallRotation,
                '#view1', '#view2',{
                    transform: 'translateX(-110%)',
                    duration: 2,
                    
                }
            )
        }if(size === 'small'){
            animateWithGsapTimeLine(tl,large, largeRotation,
                '#view2', '#view1',{
                    transform: 'translateX(0)',
                    duration: 2
                }
            )
        }
    },[size])
  return (
    <section className ={style.modelBackground} id='/Model'>

        <div className='screen-max-width'>
            <h1 id ='heading' className='font-title section-heading'>
               Pet a Cat 
            </h1>
            <div className ='flex flex-col items-center mt-5'>
                <div className='w-full h-[75vh] md:h-[90vh]
                overflow-hidden relative'>
                    <ModelView
                        index ={1}
                        groupRef = {small}
                        gsapType = 'view1'
                        controlRef = {cameraControlSmall}
                        setRotationState = {setSmallRotation}
                        item = {model}
                        size = {size}
                    />
                    <ModelView
                        index ={2}
                        groupRef = {large}
                        gsapType = 'view2'
                        controlRef = {cameraControlLarge}
                        setRotationState = {setLargeRotation}
                        item = {model}
                        size = {size}
                    />
                    <Canvas
                        className = 'w-full h-full'
                        style ={{
                            position: 'fixed',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            overflow: 'hidden'
                        }}
                        eventSource = {document.getElementById
                            ('root')}
                    >
                        <View.Port/>
                    </Canvas>

                </div>

                    <div className='mx-auto w-full'>
                        <p className='text-sm  text-center mb-5 
                        font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                            {model.title}
                        </p>
                        <div className='flex-center'>
                            <button className='size-btn-container cursor-pointer'>
                                {sizes.map(({label, value}) =>(
                                    <span key={label} className='size-btn p-[25px]'
                                    style={{
                                    //Aqui comparamos cual esta activo para cambiarle el color a blanco o dejarlo negro
                                    backgroundColor: size === value ? 'white': 'transparent',
                                    color: size === value ?'black': 'white'}}
                                    onClick={()=>setSize(value)}>
                                        {label}
                                    </span>
                                ))}
                            </button>
                        </div>
                        
                </div>
            </div>
        </div>

    </section>
  )
}

export default Model
