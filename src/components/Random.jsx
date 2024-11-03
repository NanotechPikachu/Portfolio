/* 
  ------- SUPPORT-FUNC -------
These functions provide support to other functions.
*/

"use client"

// Randomizer JS Function 
function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

import { useState, useEffect } from 'react';

function Quotes() {
  let q = [ 
"It’s impossible to work hard for something you don’t enjoy. ~ Silica",
"Everybody can fight. It’s just a choice of whether you should. ~ Kirito",
"Life isn’t just doing things for yourself. It’s possible to live in such a way that other people’s happiness, makes you happy too. ~ Asuna",
"A person is very strong when he seeks to protect something. ~ Kayaba",
"I\'d rather trust and regret, than doubt and regret. ~ Kirito",
"The world isn\'t going to change just because you want it to, but it will change because you take action. ~ Gin-san",
"The greatest wealth is neither silver not gold, but the bonds that we make. ~ Gin-san"
  ];

  const [randomQuote, setRandomQuote] = useState('');
  useEffect(() => {
    const randomIndex = getRandom(0, q.length);
    setRandomQuote(q[randomIndex]);
  }, []);
  
  return (
    <>
    <span className="dark:text-slate-50 text-black text-sm md:text-base hover:text-teal-100">{randomQuote}</span>
    </>
  )
}

function Anime() {
  let a = [ 
"Sword Art Online", "The Eminence In Shadow", "Classroom Of The Elite", "Tomodachi Game", "Fate", "Death Note", "Oshi No Ko", "Horimiya", "Tower Of God", "Apothecary Diaries", "Gintama", "Darling In The FranXX"
  ];

  const [randomAnime, setRandomAnime] = useState('');
  useEffect(() => {
    const randomIndex = getRandom(0, a.length);
    setRandomAnime(a[randomIndex]);
  }, []);
  
  return (
    <>
    <span className="dark:text-slate-50 text-black text-sm md:text-base hover:text-teal-100">{randomAnime}</span>
    </>
  )
}

function WN() {
  let w = [ 
"Nanomancer Reborn", "Supreme Magus"
  ];

  const [randomWN, setRandomWN] = useState('');
  useEffect(() => {
    const randomIndex = getRandom(0, w.length);
    setRandomWN(w[randomIndex]);
  }, []);
  
  return (
    <>
    <span className="dark:text-slate-50 text-black text-sm md:text-base hover:text-teal-100">{randomWN}</span>
    </>
  )
}

function LN() {
  let l = [ 
"Sword Art Online", "Rascal Does Not Dream", "Mushoku Tensei", "Arifureta", "86", "Classroom Of The Elite Year 2"
  ];

  const [randomLN, setRandomLN] = useState('');
  useEffect(() => {
    const randomIndex = getRandom(0, l.length);
    setRandomLN(l[randomIndex]);
  }, []);
  
  return (
    <>
    <span className="dark:text-slate-50 text-black text-sm md:text-base hover:text-teal-100">{randomLN}</span>
    </>
  )
}

function Manhwa() {
  let m = [ 
"Solo Leveling", "Solo Max Level: Newbie", "Omniscient Reader", "The Novel's Extra"
  ];

  const [randomManhwa, setRandomManhwa] = useState('');
  useEffect(() => {
    const randomIndex = getRandom(0, m.length);
    setRandomManhwa(m[randomIndex]);
  }, []);
  
  return (
    <>
    <span className="dark:text-slate-50 text-black text-sm md:text-base hover:text-teal-100">{randomManhwa}</span>
    </>
  )
}

function Manga() {
  let m = [ 
"The Eminence in Shadow", "Tomodachi Game"
  ];

  const [randomManga, setRandomManga] = useState('');
  useEffect(() => {
    const randomIndex = getRandom(0, m.length);
    setRandomManga(m[randomIndex]);
  }, []);
  
  return (
    <>
    <span className="dark:text-slate-50 text-black text-sm md:text-base hover:text-teal-100">{randomManga}</span>
    </>
  )
}

export { Quotes, Anime, LN, WN, Manhwa, Manga }