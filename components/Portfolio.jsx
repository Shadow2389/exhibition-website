import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';

const Portfolio = () => {
  const imageRef=useRef();
  const img = 'https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  const imageClick = () => {
    img='https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    console.log('changed')
  }
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <button >Travel Photos</button>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src={''+(this.state.clicked ? 'https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' : 'https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')}
            id='myImage'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
            onClick={() => {this.setState({clicked: true})}}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
