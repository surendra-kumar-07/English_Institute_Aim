import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {


  return (
    <div className="flex flex-col justify-center items-center p-4 w-full mt-10">
        <div className="w-full text-center md:w-1/3">
            <h5 className="font-bold text-xl p-3 bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">Social Links</h5>
            <div className="flex justify-between w-full px-3">
                <Link href={'https://wa.me/918955050001'}>
            <IoLogoWhatsapp className="text-5xl text-green-400"/>
                </Link>
                <Link href={'/'}>
            <FaInstagram className="text-5xl text-pink-300"/>
                </Link>
                <Link href={'/'}>
            <FaFacebook className="text-5xl text-blue-400"/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer