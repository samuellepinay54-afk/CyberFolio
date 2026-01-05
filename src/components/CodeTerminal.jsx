import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const CodeTerminal = () => {
  const [currentCode, setCurrentCode] = useState('')
  const [codeIndex, setCodeIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const { theme } = useTheme()

  const codeSnippets = [
    'nmap -sV -sC target.com',
    'sqlmap -u "site.com/page?id=1" --dbs',
    'burpsuite --scan target.com',
    'hydra -l admin -P passwords.txt ssh://target',
    'metasploit > use exploit/windows/smb/ms17_010',
    'john --wordlist=rockyou.txt hash.txt',
    'aircrack-ng -w wordlist.txt capture.cap',
  ]

  useEffect(() => {
    const currentSnippet = codeSnippets[codeIndex]
    
    if (charIndex < currentSnippet.length) {
      const timer = setTimeout(() => {
        setCurrentCode(currentSnippet.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCodeIndex((codeIndex + 1) % codeSnippets.length)
        setCharIndex(0)
        setCurrentCode('')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [charIndex, codeIndex])

  return (
    <div
      className={`rounded-lg overflow-hidden border ${
        theme === 'dark'
          ? 'bg-slate-900 border-slate-700'
          : 'bg-slate-50 border-slate-300'
      }`}
    >
      <div
        className={`flex items-center gap-2 px-4 py-2 ${
          theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'
        }`}
      >
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-2 text-xs font-mono text-slate-500">security_scan.sh</span>
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="flex items-center gap-2">
          <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>
            $&nbsp;
          </span>
          <span className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}>
            {currentCode}
          </span>
          <span
            className={`animate-pulse ${
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
            }`}
          >
            _
          </span>
        </div>
      </div>
    </div>
  )
}

export default CodeTerminal

