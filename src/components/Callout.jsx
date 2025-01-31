/* 
  ------- SUPPORT-FUNC -------
These functions provide support to other functions.
*/

"use client"

import { useState } from 'react';

export default function Callout({ summary, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCallout() {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <div className="cursor-pointer" onClick={handleCallout}>
    <p className="text-sm md:text-base font-bold text-black dark:text-slate-50 ml-6 mr-6 mt-2 mb-2">{summary}&nbsp;&nbsp;{isOpen ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}</p>
    </div>
    {isOpen && <div className="text-sm md:text-base text-black dark:text-slate-50 ml-6 mr-6 mb-4 mt-2">{children}</div>}
    </div>
  )
}