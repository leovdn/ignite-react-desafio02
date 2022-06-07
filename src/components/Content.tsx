import { memo, useState } from "react"
import useMovies from "../hooks/useMovies"
import { Header } from "./Header"
import { MovieCard } from "./MovieCard"
import "react-loading-skeleton/dist/skeleton.css"
import { CardSkeleton } from "./CardSkeleton"

export interface MovieProps {
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
  const { status, data, error, isLoading } = useMovies(selectedGenreId)

  // if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error.message

  return (
    <div className="container">
      <Header selectedGenreId={selectedGenreId} />

      <main>
        <div className="movies-list">
          {isLoading ? (
            <CardSkeleton cards={6} />
          ) : (
            data?.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.selectedGenreId, nextProps.selectedGenreId)
})
