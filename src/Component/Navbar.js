import React from 'react'
import '../index.css'
import logo from '../Assets/mPpkyiZLd6Tz5m_AOEhrf.png'
const Navbar = () => {
  return (
  <>
  <nav className="w-full fixed top-4 sm:top-5 z-50 px-4">
   <div className="container py-4 bg-white backdrop-blur-sm rounded-[10px] shadow">
      <div className="flex justify-between items-center">
         <div className="flex gap-4 items-center">
            <button className="lg:hidden flex justify-center items-center p-1 -mr-1 active:bg-[#eaeaea] rounded-[5px] duration-300">
               <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z" fill="currentColor"></path>
                  <path d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z" fill="currentColor"></path>
                  <path d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z" fill="currentColor"></path>
               </svg>
            </button>
            <div className="relative w-40 h-50"><a href="/"><img alt="cyberyami" src={logo} decoding="async" data-nimg="fill" class="object-contain" loading="lazy"       /></a></div>
         </div>
         <div>
            <ul className="lg:flex gap-12 hidden">
               <div className="relative">
                  <li className="cursor-pointer z-20 relative duration-300 ">Academia</li>
               </div>
               <div className="relative">
                  <li class="cursor-pointer z-20 relative duration-300 "><a class="w-full" target="_self" href="https://ctf.cyberyami.com/">CTF Warriors</a></li>
               </div>
               <div className="relative">
                  <li class="cursor-pointer z-20 relative duration-300 "><a class="w-full" target="_self" href="/business-solutions">Business Solutions</a></li>
               </div>
               <div className="relative">
                  <li class="cursor-pointer z-20 relative duration-300 ">Resources</li>
               </div>
            </ul>
         </div>
         <div className="flex gap-2 sm:gap-4 items-center">
            <a type="button" className="relative inline-flex items-center text-sm font-medium text-center text-white mr-2 md:mr-0" href="http://accounts.cyberyami.com/login?url=https://www.cyberyami.com&amp;path=courses/skill-based/burpsuite">
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-zinc-700 hover:text-zinc-900 duration-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="176" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
                  <circle cx="400" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"></path>
                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"></path>
               </svg>
            </a>
            <a className="text-center hidden lg:block transition rounded px-5 py-1 font-normal text-base hover:text-green-900" href="http://accounts.cyberyami.com/signup?url=https://www.cyberyami.com&amp;path=courses/skill-based/burpsuite">Sign Up</a>
            <a className="border-2 bg-green-300 hover:bg-green-400 border-green-300 hover:border-green-400 transition rounded px-5 py-1 font-normal text-base hidden lg:block hover:shadow" href="http://accounts.cyberyami.com/login?url=https://www.cyberyami.com&amp;path=courses/skill-based/burpsuite">Login</a>
         </div>
      </div>
   </div>
</nav>
  </>
  )
}

export default Navbar
