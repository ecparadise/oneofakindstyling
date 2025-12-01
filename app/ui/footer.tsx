"use client"
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="flex gap-6 justify-center items-center p-4 border-t mt-8 bg-neutral-950 text-white fixed bottom-0 w-full">
      <a
        href="https://www.instagram.com/oneofakindstyling"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col sm:flex-row items-center gap-2"
      >
        <FaInstagram size={26} />
        <p className={"text-sm sm:text-base"}>@oneofakindstyling</p>
      </a>
      <a
        href="mailto:oneofakindstyling@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col sm:flex-row items-center gap-2"
      >
        <FaRegEnvelope size={26} />
        <p className="text-sm sm:text-base">oneofakindstyling@gmail.com</p>
      </a>
    </div >
  )

}