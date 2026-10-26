import { useState, useEffect, lazy, Suspense } from 'react'
import UnderConstructionGate from './UnderConstructionGate'
import { isAuthorizedPasscode } from './siteAccessConfig'
import { Lock } from 'lucide-react'

// Lazy load campaign content only after authentication to ensure zero campaign assets leak to unauthorized visitors
const CampaignPage = lazy(() => import('./CampaignPage'))

const STORAGE_KEY = 'site_access_authorized'

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
          const authorized = await isAuthorizedPasscode(urlPass)
          if (authorized) {
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
