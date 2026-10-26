import { useState, type FormEvent } from 'react'
import { Lock, ArrowRight, ShieldAlert } from 'lucide-react'
import { isAuthorizedPasscode } from './siteAccessConfig'

interface UnderConstructionGateProps {
  onAuthorized: () => void
}

export default function UnderConstructionGate({ onAuthorized }: UnderConstructionGateProps) {
  const [password, setPassword] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!password.trim() || isVerifying) return

    setHasError(false)
    setIsVerifying(true)

    try {
      const authorized = await isAuthorizedPasscode(password)
      if (authorized) {
        onAuthorized()
      } else {
        setHasError(true)
        setIsShaking(true)
        setTimeout(() => setIsShaking(false), 500)
      }
    } catch {
      setHasError(true)
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <main className="min-h-screen w-full bg-slate-950 text-slate-100 flex items-center justify-center p-4 selection:bg-amber-400 selection:text-slate-950">
      <div className="w-full max-w-sm text-center space-y-8">
        {/* Minimal Understated Icon */}
        <div className="mx-auto w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shadow-xl">
          <Lock className="w-6 h-6 text-slate-400" />
        </div>

        {/* Minimal Under Construction Heading */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Site Under Construction
          </h1>
          <p className="text-xs text-slate-500 tracking-wide">
            Please enter your password to continue.
          </p>
        </div>

        {/* Minimal Password Prompt */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-3 ${isShaking ? 'animate-shake' : ''}`}
        >
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (hasError) setHasError(false)
              }}
              autoFocus
              autoComplete="current-password"
              placeholder="Password"
              aria-label="Site password"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-600 text-sm outline-none transition"
            />
          </div>

          {hasError && (
            <div
              role="alert"
              className="flex items-center justify-center gap-1.5 text-xs text-red-400 font-medium"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Incorrect password.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isVerifying || !password.trim()}
            className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-amber-400/10"
          >
            {isVerifying ? (
              <span>Verifying...</span>
            ) : (
              <>
                <span>Enter</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  )
}
