export type Code = string

export function generateEntityCode(prefix?: string): Code {
  const seed = Math.floor(Math.random() * 100000)
  return `${prefix ?? ''}${seed.toString().padStart(5, '0')}${Date.now().toString(36).toUpperCase()}`
}
