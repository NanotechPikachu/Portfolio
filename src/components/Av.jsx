import avatar from '../app/Avatar.jpg';
import Image from 'next/image';
import { img } from './AvBase64.js';

export default function Av() {
  return (
    <div className="ml-6 mr-6 flex flex-col-reverse md:flex-row md:justify-between items-center">
    <div>
    <h1 className="font-bold text-center text-2xl md:text-3xl dark:text-white text-black mb-4 mt-4 md:mt-0 md:ml-4">Hi, I&apos;m NanotechPikachu!</h1>
    <p className="font-mono text-sm dark:text-zinc-50 text-black md:text-base text-center md:ml-4"><i>A developer with passion!</i></p>
    </div>
    <div className="h-64 w-64 relative overflow-hidden rounded-full">
    <Image
      src={avatar} alt="Avatar of NanotechPikachu" layout="fill" objectFit="cover" className="rounded-full" placeholder="blur" blurDataURL={img} />
    </div>
    </div>
  )
}