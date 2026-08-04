"use client"
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="flex gap-6 justify-center items-center p-4 border-t mt-8 fixed bottom-0 w-full" style={{ fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: '#7A2E2E', color: '#FBF8F3' }}>
      <a
        href="https://www.instagram.com/oneofakindstyling"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col sm:flex-row items-center gap-2"
        style={{ color: '#FBF8F3' }}
      >
        <FaInstagram size={26} />
        <p className={"text-sm sm:text-base"} style={{ color: '#FBF8F3' }}>@oneofakindstyling</p>
      </a>
      <a
        href="mailto:oneofakindstyling@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col sm:flex-row items-center gap-2"
        style={{ color: '#FBF8F3' }}
      >
        <FaRegEnvelope size={26} />
        <p className="text-sm sm:text-base" style={{ color: '#FBF8F3' }}>oneofakindstyling@gmail.com</p>
      </a>
    </div >
  )

}