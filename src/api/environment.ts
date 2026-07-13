type Env = {
  VITE_API_URL: string,
  VITE_MAPS_KEY: string,
  VITE_MP_PUBLIC_KEY: string,
}

export const ENV: Env = {
  VITE_API_URL: import.meta.env.VITE_API_URL ?? "http://localhost:8080",
  VITE_MAPS_KEY: import.meta.env.VITE_MAPS_KEY ?? "lol",
  VITE_MP_PUBLIC_KEY: import.meta.env.VITE_MP_PUBLIC_KEY ?? "lol"
}