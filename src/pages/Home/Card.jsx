import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col border border-slate-200 px-4 py-6 md:px-8 md:py-10 w-full md:w-[24rem] text-center justify-between rounded-xl items-center bg-slate-50 mx-2 mb-4 md:mb-0'>
      <img 
        className='w-32 md:w-40 text-center mx-auto' 
        src={props.img} 
        alt={props.heading}  
      />
      <h2 className='font-black text-lg md:text-xl text-center pt-4 md:pt-8'>
        {props.heading}
      </h2>
      <p className='text-sm md:text-base px-2 md:px-0 mt-2 md:mt-0'>
        {props.text}
      </p>
      <button className='border border-blue-600 hover:border-blue-300 px-4 py-2 md:px-5 md:py-3 text-center rounded-xl shadow-md md:shadow-xl text-blue-600 hover:bg-blue-100 text-sm md:text-base mt-4 md:mt-0 w-full max-w-[200px]'>
        {props.btn}
      </button>
    </div>
  )
}

export default Card