import { Button } from "./Button";

interface GenreItemProps {
  genre: {
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  };
  handleClickButton(id: number): any;
  selectedGenreId: number;
}

export function SideBar(props: GenreItemProps) {
  // Complete aqui
  return (
    <Button
      key={String(props.genre.id)}
      title={props.genre.title}
      iconName={props.genre.name}
      onClick={() => props.handleClickButton(props.genre.id)}
      selected={props.selectedGenreId === props.genre.id}
    />
  );
}
