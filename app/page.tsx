import { description } from "./constants/one-of-a-kind";
import Image from "next/image";
import clothes from './assets/clothes.jpg';

export default function Home() {
  const paragraphs = description.split("\n");
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
        {paragraphs.map((para) => (
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {para}
          </p>
        ))}
      </div>


    </>
  );
}
