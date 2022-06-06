import { useCallback, useEffect, useState } from "react"

import { Button } from "./components/Button"
import { MovieCard } from "./components/MovieCard"

import { api } from "./services/api"

import "./styles/global.scss"

import "./styles/sidebar.scss"
import "./styles/content.scss"
import { SideBar } from "./components/SideBar"
import { Content } from "./components/Content"

export interface GenreResponseProps {
  id: number
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family"
  title: string
}

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

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)

  const [genres, setGenres] = useState<GenreResponseProps[]>([])

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  )

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data)
    })
  }, [])

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id)
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
      />
      <Content
        selectedGenreId={selectedGenreId}
        selectedGenre={selectedGenre}
      ></Content>
    </div>
  )
}
