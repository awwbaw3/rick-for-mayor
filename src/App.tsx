import { useEffect, useRef, useState } from 'react'
import {
  Award,
  CheckCircle2,
  Crown,
  ExternalLink,
  Feather,
  FileWarning,
  Gavel,
  Megaphone,
  Network,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  Vote,
  X,
} from 'lucide-react'
import {
  CANDIDATE_COMPARISON,
  ENDORSEMENT_QUOTES,
  PLATFORM_PILLARS,
  TICKER_ITEMS,
} from './campaignData'

type BallotChoice = 'rick' | 'ryan' | 'scott' | null

export default function App() {
  const [ballotChoice, setBallotChoice] = useState<BallotChoice>(null)
  const [pingRunning, setPingRunning] = useState(false)
  const [pingStep, setPingStep] = useState(0)
  const [buzzwordInput, setBuzzwordInput] = useState(
    "Let's leverage synergies to delve into a seamless paradigm for Fountain Circle."
  )
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const slipDialogRef = useRef<HTMLDialogElement | null>(null)

  // Light-dismiss fallback for browsers without native HTMLDialogElement.prototype.closedBy
  useEffect(() => {
    const dialogs = [dialogRef.current, slipDialogRef.current].filter(
      (d): d is HTMLDialogElement => d !== null
    )

    const handlers = dialogs.map((dialog) => {
      const handler = (event: MouseEvent) => {
        if ('closedBy' in HTMLDialogElement.prototype) return
        if (event.target !== dialog) return
        const rect = dialog.getBoundingClientRect()
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        if (!isDialogContent) {
          dialog.close()
        }
      }
      dialog.addEventListener('click', handler)
      return { dialog, handler }
    })

    return () => {
      handlers.forEach(({ dialog, handler }) =>
        dialog.removeEventListener('click', handler)
      )
    }
  }, [])

  const openBallotModal = (choice: BallotChoice) => {
    setBallotChoice(choice)
    dialogRef.current?.showModal()
  }

  const openSlipModal = () => {
    slipDialogRef.current?.showModal()
  }

  const runFountainCirclePing = () => {
    setPingRunning(true)
    setPingStep(1)
    setTimeout(() => setPingStep(2), 450)
    setTimeout(() => setPingStep(3), 950)
    setTimeout(() => {
      setPingStep(4)
      setPingRunning(false)
    }, 1500)
  }

  const translateBuzzwords = (input: string): string => {
    const lower = input.toLowerCase()
    const bannedHits = [
      'synergy',
      'synergies',
      'seamless paradigm',
      'delve',
      'fast-paced digital',
      'game-changer',
      'revolutionize',
      'beacon of hope',
    ].filter((w) => lower.includes(w))

    if (bannedHits.length === 0 && input.trim().length > 0) {
      return `✅ APPROVED BY RICK'S VOICE CALIBRATION ENGINE: Plain-spoken, grounded, zero corporate filler. Still, go vote for Scott Wolfersberger on November 3!`
    }

    return `🚨 CITATION ISSUED (${bannedHits.length || 1} Banned Buzzwords Detected: ${
      bannedHits.join(', ') || 'corporate fluff'
    }). Rick Albaugh Translation: "Here's the issue, here's what the ping test showed, and here are your Good / Better / Best options: Skip the buzzwords and re-elect Mayor Scott Wolfersberger on Nov 3."`
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Breaking Campaign Ticker */}
      <div className="bg-amber-400 text-slate-950 font-black text-xs sm:text-sm py-2 overflow-hidden border-b-2 border-amber-500 sticky top-0 z-40 shadow-lg">
        <div className="animate-marquee whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <span key={idx} className="mx-6 inline-flex items-center gap-2 tracking-wide">
              {item}
              <span className="text-red-700 font-extrabold">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Campaign Navigation Header */}
      <header className="border-b border-slate-800/90 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-red-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black tracking-tight text-lg sm:text-xl text-white uppercase">
                  ALBAUGH <span className="text-amber-400">2026</span>
                </span>
                <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded-full bg-red-600/20 text-red-300 border border-red-500/40">
                  Marshall Mayor
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Feathers First • Shirts Optional • Actually Endorsing Scott Wolfersberger
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
            <a href="#platform" className="hover:text-amber-400 transition-colors">
              Good / Better / Best Platform
            </a>
            <a href="#docket" className="hover:text-amber-400 transition-colors">
              Copper A.C. Pardon
            </a>
            <a href="#diagnostics" className="hover:text-amber-400 transition-colors">
              Fountain Circle Ping Test
            </a>
            <a href="#compare" className="hover:text-amber-400 transition-colors">
              Rick vs. Ryan vs. Scott
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => openBallotModal('rick')}
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs sm:text-sm border border-amber-400/40 transition cursor-pointer"
            >
              Wait, Is Rick Serious?
            </button>
            <a
              href="https://votescott4mayor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm inline-flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition"
            >
              Vote Scott Wolfersberger
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden py-10 sm:py-16 lg:py-20 border-b border-slate-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Campaign Manifesto */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-wider">
                  <Feather className="w-4 h-4 text-amber-400" />
                  <span>Official 2026 Marshall Mayoral Disruption Committee</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.05]">
                  WHY SETTLE FOR <span className="text-red-400 line-through decoration-4">RYAN WATSON</span> WHEN YOU CAN ELECT{' '}
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200 bg-clip-text text-transparent">
                    THE CROW KING OF MARSHALL?
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium">
                  Ryan Watson says Marshall needs &ldquo;fresh grassroots energy at Fountain Circle.&rdquo;
                  Look at this photo. Nobody in Calhoun County has more grassroots energy—or fewer
                  buttons on their blazer—than <strong className="text-white">Rick Albaugh</strong>.
                </p>

                <div className="p-5 rounded-2xl bg-slate-900/90 border-2 border-amber-400/40 shadow-xl space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-black text-sm uppercase tracking-wider">
                    <Megaphone className="w-4 h-4" />
                    <span>Disarming Candor: The Real Campaign Message</span>
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    Let&apos;s cut straight to the root cause: <strong className="text-white">I am not actually asking for your vote.</strong>{' '}
                    Hannah already vetoed me showing up to City Council in black leggings and a feathered crown, and I have networks to diagnose, websites to build, and Copper Athletic Club demerits to appeal.
                  </p>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    If you want an IT professional who <em>actually wears a shirt</em>, understands municipal budgets, built Marshall&apos;s{' '}
                    <strong className="text-amber-300">Neighborhood Improvement Authorities (NIAs)</strong> to solve our housing shortage, and keeps our city moving forward without political theater—re-elect incumbent{' '}
                    <strong className="text-emerald-400 underline decoration-emerald-400/60 underline-offset-4">
                      Mayor Scott Wolfersberger
                    </strong>{' '}
                    on <strong className="text-white">Tuesday, November 3, 2026</strong>.
                  </p>
                </div>

                {/* Interactive Ballot Simulator Buttons */}
                <div className="pt-2">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">
                    👇 Test Your November 3, 2026 Marshall Mayoral Ballot Below:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => openBallotModal('scott')}
                      className="p-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-left transition shadow-lg shadow-emerald-500/20 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider bg-slate-950/20 px-2 py-0.5 rounded font-extrabold">
                          BEST OPTION
                        </span>
                        <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="mt-2 text-base">Vote Scott Wolfersberger</div>
                      <div className="text-xs font-bold opacity-80">
                        Actual Mayor • Wears A Shirt • Proven Record
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => openBallotModal('rick')}
                      className="p-4 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border-2 border-amber-400/50 text-amber-200 font-black text-left transition cursor-pointer group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-extrabold">
                          CHAOS OPTION
                        </span>
                        <Crown className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
                      </div>
                      <div className="mt-2 text-base text-white">Write-In Rick Albaugh</div>
                      <div className="text-xs font-medium text-amber-300/90">
                        Free Gin &amp; Diet Coke • Feathers Mandatory
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => openBallotModal('ryan')}
                      className="p-4 rounded-xl bg-slate-900 hover:bg-red-950/50 border border-slate-700 hover:border-red-500/50 text-slate-300 font-bold text-left transition cursor-pointer group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-extrabold">
                          PACKET LOSS
                        </span>
                        <ShieldAlert className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="mt-2 text-base text-white">Vote Ryan Watson</div>
                      <div className="text-xs text-slate-400">
                        Unverified VPN • Excessive Buzzwords
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: The Glorious Uploaded Photo */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500 via-red-600 to-purple-700 opacity-60 blur-xl" />
                  <figure className="relative rounded-3xl overflow-hidden border-4 border-amber-400/80 bg-slate-900 shadow-2xl">
                    <div className="bg-slate-950/90 px-4 py-2.5 border-b border-amber-400/30 flex items-center justify-between text-xs font-extrabold">
                      <span className="text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4" /> Official Mayoral Portrait
                      </span>
                      <span className="text-slate-400 font-mono">EXHIBIT A: THE HEADBAND :) &lt;3</span>
                    </div>

                    <img
                      src="/rick-crow-king.jpg"
                      alt="Rick Albaugh wearing a black feather crown headband and feather mantle with open blazer and leggings, flanked by his feathered campaign cabinet"
                      fetchPriority="high"
                      width="439"
                      height="585"
                      className="w-full h-auto object-cover object-center block"
                    />

                    <figcaption className="p-4 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-900/90 border-t border-slate-800 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded bg-amber-400 text-slate-950">
                          Candidate Rick Albaugh &amp; Senior Feather Cabinet
                        </span>
                        <button
                          type="button"
                          onClick={openSlipModal}
                          className="text-xs font-bold text-amber-300 hover:text-amber-200 underline cursor-pointer"
                        >
                          View Copper A.C. Citation #212309 →
                        </button>
                      </div>
                      <p className="text-xs text-slate-300 leading-snug">
                        &ldquo;When Ryan Watson said Marshall needed more transparency, I immediately removed my shirt, put on a crow halo, and closed my eyes in deep municipal meditation.&rdquo;
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Good / Better / Best Platform Section */}
        <section id="platform" className="py-16 sm:py-20 border-b border-slate-800 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 text-amber-400 font-black text-xs uppercase tracking-widest">
                <Award className="w-4 h-4" />
                <span>The Rick Albaugh Problem-Solving Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                NO CORPORATE FLUFF. JUST <span className="text-amber-400">GOOD / BETTER / BEST</span> MUNICIPAL SOLUTIONS.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Anyone who knows Rick knows how he operates: state the issue, report what the diagnostic tests showed, state the realistic root cause, and offer three clear tiers. Here is our 2026 platform for Marshall:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {PLATFORM_PILLARS.map((pillar) => (
                <article
                  key={pillar.id}
                  id={pillar.id === 'copper-amnesty' ? 'docket' : undefined}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/50 transition p-6 sm:p-8 flex flex-col justify-between shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="inline-block text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      {pillar.badge}
                    </div>
                    <h3 className="text-2xl font-black text-white leading-snug">{pillar.title}</h3>
                    <p className="text-sm font-semibold text-amber-300/90">{pillar.subtitle}</p>

                    <div className="space-y-3 pt-2 text-sm text-slate-300 leading-relaxed">
                      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                        <span className="font-black text-red-400 uppercase text-xs block mb-1">
                          1. Problem Statement:
                        </span>
                        {pillar.problem}
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                        <span className="font-black text-cyan-400 uppercase text-xs block mb-1">
                          2. Survey Assessment &amp; Root Cause:
                        </span>
                        {pillar.surveyAssessment}
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                        3. Actionable Tiered Recommendations:
                      </div>
                      <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-xs sm:text-sm">
                        <span className="font-black text-slate-200 uppercase mr-2">[GOOD]</span>
                        <span className="text-slate-300">{pillar.recommendation.good}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-400/30 text-xs sm:text-sm">
                        <span className="font-black text-amber-300 uppercase mr-2">[BETTER]</span>
                        <span className="text-slate-200">{pillar.recommendation.better}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-400/40 text-xs sm:text-sm">
                        <span className="font-black text-emerald-300 uppercase mr-2">[BEST]</span>
                        <span className="text-white font-semibold">{pillar.recommendation.best}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs text-slate-400 font-mono">
                    <span>{pillar.footnote}</span>
                    {pillar.id === 'copper-amnesty' && (
                      <button
                        type="button"
                        onClick={openSlipModal}
                        className="text-amber-400 hover:underline font-sans font-bold shrink-0 cursor-pointer"
                      >
                        Inspect Slip #212309 →
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Diagnostics Lab: Fountain Circle Ping Test + Banned Buzzword Translator */}
        <section
          id="diagnostics"
          className="py-16 sm:py-20 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-xs uppercase tracking-widest">
                <Terminal className="w-4 h-4" />
                <span>Interactive Municipal Diagnostics Lab</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                TEST RYAN WATSON&apos;S RHETORIC AGAINST RICK&apos;S NETWORK TOOLS
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Don&apos;t take a candidate&apos;s word for it. Run a live Fountain Circle packet-loss diagnostic or run any campaign speech through Rick&apos;s Banned Corporate Buzzword Filter.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tool 1: Fountain Circle Ping Utility */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                      <Network className="w-4 h-4" /> Diagnostic #1: Fountain Circle VPN &amp; Mayoral Readiness Ping
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      ICMP 8.8.8.8 / 12.170.87.185
                    </span>
                  </div>

                  <div className="rounded-xl bg-black/90 border border-slate-800 p-4 font-mono text-xs sm:text-sm text-emerald-400 min-h-[240px] space-y-2">
                    <div className="text-slate-500">
                      C:\Marshall\Election2026&gt; ping -n 4 mayor-readiness.marshall.mi.us
                    </div>
                    {pingStep === 0 && (
                      <div className="text-slate-400 pt-4">
                        Click &ldquo;Run Live Diagnostic&rdquo; below to test candidate infrastructure readiness between Marshall, Battle Creek, and Lake Odessa...
                      </div>
                    )}
                    {pingStep >= 1 && (
                      <div>
                        [1/4] Pinging Google DNS (8.8.8.8) &amp; Lake Odessa node (12.170.87.185)... 0% packet loss. Internet ISP is solid.
                      </div>
                    )}
                    {pingStep >= 2 && (
                      <div className="text-amber-300">
                        [2/4] Scanning Candidate RICK ALBAUGH... WARNING: 3 Copper A.C. Demerits found (Gin &amp; Diet Coke, Too Many Seat Moves, Feather Headband). Shirt status: OFFLINE.
                      </div>
                    )}
                    {pingStep >= 3 && (
                      <div className="text-red-400">
                        [3/4] Scanning Challenger RYAN WATSON... ERROR: Device returns only Fountain Circle talking points. Zero municipal NIA housing deployments detected.
                      </div>
                    )}
                    {pingStep >= 4 && (
                      <div className="text-emerald-300 font-bold pt-1 border-t border-slate-800">
                        [4/4] Scanning Incumbent MAYOR SCOTT WOLFERSBERGER... 100% UPTIME. Career IT Pro + City Council since 2018 + Active NIAs + Wears a shirt. RECOMMENDATION: RE-ELECT ON NOV 3.
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={runFountainCirclePing}
                    disabled={pingRunning}
                    className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 font-black text-sm transition cursor-pointer"
                  >
                    {pingRunning ? 'Pinging Fountain Circle...' : 'Run Live Ping Diagnostic'}
                  </button>
                  <span className="text-xs text-slate-400">
                    Zero End-of-Life Cisco routers harmed
                  </span>
                </div>
              </div>

              {/* Tool 2: Banned Buzzword Calibrator */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                      <Gavel className="w-4 h-4" /> Diagnostic #2: Rick&apos;s Anti-Buzzword Ordinance Filter
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      Strict Tone Calibration
                    </span>
                  </div>

                  <label className="block text-xs text-slate-400 font-semibold">
                    Paste any political speech below (Banned words: <code className="text-amber-300">synergy</code>,{' '}
                    <code className="text-amber-300">seamless paradigm</code>,{' '}
                    <code className="text-amber-300">delve</code>,{' '}
                    <code className="text-amber-300">game-changer</code>):
                  </label>
                  <textarea
                    rows={3}
                    value={buzzwordInput}
                    onChange={(e) => setBuzzwordInput(e.target.value)}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-amber-400"
                  />

                  <div className="rounded-xl bg-slate-900/90 border border-amber-400/30 p-4 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {translateBuzzwords(buzzwordInput)}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setBuzzwordInput(
                        "In today's fast-paced digital landscape, we must delve into a seamless paradigm of grassroots synergy."
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 cursor-pointer"
                  >
                    Test Corporate Buzzword Salad
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setBuzzwordInput(
                        'We evaluated the Neighborhood Improvement Authorities, fixed the water agreements, and kept Marshall moving forward.'
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-300 cursor-pointer"
                  >
                    Test Scott Wolfersberger Record
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Candidate Comparison Table */}
        <section id="compare" className="py-16 sm:py-20 border-b border-slate-800 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                2026 Marshall Mayoral Tale of the Tape
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                HOW THE CANDIDATES STACK UP
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Weighing all three options with complete transparency before you head to the polls on Tuesday, November 3, 2026.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-xs sm:text-sm uppercase">
                    <th className="p-4 sm:p-5 font-black text-slate-300">Evaluation Metric</th>
                    <th className="p-4 sm:p-5 font-black text-amber-400 bg-amber-400/5">
                      🦅 Rick Albaugh (Satire Write-In)
                    </th>
                    <th className="p-4 sm:p-5 font-black text-emerald-400 bg-emerald-500/10 border-x border-emerald-500/30">
                      ✅ Mayor Scott Wolfersberger (Incumbent)
                    </th>
                    <th className="p-4 sm:p-5 font-black text-slate-400">
                      Ryan Watson (Challenger)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-xs sm:text-sm">
                  {CANDIDATE_COMPARISON.map((row) => (
                    <tr key={row.metric} className="hover:bg-slate-900/50 transition">
                      <td className="p-4 sm:p-5 font-bold text-white">{row.metric}</td>
                      <td className="p-4 sm:p-5 text-amber-200/90 bg-amber-400/5">{row.rick}</td>
                      <td className="p-4 sm:p-5 text-emerald-200 font-semibold bg-emerald-500/10 border-x border-emerald-500/30">
                        {row.scott}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-400">{row.ryan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quotes from Rick's Inner Circle */}
        <section className="py-16 sm:py-20 border-b border-slate-800 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-black text-center text-white mb-10">
              WHAT MARSHALL&apos;S MOST IMPORTANT VOICES ARE SAYING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ENDORSEMENT_QUOTES.map((item) => (
                <blockquote
                  key={item.author}
                  className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between shadow-lg"
                >
                  <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-6 pt-4 border-t border-slate-800">
                    <div className="font-black text-amber-400 text-sm">{item.author}</div>
                    <div className="text-xs text-slate-400">{item.role}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Final Serious Endorsement Call-to-Action Banner */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Endorsement • November 3, 2026 General Election</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              ALL JOKES ASIDE: KEEP MARSHALL IN GOOD HANDS WITH{' '}
              <span className="text-emerald-400">MAYOR SCOTT WOLFERSBERGER</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Marshall deserves steady, experienced leadership that understands infrastructure, housing development, and practical city management. Join Rick, Hannah, and neighbors across all wards in voting to re-elect{' '}
              <strong className="text-white">Mayor Scott Wolfersberger</strong> on Tuesday, November 3!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://votescott4mayor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-base inline-flex items-center gap-2 shadow-xl shadow-emerald-500/25 transition"
              >
                <Vote className="w-5 h-5" />
                Visit VoteScott4Mayor.com
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={openSlipModal}
                className="px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-base border border-slate-700 transition cursor-pointer"
              >
                Inspect Rick&apos;s Copper A.C. Demerit Slip
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8 text-center text-xs text-slate-500 space-y-2 px-4">
        <p className="font-semibold text-slate-400">
          Paid for by The Committee to Keep Rick in a Shirt &amp; Re-Elect Mayor Scott Wolfersberger (0 AG1 Pouches Used).
        </p>
        <p>
          100% Tongue-in-Cheek Parody &amp; Satire by Rick Albaugh • Marshall, Michigan • Remember to vote on Tuesday, November 3, 2026!
        </p>
      </footer>

      {/* Native Light-Dismiss Dialog 1: Interactive Ballot Result Modal */}
      <dialog
        ref={dialogRef}
        closedby="any"
        aria-labelledby="ballot-dialog-title"
        className="m-auto w-full max-w-lg rounded-2xl bg-slate-900 text-slate-100 border-2 border-amber-400/60 p-0 shadow-2xl"
      >
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2.5">
              {ballotChoice === 'scott' ? (
                <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" />
              ) : ballotChoice === 'rick' ? (
                <Crown className="w-7 h-7 text-amber-400 shrink-0" />
              ) : (
                <ShieldAlert className="w-7 h-7 text-red-400 shrink-0" />
              )}
              <h3 id="ballot-dialog-title" className="text-xl font-black text-white">
                {ballotChoice === 'scott' && '✅ BALLOT VERIFIED: ZERO PACKET LOSS!'}
                {ballotChoice === 'rick' && '🦅 ERROR 403: CANDIDATE SHIRT NOT FOUND'}
                {ballotChoice === 'ryan' && '🚨 DIAGNOSTIC ALERT: END-OF-LIFE RHETORIC'}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {ballotChoice === 'scott' && (
            <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
              <p>
                <strong className="text-emerald-300">Smart move.</strong> You selected the candidate who actually wears a shirt, served Ward 1 and the City of Marshall since 2018, and knows how Neighborhood Improvement Authorities (NIAs), municipal infrastructure, and IT systems actually work.
              </p>
              <p>
                Make sure to cast your real ballot for <strong className="text-white">Scott Wolfersberger</strong> on <strong className="text-white">Tuesday, November 3, 2026</strong>!
              </p>
            </div>
          )}

          {ballotChoice === 'rick' && (
            <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
              <p>
                Look, I&apos;m honored that you want the Feather Crown Administration, free Gin &amp; Diet Cokes at Copper Athletic Club, and mandatory MFA at Fountain Circle.
              </p>
              <p>
                However, Hannah has strictly forbidden me from attending City Council meetings shirtless in leggings, and <strong className="text-emerald-300">Mayor Scott Wolfersberger</strong> is already a fellow IT professional doing a phenomenal job running Marshall. Do me a favor and give your actual vote to Scott on Nov 3!
              </p>
            </div>
          )}

          {ballotChoice === 'ryan' && (
            <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
              <p>
                We ran a ping test on this selection and detected <strong className="text-red-400">98% buzzword packet loss</strong>. If you were tempted to vote against the incumbent just for &ldquo;disruption,&rdquo; look at my feather crown photo again—that&apos;s what real disruption looks like.
              </p>
              <p>
                Let&apos;s keep Marshall on a proven track instead: vote to re-elect <strong className="text-emerald-300">Mayor Scott Wolfersberger</strong> on November 3!
              </p>
            </div>
          )}

          <div className="pt-3 flex flex-wrap items-center justify-end gap-3 border-t border-slate-800">
            <a
              href="https://votescott4mayor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs sm:text-sm inline-flex items-center gap-1.5"
            >
              Go to VoteScott4Mayor.com
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>

      {/* Native Light-Dismiss Dialog 2: Copper A.C. Demerit Slip #212309 Evidence Modal */}
      <dialog
        ref={slipDialogRef}
        closedby="any"
        aria-labelledby="slip-dialog-title"
        className="m-auto w-full max-w-lg rounded-2xl bg-amber-50 text-slate-900 border-4 border-slate-900 p-0 shadow-2xl"
      >
        <div className="p-6 space-y-4 font-mono">
          <div className="flex items-start justify-between border-b-2 border-slate-900 pb-3">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-red-700 flex items-center gap-1">
                <FileWarning className="w-4 h-4" /> Official Ring of Honor Docket Evidence
              </div>
              <h3 id="slip-dialog-title" className="text-lg font-black text-slate-950 mt-0.5">
                COPPER ATHLETIC CLUB — DEMERIT SLIP
              </h3>
            </div>
            <button
              type="button"
              onClick={() => slipDialogRef.current?.close()}
              className="p-1 rounded text-slate-600 hover:text-slate-950 cursor-pointer"
              aria-label="Close evidence slip"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs bg-amber-100/80 p-3 rounded border border-amber-300">
            <div>
              <span className="text-slate-500 block">PATRON / STUDENT:</span>
              <strong className="text-slate-950 text-sm">Rick Albaugh</strong>
            </div>
            <div>
              <span className="text-slate-500 block">DATE &amp; TIME:</span>
              <strong className="text-slate-950">Oct 17, 2026 @ 9:09 PM</strong>
            </div>
            <div>
              <span className="text-slate-500 block">LOCATION AREA:</span>
              <strong className="text-slate-950">Copper A.C. (Marshall, MI)</strong>
            </div>
            <div>
              <span className="text-slate-500 block">TOTAL DEMERITS:</span>
              <strong className="text-red-700 text-sm">3 POINTS</strong>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="font-bold uppercase text-slate-700">Itemized Infractions Cited:</div>
            <ul className="space-y-1.5 list-disc pl-5 text-slate-900 font-semibold">
              <li>
                &ldquo;Too many seat moves&rdquo;{' '}
                <span className="text-slate-500 font-normal">(Bar Etiquette / Seating — 1 pt)</span>
              </li>
              <li>
                &ldquo;Try to order Gin &amp; Diet Coke&rdquo;{' '}
                <span className="text-slate-500 font-normal">(Drink Crime / Order Foul — 1 pt)</span>
              </li>
              <li>
                &ldquo;The headband :) &lt;3&rdquo;{' '}
                <span className="text-slate-500 font-normal">(Attire / Headgear Foul — 1 pt)</span>
              </li>
            </ul>
          </div>

          <div className="text-xs border-t border-amber-300 pt-3 flex items-center justify-between">
            <span>
              SIGNED BY ENFORCER: <strong className="underline">The Boss - AKA Sarah</strong>
            </span>
            <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold text-[10px]">
              PARDON PENDING
            </span>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => slipDialogRef.current?.close()}
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 font-sans font-bold text-xs cursor-pointer"
            >
              Close Docket Exhibit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  )
}
