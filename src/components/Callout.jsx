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
    <p>{summary}</p>
    </div>
    {isOpen && <div>{children}</div>}
    </div>
  )
}