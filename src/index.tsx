import { render } from "react-dom"
import { SkeletonTheme } from "react-loading-skeleton"
import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import { App } from "./App"
import { queryClient } from "./services/queryClient"

render(
  <QueryClientProvider client={queryClient}>
    <SkeletonTheme baseColor="#373945" highlightColor="#4B4D59">
      <App />
    </SkeletonTheme>
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById("root")
)
