export function api(path: string, init?: RequestInit) {
  const baseUrl = "https://crud-livros.onrender.com"
  const apiPrefix = '/livro'

  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, init)
}
