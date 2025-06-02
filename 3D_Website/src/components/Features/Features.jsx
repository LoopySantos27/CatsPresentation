
import { animateWithGsap } from '../../utils/animations'
import gsap from 'gsap';
import { explore1Img, explore2Img, exploreCat } from '../../utils';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function Features() {
    const videRef = useRef();
    
    useGSAP(()=>{
        gsap.to('#exploreVideo',{
            scrollTrigger:{
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: ()=>{
               // videRef.current.play();
            }
        })
        animateWithGsap('#features_title', {y:0, opacity:1})
        animateWithGsap(
            '.g_grow',
            
            {y:-2,scale:1, opacity: 1, ease: 'power2'},
            {scrub: 5.5}
        )
        animateWithGsap(
            '.g_text',
            {y: 0, opacity: 1, ease: 'power2.inOut', duration: 1}
        )
    }, []);

  return (
    <section id='/Characteristics' className='h-full common-padding bg-[#E8EDDF]
    relative overflow-hidden'>

        <div className='screen-max-wdith'>
            <div className='mb-12 w-full'>
                <h1 id='features_title' 
                className='section-heading font-title flex justify-center'>
                    Characteristics about cats
                </h1>
            </div>

            <div className='flex flex-col justify-center
            items-center overflow-hidden'>

                <div className='mt-10 mb-24 ml-10 mr-10'>
                    <h2 className='font-title md:text-3xl lg:text-7x1 font-semibold
                     text-black text-center text-[1.5rem] '>
                        Did you know that?..{''}
                    </h2>
                    <p className='text-gray mt-6 text-center text-[1.25rem]
                     md:max-w-[60vw] md:text-xl font-semibold'>
                        Cats have a special "vocabulary" of meows just for humans.
                        Unlike dogs, cats don’t typically communicate with each other 
                        through meows once they're adults. They develop a variety of meows,
                        chirps, and trills specifically to "talk" to their human companions—almost 
                        like they're training us to understand them!
                    </p>
                </div>

                <div className='felx-center flex-col sm:px:10'>
                    <div className='relative h-[50vh] w-full flex items-center'>
                        <div className='overflow-hidden flex-1 h-[50vh]'>
                            <img src={exploreCat} alt="caty" 
                            className='feature-video g_grow' />
                        </div>
                    </div>
                    <div className='feature-video-container'>
                        <div className='overflow-hidden flex-1 h-[50vh]'>
                            <img src={explore1Img} alt="cat1"
                            className='feature-video g_grow' />
                        </div>
                        <div className='overflow-hidden flex-1 h-[50vh]'>
                            <img src={explore2Img} alt="cat2" 
                            className='feature-video g_grow' />
                        </div>
                    </div>
                    <div className='feature-text-container'>
                        <div className='flex-1 flex-center'>
                            <p className='feature-text g_text'>
                                Cats can be...{' '}
                                <span className=' text-[#04152d]'>
                                    Highly sensitive, used to sense surroundings and measure space.{' '}
                                </span>
                                  Also they have retractable Claws hidden when not in use, 
                                  for stealth and protection.{' '}
                                  They can be really impresive with their physics {' '}
                                <span className=' text-[#04152d]'>
                                    {' '}you will be surprised to see how tall they can get in the trees.
                                </span>
                            </p>
                        </div>
                        <div className='flex-1 flex-center'>
                            <p className='feature-text g_text'>
                              They love to explore new places and sniff around like little detectives. 
                              If there’s a box, a bag, or a secret corner, 
                              a cat will probably want to check it out.{' '} 
                                <span className=' text-[#04152d]'>
                                    They’re also very playful.{' '}
                                </span>
                                Even grown-up cats enjoy chasing toys, pouncing, and playing games,
                                almost like they’re still kittens.{' '}
                            <span className=' text-[#04152d]'>
                                One special thing about cats is that they are very independent.{' '}     
                                </span> 
                                They might not always come when you call them, 
                                but that doesn’t mean they don’t love you. {''}
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Features
