import { useQuery } from "react-query"
import { api } from "../services/api"

export async function getGenreTitle(genreId) {
  const { data } = await api.get(`genres/${genreId}`)

  return data
}

export function useGenre(genreId) {
  return useQuery(["genres", genreId], () => getGenreTitle(genreId))
}
