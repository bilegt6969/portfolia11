import Link from 'next/link'
import React from 'react'

function Contanct() {
  return (
    <div>
      <div className='text-white justify-center font-bold mx-auto items-center flex flex-col'>
        <h1 className="text-3xl mt-[3rem] items-start">contact</h1>
        <p className="font-normal">
          Just Slide Into My{" "}
          <Link
            className="underline text-pink-600 decoration-solid"
            href={"https://www.instagram.com/b1lgeeeeeee/"}
          >
            Ig Dms
          </Link>
        </p>
        <p className="font-normal">
          If you got some real talk, hit me up by{" "}
          <Link
            className="underline decoration-solid text-pink-600"
            href={"mailto:bilegt6969@gmail.com"}
          >
            Mail
          </Link>
          .
        </p>
      </div>
      <div className="mt-[3rem] mx-auto items-center justify-center flex flex-col">
        <h1 className='text-white'>Bilegt Amartuvshin </h1>
        <p className="font-normal text-gray-500 text-xs mb-[1rem]">
          © 2023 | All rights reserved
        </p>
      </div>

      
</div>
  )
}

export default Contanct