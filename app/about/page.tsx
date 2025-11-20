import { about } from "../constants/one-of-a-kind";
import Image from "next/image";
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import { renderFormattedParagraphs } from "../helpers/paragraph-formatter";
import CalendlyWidget from "../ui/calendly-widget";

export default function About() {
  const imageSrcArray = [image1, image2, image3, image4];
  return (
    <>
      <div className="flex flex-col items-center gap-6 text-center pb-6">
        <h1 className="leading-10 tracking-tight text-black dark:text-zinc-50">
          Meet Abbey
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex md:flex-col items-center justify-between">
            {imageSrcArray.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Abbey Fodor ${index + 1}`}
                width={200}
                height={200}
                className={`rounded-full mb-4 mx-auto ${index > 0 ? 'hidden' : ''} ${index > 0 ? 'md:block' : ''}`}
              />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-6 justify-center">
            {renderFormattedParagraphs(about, "text-lg leading-8 text-zinc-600 dark:text-zinc-400")}
          </div>
        </div>
      </div>

      <CalendlyWidget />
    </>
  );
}
