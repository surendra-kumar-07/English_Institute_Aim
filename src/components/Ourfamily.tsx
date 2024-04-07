'use client'
import Carousel from '@/components/Corousel'
import Image from 'next/image'

const Ourfamily = () => {
    const slides = [
        './family1.jpg',
        './family2.jpg',
        './family3.jpg',
       
    ]

  return (
    <div className="p-3 flex justify-center items-center flex-col gap-3 mt-16">
         <h4
        className="text-center  font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-100 via-sky-200 to-cyan-200">
       Add On
    </h4>
        <div className='relative max-w-md'>
            <Carousel>
                {slides.map((s,i)=>(
                     <Image 
                     key={i}
                     src={s}
                     className="rounded"
                     width={500}
                     height={500}
                     alt="Students photo"
                     
                     />
                ))}
            </Carousel>
        </div>
    </div>
  )
}

export default Ourfamily