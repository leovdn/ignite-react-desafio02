import axios from "axios"
import { useQuery } from "react-query"
import { api } from "../services/api"

const getMovies = async (genreId) => {
  const { data } = await api.get(`movies`, {
    params: {
      Genre_id: genreId,
    },
  })
  return data
}

export default function useMovies(genreId) {
  return useQuery(["movies", genreId], () => getMovies(genreId))
}
