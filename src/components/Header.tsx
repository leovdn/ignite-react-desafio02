import Skeleton from "react-loading-skeleton"
import { useGenre } from "../hooks/useGenre"
import "../styles/content.scss"

interface HeaderProps {
  selectedGenreId: number
}

export function Header({ selectedGenreId }: HeaderProps) {
  const { data, isLoading } = useGenre(selectedGenreId)

  return (
    <header>
      <span className="category">
        Categoria:{" "}
        <span>{isLoading ? <Skeleton width={200} /> : data.title}</span>
      </span>
    </header>
  )
}
