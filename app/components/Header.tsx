import React from 'react'

function Header() {
  return (
    <div className='z-[5] flex justify-center'>
<nav className="fixed top-[2rem] left-1/2 transform -translate-x-1/2 lg:py-[1rem] md:py-[1rem] py-[1rem] sm:py-[1rem] px-auto sm:px-[20rem] ring-1 ring-green-900 backdrop-filter backdrop-blur-lg rounded-lg lg:w-[40rem] md:w-[30rem] sm:w-[25rem] w-[18rem] bg-[#10161a]/50 border-teal-100">
  <h1 className="text-[0.9rem] lg:ml-[1rem] sm:ml-[1rem] ml-[1rem] md:ml-[1rem] text-gray-300">Home</h1>
</nav>
      
    </div>
  )
}

export default Header
