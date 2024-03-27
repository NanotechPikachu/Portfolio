function Hobbies() {
  let h = [ "Watch Anime", "Read Novels", "Read Mangas, Manhwas, Manhuas", "Programming", "Listening to Music", "And much more..." ];

  return (
    <div className="mt-4 mb-2 border-t-2 border-teal-200 dark:border-teal-100 dark:text-slate-50 text-black text-sm md:text-base">
    <h2 className="font-bold underline text-lg md:text-xl mt-3 mb-3">Hobbies</h2>
    My hobbies are to
    <ul className="mt-2 ml-6 mr-6 list-disc font-medium">
    {
    h.map((x) => (
      <li key={x}>{x}</li>
    ))
    }
    </ul>
    </div>
  )
}

function Fav() {
  return (
    <div className="mt-4 mb-2 border-t-2 border-teal-200 dark:border-teal-100 dark:text-slate-50 text-black text-sm md:text-base">
    <h2 className="font-bold underline text-lg md:text-xl mt-3 mb-3">My Favorites</h2>
    My favorites of the respective category
    <ul className="mt-2 ml-6 mr-6 list-disc font-medium">
    <li key="anime"><span className="underline">Anime</span>: Sword Art Online</li>
    <li key="webnovel"><span className="underline">WebNovel</span>: Nanomancer Reborn</li>  
    <li key="lightNovel"><span className="underline">LightNovel</span>: Rascal Does Not Dream</li> 
    <li key="manga"><span className="underline">Manga</span>: The Eminence In Shadow</li>    
    <li key="manhwa"><span className="underline">Manhwa</span>: Solo Leveling</li>    
    <li key="manhua"><span className="underline">Manhua</span>: Tales Of Demons And Gods</li>    
    <li key="artist"><span className="underline">Music Artist</span>: NEFFEX</li>    
    <li key="animeSong"><span className="underline">Anime Song</span>: Idol (Oshi No Ko)</li>
    </ul>
    </div>
  )
}

// Randomizer JS Function 
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export { Hobbies, Fav }