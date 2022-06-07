import { useQuery } from "react-query"
import { api } from "../services/api"

export async function getGenres() {
  const { data } = await api.get("genres")

  return data
}

export function useGenres() {
  return useQuery("genres", () => getGenres())
}
