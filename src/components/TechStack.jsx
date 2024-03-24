import PLKnown from './PLKnown.jsx';

export default function TechStack() {
  return (
    <>
    <div className="mr-2 ml-2 mt-6 border dark:border-emerald-600 border-emerald-400 dark:bg-[#2E3532] bg-slate-100">
    <div className="mt-2 mr-2 ml-2 mb-2">
    <h2 className="text-center dark:text-white text-black underline text-xl md:text-2xl"><b>Tech Stack</b></h2>
    <p className="mt-2 text-center text-black dark:text-slate-50 text-sm md:text-base font-mono"><i>
I&apos;m basically a website developer and Discord bot maker focusing on JS.
    </i></p>
    </div>
    <PLKnown />
    <p className="mt-4 text-sm md:text-base text-black dark:text-slate-50 italic">
The <span className="font-medium">DiscordJS</span> and <span className="font-medium">AoiJS</span> are Discord libraries interacting with Discord API while <span className="font-medium">Starlight</span> and <span className="font-medium">Docus</span> are documentation making packages by Astro and Nuxt respectively.
    </p>
    </div>
    </>
  )
}