import { Git, Discord } from './ProfileLinks.jsx';

export default function Socials() {
  return (
    <>
    <div className="mr-6 ml-6 mt-6 border-2 rounded-lg dark:border-teal-100 border-teal-200 dark:bg-[#2E3532] bg-slate-100">
    <h2 className="text-center text-xl md:text-2xl text-black dark:text-white font-bold mt-2"><u>Socials</u></h2>
    <p className="mt-2 dark:text-slate-50 text-black text-center font-mono md:text-base text-sm"><i>Contact me using the below methods...</i></p>
    <div className="mt-2 mb-6 flex items-center justify-center">
    <a href="https://github.com/NanotechPikachu">
    <button className="m-1 md:ml-3 md:mr-3 md:mt-1 md:mb-1 p-2 border-2 dark:border-teal-100 border-teal-200">
    <Git />
    </button>
    </a>
    <a href="https://discord.com/users/949588732498018324">
    <button className="m-1 md:ml-3 md:mr-3 md:mt-1 md:mb-1 p-2 border-2 dark:border-teal-100 border-teal-200">
    <Discord />
    </button>
    </a>
    </div>
    </div>
    </>
  )
}