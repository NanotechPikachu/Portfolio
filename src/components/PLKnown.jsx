export default function PLKnown() {
  let p = ["NodeJS", "Starlight(Docs)", "Docus(Docs)", "NextJS", "Python", "ReactJS", "TailwindCSS", "HTML", "CSS", "Markdown", "DiscordJS", "AoiJS"];
  return (
    <>
    <div className="mt-4 ml-6 mr-6 mb-2 flex flex-wrap">
    {
    p.map((x) => (
      <div key={x} className="p-2 m-2 dark:bg-teal-100 bg-teal-200 text-center hover:text-[15px] md:hover:text-[17px] font-bold text-black text-sm md:text-base rounded-lg border border-amber-100 text-sans">
      {x}
      </div>
    ))
    }
    </div>
    </>
  )
}