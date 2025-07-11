import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.logo_dark:assets.logo} alt='logo' className='w-36 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark :assets.mail_icon} alt='' className='w-6'/>
                soyabsp.a03@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6' >
            <p>&#169;2025 Shoaib Pinjari. All rights reserved.</p>
            <ul className='flex item-center gap-10 justify-center mt-4 sm:mt-0'>
                
                <li><a target='_blank' href="https://github.com/Shoaib-Hacker"><Image src={isDarkMode?assets.github_mark_white:assets.github_mark} alt='' className='w-7 mx-3'/>GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/soyab-pinjari-97b44928a/"><Image src={isDarkMode?assets.inBug_white:assets.inBug_black} alt='' className='w-7 mx-3'/>LinkedIn</a></li>
              
            </ul>
        </div>
    </div>
  )
}

export default Footer