import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo, cameraIcon } from '../../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../../utils/animations';

function HowItWorks() {
    const videoRef = useRef();

    useGSAP(()=>{
        gsap.from('#chip',{
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        }),
        animateWithGsap('.g_fadeIn',{
            opacity:1,
            y:-2,
            duration: 1,
            ease: 'power2.inOut'
        })
    }, []);

return (
<section className='common-padding bg-[#d4afcd]' id='/Photo!'>
    <div className='screen-max-width'>
        <div id='chip' className='flex-center w-full mt-10 mb-16'>
            <img src={chipImg} alt="chip" width={240} height={240} />
        </div>
        <div className='flex flex-col items-center'>
            <h2 className='hiw-title font-title'>
                Let's take a Photo!
            </h2>
            <p className='text-gray mt-2'>
                (*The button will download the image in your files)
            </p>
        </div>
        <div className='mt-10 md_mt-20 mb-14 flex flex-col items-center'>
            <div className='relative h-full flex-center'>
                <div className=' overflow-hidden'>
                    <img src={frameImg} alt="frame"
                    className='bg-transparent relative z-10' />
                </div>
                <div className='hiw-video'>
                    <img src={frameVideo} className='pointer-events-none'
                    playsInline preload='none' muted autoPlay
                    ref={videoRef}>
                    </img>
                </div>
            </div>
            <a href={frameVideo} download={frameVideo}> 
            <button className='btn mt-6 flex flex-row items-center' download={frameVideo}>
                <img src={cameraIcon} width={70} alt="camera" className=''  />
            </button>
                </a>
            </div>
            <div className='hiw-text-container '>
                    <div className='flex flex-1 justify-center flex-col mb-2'>
                        <p className='hiw-text g_fadeIn'>
                            This page was created just for portfolio purposes
                            to show skills with {' '}
                            <span className=' text-white'>
                                React.Js, Tailwind CSS and Sentry.{' '}
                            </span>
                            If you feel the images or content is having a bad use, please let me know it {'<3. '}<br></br>
                            
                            I appreciate that you made it this far, if you want to contact me
                            the contact information is right below c:{' '}
                           
                        </p>
                    </div>

                <div className='flex-1 flex justify-center flex-col space-y-5 g_fadeIn'>
                    <p className='hiw-bigtext mb-5 font-title font-bold'>Videos & Images from:</p>
                    <a className='hiw-list' href="https://www.youtube.com/@JessTheDragoon">
                        <p>- @JessTheDragoon</p>
                    </a>
                    <a href="https://www.youtube.com/@PusheenTheCat" className='hiw-list'>
                        <p >- @PusheenTheCat</p>
                    </a>
                    <a href="https://www.freepik.es/autor/yuliamelnyk" className='hiw-list'>
                        <p>- @Yulia Melnyk</p>
                    </a>
                </div>
                </div>
    </div>
</section>
)
}

export default HowItWorks
