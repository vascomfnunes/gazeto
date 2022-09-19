import { toast } from 'node_modules/react-toastify/dist/react-toastify'

export const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    toast.error('Error fetching data. Wrong API key?')
    return
  }

  return res.json()
}
