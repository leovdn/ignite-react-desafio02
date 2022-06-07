import { memo, useEffect, useMemo, useState } from "react"
import useMovies from "../hooks/useMovies"
import { api } from "../services/api"
import { Header } from "./Header"
import { MovieCard } from "./MovieCard"

interface MovieProps {
  imdbID: string
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Runtime: string
}
interface ContentProps {
  selectedGenreId: number
  selectedGenre: {
    title: string
  }
}

function ContentComponent({ selectedGenreId, selectedGenre }: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([])

  const { status, data, error, isLoading } = useMovies(selectedGenreId)

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error.message

  return (
    <div className="container">
      <Header selectedGenreId={selectedGenreId} />

      <main>
        <div className="movies-list">
          {data.map((movie: MovieProps) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.selectedGenreId, nextProps.selectedGenreId)
})
