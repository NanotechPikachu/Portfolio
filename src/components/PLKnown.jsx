export default function PLKnown() {
  let p = ["NodeJS", "Starlight(Docs)", "Docus(Docs)", "NextJS", "Python", "ReactJS", "TailwindCSS", "HTML", "CSS", "Markdown", "DiscordJS", "AoiJS"];
  return (
    <>
    <div className="mt-4 ml-2 mr-2 mb-2">
    {
    p.map((x) => (
      <div className="p-2 m-2 dark:bg-cyan-400 bg-cyan-500 text-center hover:p-3 font-bold text-black border border-amber-100">
      {x}
      </div>
    ))
    }
    </div>
    </>
  )
}