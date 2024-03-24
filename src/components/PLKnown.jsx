export default function PLKnown() {
  let p = ["NodeJS", "Starlight(Docs)", "Docus(Docs)", "NextJS", "Python", "ReactJS", "TailwindCSS", "HTML", "CSS", "Markdown", "DiscordJS", "AoiJS"];
  return (
    <>
    <div className="mt-4 ml-2 mr-2 mb-2 flex flex-wrap">
    {
    p.map((x) => (
      <div key={x} className="p-2 m-2 dark:bg-cyan-400 bg-cyan-500 text-center hover:text-[15px] md:hover:text-[18px] font-bold text-black text-small md:text-base rounded-lg border border-amber-100 text-sans">
      {x}
      </div>
    ))
    }
    </div>
    </>
  )
}