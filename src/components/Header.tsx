import { useEffect, useState } from "react"
import { GenreResponseProps } from "../App"
import { api } from "../services/api"

interface HeaderProps {
  selectedGenreId: number
}

export function Header({ selectedGenreId }: HeaderProps) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  )

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data)
      })
  }, [selectedGenreId])

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  )
}
