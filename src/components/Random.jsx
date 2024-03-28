/* 
  ------- SUPPORT-FUNC -------
These functions provide support to other functions.
*/

import { useState, useEffect } from 'react';

function Quotes() {
  // Randomizer JS Function 
  function getRandom(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
  let q = [ 
"It’s impossible to work hard for something you don’t enjoy. ~ Silica",
"Everybody can fight. It’s just a choice of whether you should. ~ Kirito",
"Life isn’t just doing things for yourself. It’s possible to live in such a way that other people’s happiness, makes you happy too. ~ Asuna",
"A person is very strong when he seeks to protect something. ~ Kayaba",
"I\'d rather trust and regret, than doubt and regret. ~ Kirito"
  ];

  const [randomQuote, setRandomQuote] = useState('');
  useEffect(() => {
    const randomIndex = getRandom(0, q.length - 1);
    setRandomQuote(q[randomIndex]);
  }, []);
  
  return (
    <>
    <span className="dark:text-slate-50 text-black text-sm md:text-md hover:text-teal-100">{randomQuote}</span>
    </>
  )
}

export { Quotes }