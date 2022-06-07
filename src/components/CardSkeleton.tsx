import Skeleton from "react-loading-skeleton"

interface CardSkeletonProps {
  cards: number
}

export const CardSkeleton = ({ cards }: CardSkeletonProps) => {
  const cardCount = Array(cards).fill(0)
  return (
    <>
      {cardCount.map((_, index) => (
        <div className="card-skeleton">
          <Skeleton height="21.25rem" />
        </div>
      ))}
    </>
  )
}
