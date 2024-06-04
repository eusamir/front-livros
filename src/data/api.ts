export function api(path: string, init?: RequestInit) {
  const baseUrl = "http://localhost:3000"
  const apiPrefix = '/api'

  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, init)
}
