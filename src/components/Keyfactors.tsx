import Image from "next/image";
import { BiSolidSend } from "react-icons/bi";

export default function Keyfactors({title, imgurl, keypoints} : any) {
   

  return (
    <div className='flex flex-col justify-center items-center px-5'>
        <div className='border-2 p-4 rounded-lg border-black/20 font-bold w-fit bg-black/15'>
            <Image 
            src={`./${imgurl}`}
            className="rounded"
            width={500}
            height={500}
            alt="Students photo"
            />
           <div className='border-b-2 text-center mt-3 pb-2 text-lg'>
            <h3>{title}</h3>
           </div>
           <ul className="pt-2 space-y-3">
            {keypoints && keypoints.map((skill: string,index :number)=>(
                 <li key={index} className="space-x-2">
                 <BiSolidSend className="inline"/><span>{skill}</span>
                 </li>
            ))}
           
           </ul>
        </div>
    </div>
  )
}

