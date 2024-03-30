import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Theme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="flex justify-end">
    <select value={theme} onChange={e => setTheme(e.target.value)} data-test-id="theme-selector">
    <option value="system">System</option>
    {mounted && (
    <>
    <option value="dark">Dark</option>
    <option value="light">Light</option>
    </>
    )}
    </select>
    </div>
  )
}