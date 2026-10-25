export interface PlatformPillar {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  problem: string;
  surveyAssessment: string;
  recommendation: {
    good: string;
    better: string;
    best: string;
  };
  footnote: string;
}

export interface CandidateComparisonRow {
  metric: string;
  rick: string;
  scott: string;
  ryan: string;
}

export const TICKER_ITEMS: string[] = [
  "🦅 BREAKING: RICK ALBAUGH ENTERS MARSHALL MAYORAL RACE AGAINST RYAN WATSON",
  "🍺 EXECUTIVE ORDER #1: GIN & DIET COKE OFFICIALLY LEGALIZED AT COPPER ATHLETIC CLUB",
  "📡 LIVE FOUNTAIN CIRCLE PING TEST TO 8.8.8.8: 0.0% PACKET LOSS",
  "👔 SHIRTS OPTIONAL, MULTI-FACTOR AUTHENTICATION MANDATORY",
  "🚫 CORPORATE BUZZWORDS ('SYNERGY', 'DELVE', 'SEAMLESS PARADIGM') BANNED IN CITY HALL",
  "✅ SERIOUS REMINDER: ACTUALLY VOTE FOR MAYOR SCOTT WOLFERSBERGER ON NOVEMBER 3, 2026!",
];

export const PLATFORM_PILLARS: PlatformPillar[] = [
  {
    id: "copper-amnesty",
    badge: "EXECUTIVE ORDER #001 • BAR ETIQUETTE & CIVIL LIBERTIES",
    title: "Full Municipal Pardon for All Copper A.C. Demerit Slips",
    subtitle: "Ending the tyranny of 'The Boss - AKA Sarah' & legalizing Gin & Diet Coke citywide.",
    problem:
      "On October 17, 2026 at 9:09 PM at Copper Athletic Club ('A Sports Bar. Not A Gym.'), Rick Albaugh was unjustly issued 3 physical demerits on Slip #212309 for: (1) 'Too many seat moves', (2) 'Try to order Gin & Diet Coke', and (3) 'The headband :) <3'. That same evening, Burtis received 3 total demerits for a Red Wings no-call/no-show and 'NOT CARING ABOUT THE FIRST DEMERIT', while David Lee was cited for 'Back talk, insubordinate (1 - so far)'.",
    surveyAssessment:
      "I surveyed the bar seating topology and beverage hydration matrix. Moving seats optimizes peer collaboration across booths, Gin & Diet Coke is a zero-sugar botanical masterpiece, and a black feathered crow headband is objectively regal.",
    recommendation: {
      good: "Expunge Rick's 3 demerits from the Copper A.C. Ring of Honor Docket immediately.",
      better: "Grant blanket municipal clemency to Burtis and David Lee while declaring Gin & Diet Coke the Official Beverage of Marshall.",
      best: "Keep Rick in the feather headband at Copper A.C. and re-elect Mayor Scott Wolfersberger so an actual adult runs City Hall.",
    },
    footnote: "Verified against Docket Slip #Scan_20261017_212309.jpg • Signed by 'The Boss - AKA Sarah'",
  },
  {
    id: "ping-test-governance",
    badge: "INFRASTRUCTURE & DIAGNOSTICS • NO END-OF-LIFE POLITICIANS",
    title: "Ping-Testing Fountain Circle & Retiring End-of-Life Rhetoric",
    subtitle: "If it can't hold a site-to-site VPN between Battle Creek and Lake Odessa, it doesn't belong in City Hall.",
    problem:
      "Challenger Ryan Watson says his campaign is about 'grassroots connectivity' at Fountain Circle. But has Ryan ever run a continuous ping test across the network to 12.170.87.185 and Google DNS (8.8.8.8) to prove negligible packet loss before blaming the ISP?",
    surveyAssessment:
      "When hardware hits End-of-Life, it stops receiving maintenance releases. The same goes for vague campaign promises. Meanwhile, incumbent Mayor Scott Wolfersberger—a fellow IT professional who actually wears a shirt to work—has spent years upgrading Marshall's real infrastructure, water/sewer agreements, and Neighborhood Improvement Authorities (NIAs).",
    recommendation: {
      good: "Require every candidate speaking at Fountain Circle to pass a live 64-byte ICMP ping test with <1% packet loss.",
      better: "Enforce Multifactor Authentication (MFA) and BitDefender GravityZone on every podium microphone in City Hall.",
      best: "Vote for Scott Wolfersberger—the IT pro who already knows how Marshall's infrastructure works so Rick doesn't have to put on a shirt.",
    },
    footnote: "Ref: Standard Operating Procedure • Diagnostic Register #2-1",
  },
  {
    id: "desktop-pdf-reform",
    badge: "CYBERSECURITY & MUNICIPAL HYGIENE • SYSTEM TRAY CLARITY",
    title: "The 'Clean Up Your Desktop PDFs & Right-Click AmbirScan' Act",
    subtitle: "Zero shared passwords, encrypted emails, and no more 'complaining just to complain'.",
    problem:
      "Too many people look at municipal government and complain that 'nothing popped up on the screen' without ever right-clicking the AmbirScan icon next to the clock in the lower-right corner and clicking 'Show'. Plus, there are way too many unorganized PDFs sitting on public desktops.",
    surveyAssessment:
      "We've been keeping track for quite a while now of everything that goes in or out of municipal websites. Some citizen feedback is valid—and we should purge old 1998 meeting minutes once regulatory retention allows—but let's be honest with disarming candor: some of it is just complaining to complain.",
    recommendation: {
      good: "Ban storing 400 loose PDFs on computer desktops and prohibit password sharing on sticky notes.",
      better: "Ban corporate buzzwords ('synergy', 'seamless paradigm', 'delve', 'in today's fast-paced digital landscape') from all City Council minutes.",
      best: "Keep Mayor Scott Wolfersberger at the helm delivering practical, no-nonsense municipal results without the political theater.",
    },
    footnote: "Ref: Municipal Website & AmbirScan Front-Desk Protocol #2-2 / #3-1",
  },
  {
    id: "treasury-hodl-ag1",
    badge: "TREASURY, TRAVEL PACKS & TASTING ROOM BACKLINKS",
    title: "The 4-Year Macro Cycle Reserve & AG1 Travel-Pack Mandate",
    subtitle: "Playing the long game on municipal budgets, wine partner backlinks, and non-refrigerated greens.",
    problem:
      "When you order 30 AG1 travel packs on June 4th for a 2-week trip to England with Hannah on June 9th because you don't know if you'll have access to a fridge, getting shipped an extra pouch instead is a municipal-grade fulfillment crisis. Also, wineries that redesign their websites and accidentally drop their backlinks to Maria's Uncorked in Marshall must be held accountable.",
    surveyAssessment:
      "Historical macro research proves bull runs culminate every 4 years. You don't panic-sell your city's progress halfway through a cycle because a challenger wants to 'shake things up'. You play the long game, take care of family and neighbors at cost, and protect Marshall's local businesses.",
    recommendation: {
      good: "Establish a Strategic Municipal Reserve of individual AG1 Travel Packs (strictly no pouches requiring refrigeration).",
      better: "Mandate automatic SEO backlink protection for Maria's Uncorked and free antivirus for Hulkster and family friends.",
      best: "Play the long game for Marshall's housing and economic growth by re-electing Mayor Scott Wolfersberger on November 3.",
    },
    footnote: "endorsed by Hannah ('partner in wine'), Kenzie, & MSU Spartans ('GO GREEN!')",
  },
];

export const CANDIDATE_COMPARISON: CandidateComparisonRow[] = [
  {
    metric: "Current Attire Policy",
    rick: "Black Feathered Crow Crown, Open Blazer, Bare Chest, Leggings & Adidas",
    scott: "Professional Municipal & IT Attire (100% Shirt Compliance)",
    ryan: "Grassroots Casual at Fountain Circle",
  },
  {
    metric: "IT & Infrastructure Credentials",
    rick: "Co-founded DR. IT - The IT Ninjas (2013); diagnoses Lake Odessa VPN drops in 1 ping",
    scott: "Career IT Professional + Incumbent Mayor & Council Member since 2018",
    ryan: "Active in public comment microphones",
  },
  {
    metric: "Housing & Neighborhood Plan",
    rick: "Will trade half of a car, a homecoming dress, and dance shoes to settle zoning disputes",
    scott: "Proven Neighborhood Improvement Authorities (NIAs) building real housing in NE & South Marshall",
    ryan: "Promises to 'listen and engage in dialogue'",
  },
  {
    metric: "Copper Athletic Club Demerit Record",
    rick: "3 Verified Demerits in 1 Night (Seat Moves, Gin & Diet Coke, The Headband)",
    scott: "0 Known Demerits (Respects Bar Seating & Drink Laws)",
    ryan: "Unranked on the Ring of Honor Leaderboard",
  },
  {
    metric: "Stance on Corporate Buzzwords",
    rick: "Immediate felony to say 'synergy', 'delve', or 'seamless paradigm'",
    scott: "Pragmatic, plain-spoken municipal governance",
    ryan: "'People-first grassroots connectivity framework'",
  },
  {
    metric: "Who Rick Albaugh Is Actually Voting For",
    rick: "SCOTT WOLFERSBERGER (Hannah vetoed my feather-crown inauguration)",
    scott: "SCOTT WOLFERSBERGER (On the ballot Nov 3!)",
    ryan: "Not even Rick's crow court is voting here",
  },
];

export const ENDORSEMENT_QUOTES = [
  {
    quote:
      "Rick, I love you, I'm your partner in wine, and Keegan got ordained to marry us—but you are NOT wearing that feather crown and no shirt to a Marshall City Council meeting. Tell everyone to vote for Scott Wolfersberger.",
    author: "Hannah Albaugh",
    role: "First Lady Refusal Committee & Partner in Wine",
  },
  {
    quote:
      "Citation #212309 stands: 1 point for too many seat moves, 1 point for trying to order a Gin & Diet Coke, and 1 point for the headband :) <3. He is barred from pardoning himself. Re-elect Mayor Wolfersberger.",
    author: "The Boss - AKA Sarah",
    role: "Chief Enforcer, Copper Athletic Club ('A Sports Bar. Not A Gym.')",
  },
  {
    quote:
      "Wait—if Rick becomes Mayor, who is going to drive from the Grand Rapids dance competition to Detroit in time for the 7:30 PM Billie Eilish concert?! Vote for Scott Wolfersberger immediately!",
    author: "Kenzie",
    role: "Cheer & Dance Scheduling Director",
  },
];
