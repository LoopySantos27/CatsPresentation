import React, { useRef,useEffect, useState,Suspense } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../../utils'
import Loader from '../Loader/Loader';

function Hero() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    //Funcion del boton de pausa
    const togglePlay =() =>{
        if(videoRef.current.paused){
            videoRef.current.play();
            setIsPlaying(true)
        }else{
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }

    //Esto es para reiniciar el video una vez termina
    const resetVideo =() =>{
        videoRef.current.play()
        
    }

    /* Aquí se define que tendrá la variable videosrc 
        en caso del tamaño de la pantalla*/
    const [videoSrc, setVideoSrc] = useState(window.
        innerWidth < 640 ? smallHeroVideo: heroVideo)

        /**Aquí revisa la medida de la pantalla y actualiza el video */
        const handleVideoSet = () =>{
            if(window.innerWidth < 640){
                setVideoSrc(smallHeroVideo)
            }else{
                setVideoSrc(heroVideo)
            }
        }

        /* Esto es para checar cuando se actualiza la pantalla cambiar
            al otro video */
        useEffect(()=>{
            window.addEventListener('resize', handleVideoSet)
            /**Limpiar el eventlistener */
            return() =>{
                window.removeEventListener('resize', handleVideoSet) 
            }
        })

        /**gsap es una librería para hacer transiciones y animaciones */
    useGSAP(()=>{
        gsap.to('#hero', {
            opacity:1,
            delay: 2
        })
        gsap.to('#cta', {
            opacity: 1, y:-50, delay: 2
        })
    }, [])

return (
<section className='w-full bg-[#d4afcd] relative'>

    <div className='h-5/6 w-full flex-center flex-col'>

        <p id='hero' className='hero-title mt-1 mb-1'>
            Pusheen Pips Present
        </p>
        <div className='md:w-10/12 w-9/12 flex-center'>
        <Suspense fallback={<Loader/>}></Suspense>
        <button onClick={togglePlay}>
            <video  ref={videoRef} className='pointer-events-none rounded-[1vw]' 
            autoPlay muted playsInline={true} key={videoSrc} onEnded={resetVideo}>
                <source src={videoSrc} type='video/mp4'/>
            </video>
            </button>
        </div>
    </div>

    <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20 mt-[7vh]'>
        <button href="#highlights" className='btn' onClick={togglePlay}>
            {!isPlaying ? 'Play': 'Pause'}
        </button>
        <p className='text-lg text-center flex-center w-80 md:w-[40rem]'>
            Cheeps is a cute cat that likes to have adventures with his friends
            and be a little savage, come to see more histories about cats
        </p>
    </div>
    
</section>
)
}

export default Hero
