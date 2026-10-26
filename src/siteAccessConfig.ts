/**
 * Site Access & Passcode Configuration
 *
 * HOW TO CHANGE THE PASSWORD:
 *
 * Option 1 (In Code):
 *   Simply edit or add your password to the `ACCEPTED_PASSWORDS` array below.
 *   Example: ACCEPTED_PASSWORDS = ['myNewSecretPassword2026']
 *
 * Option 2 (Via Environment Variable without touching code):
 *   Create or update a `.env` file in the project root:
 *   VITE_SITE_PASSWORD=yourNewSecretPassword
 *   Then re-run `npm run build` and `npx wrangler deploy`.
 *
 * Note: Comparison is case-insensitive and ignores accidental leading/trailing spaces.
 */

export const ACCEPTED_PASSWORDS: string[] = [
  'crowking2026',
  'marshall2026',
]

// Optional pre-computed SHA-256 hashes for additional authorization matching
export const ACCEPTED_HASHES: string[] = [
  '4db24f040f42b4d246deb4393f0df2e288d28c8be141842e4c392f5dd82f5e84', // crowking2026
  'ccf2b2b55de35831e9364719d1596808c05c175e99136cd6c7337b93c4293197', // marshall2026
]

export async function computeSha256(text: string): Promise<string> {
  const enc = new TextEncoder().encode(text.trim().toLowerCase())
  const buf = await crypto.subtle.digest('SHA-256', enc)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function isAuthorizedPasscode(input: string): Promise<boolean> {
  const normalized = input.trim().toLowerCase()
  if (!normalized) return false

  // 1. Check environment variable override
  const envPass = (
    import.meta.env.VITE_SITE_PASSWORD ||
    import.meta.env.VITE_CAMPAIGN_ACCESS_CODE ||
    ''
  ).trim().toLowerCase()
  if (envPass && normalized === envPass) {
    return true
  }

  // 2. Check accepted plaintext passwords list
  const matchesPlaintext = ACCEPTED_PASSWORDS.some(
    (p) => p.trim().toLowerCase() === normalized
  )
  if (matchesPlaintext) {
    return true
  }

  // 3. Check SHA-256 hashes
  const hash = await computeSha256(normalized)
  return ACCEPTED_HASHES.includes(hash)
}
