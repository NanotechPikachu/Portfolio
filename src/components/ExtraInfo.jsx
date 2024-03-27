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
  let h = { anime: "Sword Art Online", webnovel: "Nanomancer Reborn", artist: "NEFFEX", manhwa: "Solo Leveling", manhua: "Tales of Demons and Gods", manga: "The Eminence in Shadow", animeSong: "Idol", ln: "Rascal Does Not Dream" };

  return (
    <div className="mt-4 mb-2 border-t-2 border-teal-200 dark:border-teal-100 dark:text-slate-50 text-black text-sm md:text-base">
    <h2 className="font-bold underline text-lg md:text-xl mt-3 mb-3">My Favorites</h2>
    My favorites of the respective category
    <ul className="mt-2 ml-6 mr-6 list-disc font-medium">
    <li key="anime"><span className="underline">Anime: </span>{h.anime}</li>
    <li key="webnovel"><span className="underline">WebNovel: </span>{h.webnovel}</li>  
    <li key="lightNovel"><span className="underline">LightNovel: </span>{h.ln}</li  
    <li key="manga"><span className="underline">Manga: </span>{h.manga}</li>    
    <li key="manhwa"><span className="underline">Manhwa: </span>{h.manhwa}</li>    
    <li key="manhua"><span className="underline">Manhua: </span>{h.manhua}</li>    
    <li key="artist"><span className="underline">Music Artist: </span>{h.artist}</li>    
    <li key="animeSong"><span className="underline">Anime Song: </span>{h.animeSong}</li>
    </ul>
    </div>
  )
}

export { Hobbies, Fav }