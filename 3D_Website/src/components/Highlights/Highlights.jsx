import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../../utils'
import VideoCarousel from '../VideoCarousel/VideoCarousel'
import { externalLinks } from '../../constants'

function Highlights() {

    useGSAP(()=>{
        gsap.to('#title', {
            opacity: 1, y: 0
        })
        gsap.to('.link', {
            opacity:1,
            y: 0,
            duration: 1,
            stagger: 0.25
        })
    }, [])

  return (
    <section id='/Videos' className='w-screen overflow-hidden
    h-full common-padding bg-[#E8EDDF]'>
        <div className='screen-max-width'>
            <div className=' mb-12 w-full md:flex items-end justify-between'>
                <h1 id='title' className='font-title text-[0.75rem] section-heading'>
                    Watch this little Story. </h1>    

                    <div className='flex flex-row p-10items-end gap-5'>
                        <a rel='fullvideo' href={externalLinks[1]}>
                        <p className='link'>
                            Watch full on Youtube
                            <img src={watchImg} alt='watch' 
                            className='ml-2'/>
                        </p>
                        </a>
                        <a rel="stylesheet" href={externalLinks[0]} >
                        <p className='link'>
                            Watch the Channel{'  '}
                            <img src={watchImg} alt='watch'
                            className='ml-2'/>
                            </p>
                        </a>
                    </div>    
            </div> 

            <VideoCarousel/>
        </div>
    </section>
  )
}

export default Highlights
