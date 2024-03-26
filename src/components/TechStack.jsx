import PLKnown from './PLKnown.jsx';

export default function TechStack() {
  return (
    <>
    <div className="mr-6 ml-6 mt-6 border-2 rounded-lg dark:border-teal-100 border-teal-200 dark:bg-[#2E3532] bg-slate-100">
    <div className="mt-2 mr-6 ml-6 mb-2">
    <h2 className="text-center dark:text-white text-black underline text-xl md:text-2xl"><b>Tech Stack</b></h2>
    <p className="mt-2 text-center text-black dark:text-slate-50 text-sm md:text-base font-mono"><i>
I&apos;m basically a website developer and Discord bot maker focusing on JS.
    </i></p>
    </div>
    <PLKnown />
    <p className="ml-6 mr-6 mt-4 mb-6 text-sm md:text-base text-black md:text-center dark:text-slate-50 italic">
<b>Note:</b> The <span className="font-medium">DiscordJS</span> and <span className="font-medium">AoiJS</span> are Discord libraries interacting with Discord API while <span className="font-medium">Starlight</span> and <span className="font-medium">Docus</span> are documentation making packages by Astro and Nuxt respectively.
    </p>
    </div>
    </>
  )
}