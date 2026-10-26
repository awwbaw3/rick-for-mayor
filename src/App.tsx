import { useState, useEffect, lazy, Suspense } from 'react'
import UnderConstructionGate, { computeSha256 } from './UnderConstructionGate'
import { Lock } from 'lucide-react'

// Lazy load campaign content only after authentication to ensure zero campaign assets leak to unauthorized visitors
const CampaignPage = lazy(() => import('./CampaignPage'))

const STORAGE_KEY = 'site_access_authorized'

const AUTHORIZED_HASHES = new Set<string>([
  '4db24f040f42b4d246deb4393f0df2e288d28c8be141842e4c392f5dd82f5e84', // crowking2026
  'ccf2b2b55de35831e9364719d1596808c05c175e99136cd6c7337b93c4293197', // marshall2026
  'c633819f19c35dbd352966292eefbbdd3cd79b4628d708d75ae0e2d6815865bf', // rick2026
  'eb38c5d6339b0070d784d8d7aea5f708e664a4bea853e4c72013d775dfdad381', // marshall2028
  '07a6c9b976f1a69bc6f022933c5abb5b3d177a5c95b9913639e47a56ba42f22c', // albaugh2026
])

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false)
  const [isInitializing, setIsInitializing] = useState<boolean>(true)

  useEffect(() => {
    async function checkAuth() {
      try {
        // 1. Check for URL query parameter bypass (?pass=... or ?access=...)
        const params = new URLSearchParams(window.location.search)
        const urlPass = params.get('pass') || params.get('access') || params.get('key')

        if (urlPass) {
          const hash = await computeSha256(urlPass)
          const envPass = (import.meta.env.VITE_CAMPAIGN_ACCESS_CODE || '').trim().toLowerCase()
          if (AUTHORIZED_HASHES.has(hash) || (envPass && urlPass.trim().toLowerCase() === envPass)) {
            localStorage.setItem(STORAGE_KEY, 'true')
            setIsAuthorized(true)

            params.delete('pass')
            params.delete('access')
            params.delete('key')
            const cleanSearch = params.toString() ? `?${params.toString()}` : ''
            window.history.replaceState({}, '', `${window.location.pathname}${cleanSearch}${window.location.hash}`)
            setIsInitializing(false)
            return
          }
        }

        // 2. Check local/session storage
        const stored = localStorage.getItem(STORAGE_KEY) === 'true' || sessionStorage.getItem(STORAGE_KEY) === 'true'
        if (stored) {
          setIsAuthorized(true)
        }
      } catch {
        // Fallback for sandboxed browser storage
      } finally {
        setIsInitializing(false)
      }
    }

    checkAuth()
  }, [])

  // Sync document title dynamically
  useEffect(() => {
    if (isAuthorized) {
      document.title = 'Rick Albaugh for Mayor of Marshall, MI (2026) | Feathers First. Shirts Optional.'
    } else {
      document.title = 'Site Under Construction'
    }
  }, [isAuthorized])

  const handleAuthorize = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Ignore storage errors
    }
    setIsAuthorized(true)
  }

  const handleLockSite = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      sessionStorage.removeItem(STORAGE_KEY)
    } catch {
      // Ignore
    }
    setIsAuthorized(false)
  }

  if (isInitializing) {
    return <div className="min-h-screen bg-slate-950" />
  }

  if (!isAuthorized) {
    return <UnderConstructionGate onAuthorized={handleAuthorize} />
  }

  return (
    <>
      <Suspense
        fallback={
          <div className="min-h-screen bg-slate-950 flex items-center justify-center text-amber-400 font-mono text-sm">
            Loading...
          </div>
        }
      >
        <CampaignPage />
      </Suspense>

      {/* Floating Re-lock control for authorized reviewer */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={handleLockSite}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-amber-400 border border-slate-700 hover:border-amber-400/50 shadow-xl backdrop-blur-md transition-all cursor-pointer group"
          title="Return to Site Under Construction holding screen"
        >
          <Lock className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
          <span>Under Construction Mode</span>
          <span className="text-[10px] uppercase font-bold text-amber-300 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
            Lock Site
          </span>
        </button>
      </div>
    </>
  )
}
