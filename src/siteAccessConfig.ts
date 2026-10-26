/**
 * Site Access & Passcode Verification
 *
 * Security Standard:
 * Zero plaintext passwords are stored in this repository or client bundle.
 * Passwords are authenticated strictly against a one-way cryptographic SHA-256 digest.
 */

// Cryptographic SHA-256 digest of authorized access passcode
const AUTHORIZED_HASH = '5215ba28a5da6f3f28b7df0ae466d24facbe075aa6f681149791d22c44961b8b'

export async function computeSha256(text: string): Promise<string> {
  const enc = new TextEncoder().encode(text.trim())
  const buf = await crypto.subtle.digest('SHA-256', enc)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function isAuthorizedPasscode(input: string): Promise<boolean> {
  const trimmed = input.trim()
  if (!trimmed) return false

  const hash = await computeSha256(trimmed)

  // 1. Check against authorized cryptographic hash
  if (hash === AUTHORIZED_HASH) {
    return true
  }

  // 2. Optional build-time environment variable hash override
  const envHash = (import.meta.env.VITE_SITE_PASSWORD_HASH || '').trim()
  if (envHash && hash === envHash) {
    return true
  }

  return false
}
