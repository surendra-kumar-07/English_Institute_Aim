
import Link from 'next/link';

const Herosection = () => {
  return (
    <div
    className='h-auto w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-1 mb-4'
    >
        <div className='py-4 relative z-10 w-full text-center'>
            <h1 className='mb-6 pb-3 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 shadow-xl shadow-cyan-500/50'>AIM </h1>
            <p className=' px-10  font-bold '>An Institute For Communication & Personality Development.</p>
            <h2 className='font-bold text-2xl text-center my-3 '>Learn English </h2>
        </div>
       <div>
        <Link href={'#newbatch'}>
        <button type="button" className="text-black/80 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg font-bold px-5 py-2.5 text-center me-2 mb-2">New Batch</button>
          </Link>
       </div>
       
        
    </div>
  )
}

export default Herosection