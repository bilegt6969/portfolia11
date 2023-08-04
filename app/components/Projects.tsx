import Link from 'next/link';
import React from 'react';

function Projects() {
  return (
    <>
    <h1 className="text-3xl text-white font-bold mb-3 mt-[3rem] mx-auto justify-start items-start">Projects 🛠️ </h1>     
    <div className='text-white mx-auto flex flex-col justify-center items-center'>
        
     
      <h1 className='text-lg'>
      I regret to share that I haven't implemented extensive website features to showcase my projects. However, I'm pleased to let you know that you can explore them on my        <Link className='text-pink-500 underline' href='https://github.com/bilegt6969'>
          GitHub
        </Link>{' '}
        profile.
      </h1>
    </div>
        </>

  );
}

export default Projects;
