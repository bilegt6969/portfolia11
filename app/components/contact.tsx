import Link from 'next/link';
import React from 'react';

function Contact() {
  return (
    <div className='text-3xl mt-[3rem] mx-auto text-white'>
      <div className=''>
        <h1 className='text-3xl mt-[3rem]'>Contact</h1>
        <p className='font-normal'>
          Just Slide Into My{' '}
          <Link
            className='underline text-pink-600'
            href={'https://www.instagram.com/b1lgeeeeeeee/'}
          >
            Ig Dms
          </Link>
        </p>
        <p className='font-normal'>
          If you&apos;ve got something real to discuss, hit me up via{' '}
          <Link
            className='underline text-pink-600'
            href={'mailto:bilegt6969@gmail.com'}
          >
            Email
          </Link>
          .
        </p>
        
      </div>

      
    </div>
  );
}

export default Contact;
