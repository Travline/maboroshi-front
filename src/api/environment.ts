type Env = {
  VITE_API_URL: string
}

export const ENV: Env = {
  VITE_API_URL: import.meta.env.VITE_API_URL ?? "http://localhost:8080"
}