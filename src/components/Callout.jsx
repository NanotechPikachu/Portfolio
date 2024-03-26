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
    <p className="ml-6 mr-6 mt-2 mb-2">{summary}</p>
    </div>
    {isOpen && <div className="ml-6 mr-6 mb-6 mt-6">{children}</div>}
    </div>
  )
}