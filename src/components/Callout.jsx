import { useState } from 'react';

export default function Callout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCallout() {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-6" onClick={handleCallout}>
    <p>Click me</p>
    {isOpen && <div>{children}</div>}
    </div>
  )
}