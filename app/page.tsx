import { description } from "./constants/one-of-a-kind";
import Image from "next/image";
import clothes from './assets/clothes.jpg';
import { renderFormattedParagraphs } from "./helpers/paragraph-formatter";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-6 text-center">
        <Image
          src={clothes}
          alt={''}
          width={400}
          height={200}
          className={`rounded-md`}
        />
        <h1 className="leading-10 tracking-tight text-black dark:text-zinc-50">
          One of a Kind Styling
        </h1>
        {renderFormattedParagraphs(description, "text-lg leading-8 text-zinc-600 dark:text-zinc-400")}
      </div>


    </>
  );
}
