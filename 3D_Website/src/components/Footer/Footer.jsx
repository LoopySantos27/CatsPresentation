import React from 'react'
import { footerLinks } from '../../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 bg-[#d4afcd]">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-sm">
            Portfolio Page {' '}
            <a href="https://gerardosantos.netlify.app/">
              <span className="underline text-blue">
              Gerardo Santos Portfolio {' '}
              </span>
            </a>
            or send me an email {' '}
            <a href="mailto:gerardodsc27@gmail.com">
              <span className="underline text-blue">
              gerardodsc27@gmail.com
              </span>{' :) '}
            </a>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2025 Pusheen the Cat. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((_id,i)=>(
              <a key={i} href={_id.link} className='hover:text-white font-semibold text-gray text-xs'>
                {_id.text}
                {' '}
                {i !== footerLinks.length -1 &&(
                <span className="mx-2"> | </span>
              )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer