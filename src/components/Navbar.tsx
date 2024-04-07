import Link from 'next/link'
import { HiOutlinePhone, HiOutlineLocationMarker  } from "react-icons/hi";
import { BiSolidHomeHeart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

const Navbar = () => {
  return (
<div className='fixed bottom-2 w-full flex items-center justify-center z-50 '>
    <div className='w-10/12 flex justify-between bg-black/30 px-7 py-3 rounded-2xl text-xl md:w-1/2'>
        <Link href={'/'}><BiSolidHomeHeart /></Link>
        <Link href={'https://maps.app.goo.gl/f6bCCpvdgp4a7Fv99'}><SlLocationPin /></Link>
        <Link href={'tel:8955050001'}><HiOutlinePhone /></Link>
      
    </div>
</div>
  )
}

export default Navbar