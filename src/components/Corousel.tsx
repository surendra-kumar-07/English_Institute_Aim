'use client'
import { IoMdArrowRoundForward, IoMdArrowRoundBack   } from "react-icons/io";
import { useEffect, useState } from "react"


const Corousel = ({children}: any) => {
  const [isStop, setIsStop] = useState(false)
    const [curr, setCurr] = useState(0)

    const prev = (e: any)=> {
      e.stopPropagation();
      setCurr(pre=> pre === 0 ? children.length -1 :pre - 1)};

    const next = (e:any = false)=> {
      if(e){e.stopPropagation();}
      setCurr(pre=> pre === children.length -1 ? 0 :pre + 1)
}
    useEffect(()=>{
      if(isStop) return
        const slideInterval = setInterval(next,2000)
        return ()=>clearInterval(slideInterval)
    },[isStop])

    

  return (
    <div onClick={()=>setIsStop((pre)=>!pre)} className='overflow-hidden relative '>
        <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr * 100}%)`}}>{children}</div>

        <div  className={`absolute inset-0 ${isStop ? 'hidden' :'flex'} items-center justify-between p-0.5 select-none`}>
          
            <button onClick={prev} className='py-2 px-3 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
              < IoMdArrowRoundBack  /></button>
            <button onClick={next} className='py-2 px-3 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
              <IoMdArrowRoundForward  /></button>
           
        </div>
    </div>
  )
}

export default Corousel