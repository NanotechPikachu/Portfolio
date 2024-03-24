import { FaGithub, FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <div className="ml-8 mr-8 mt-24 mb-20">
    <h1 className="font-bold text-center text-2xl md:text-3xl dark:text-white text-black mb-4">Hi, I&apos;m NanotechPikachu!</h1>
    <p className="text-sm dark:text-zinc-50 text-black md:text-base text-center">A developer with passion!</p>
    <div className="mt-6 mr-2 ml-2 border dark:border-emerald-600 border-emerald-400 dark:bg-[#2E3532] bg-slate-100 border">
    <p className="font-serif md:text-base text-sm dark:text-zinc-50 text-black mr-3 ml-3 mt-2 mb-2">
I&apos;m a <b>Computer Science</b> student and an ardent fan of programming. A developer and an author by passion. Love to make webpages and many other things!
    </p>
    </div>
    <div className="mr-2 ml-2 mt-6 border dark:border-emerald-600 border-emerald-400 dark:bg-[#2E3532] bg-slate-100">
    <h2 className="text-center text-xl md:text-2xl text-black dark:text-white font-bold">Social</h2>
    <div className="mt-2 flex items-center justify-center">
    <a href="https://github.com/NanotechPikachu">
    <button className="m-1 p-2 border dark:border-teal-500 border-teal-400">
    <Git />
    </button>
    </a>
    <a href="https://discord.com/users/949588732498018324">
    <button className="m-1 p-2 border dark:border-teal-500 border-teal-400">
    <Discord />
    </button>
    </a>
    </div>
    </div>
    </div>
    </>
  )
}

function Git() {
  return (
    <>
    <FaGithub size="40px" color="#6ddcf2" />
    </>
  )
}

function Discord() {
  return (
    <>
    <FaDiscord size="40px" color="#6ddcf2" />
    </>
  )
}