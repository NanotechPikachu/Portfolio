import { Git, Discord } from './ProfileLinks.jsx';

export default function Socials() {
  return (
    <>
    <div className="mr-2 ml-2 mt-6 border dark:border-emerald-600 border-emerald-400 dark:bg-[#2E3532] bg-slate-100">
    <h2 className="text-center text-xl md:text-2xl text-black dark:text-white font-bold"><u>Socials</u></h2>
    <p className="mt-2 dark:text-slate-50 text-black text-center font-mono md:text-base text-sm"><i>Contact me using the below methods...</i></p>
    <div className="mt-2 mb-2 flex items-center justify-center">
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
    </>
  )
}