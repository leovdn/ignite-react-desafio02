import { useCallback, useEffect, useState } from "react"

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

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  )

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id)
  }, [])

  console.log(selectedGenre)
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
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
