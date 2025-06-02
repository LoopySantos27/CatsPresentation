import React, { useState } from 'react'
import { appleImg, bagImg, searchImg, iconMenu } from '../../utils'
import { navLists } from '../../constants'
import { Link } from 'react-scroll'

function NavBar() {
  return (
    <header className='w-full py-2 max-sm:pb-10 sm:px-10 px-5 flex justify-between items-center' >
        {/**NavBar propierties, in this case is an image and a list of the sections */}
        <nav className='flex w-full screen-max-width pt-5 pb-5 max-sm:top-0'>

            <img src={iconMenu} alt='Icon' width={54} height='auto' className=
            'flex max-sm:absolute max-sm:m-auto max-sm:left-0 max-sm:right-0 max-sm:pb-3 '/>

            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav)=>
                    (<button  key={nav} className='font-title px-5  cursor-pointer text-[20px]
                        text-[#e8eddf] hover:text-[#517fbf] hover:underline 
                        decoration-[#517fbf] hover:text-[26px] transition-all'>

                        <Link to ={'/'+nav} spy={true} smooth={true} offset={50} 
                        duration={500}>
                            {nav}
                        </Link>

                    </button>
                ))}
                
            </div>
        </nav>
    </header>
  )
}

export default NavBar
