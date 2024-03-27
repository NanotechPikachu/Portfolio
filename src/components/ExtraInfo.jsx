export function Hobbies() {
  let h = [ "Watch Anime", "Read Novels", "Read Mangas, Manhwas, Manhuas", "Programming", "Listening to Music", "And much more..." ];

  return (
    <div className="mt-4 mb-2 border-t-2 border-teal-200 dark:border-teal-100 dark:text-slate-50 text-black text-sm md:text-base">
    <h2 className="font-bold underline text-lg md:text-xl mb-3">Hobbies</h2>
    My hobbies are
    <ul className="list-disc font-medium">
    {
    h.map((x) => (
      <li key={x}>{x}</li>
    ))
    }
    </ul>
    </div>
  )
}