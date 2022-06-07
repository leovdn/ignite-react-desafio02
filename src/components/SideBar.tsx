import { useGenres } from "../hooks/useGenres"
import { Button } from "./Button"

interface GenreProps {
  id: number
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family"
  title: string
}
interface SidebarProps {
  handleClickButton(id: number): any
  selectedGenreId: number
}

export function SideBar({ handleClickButton, selectedGenreId }: SidebarProps) {
  const { data, isLoading, isError } = useGenres()

  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {data.map((genre: GenreProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
