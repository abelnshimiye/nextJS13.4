"use client"

import { Button } from "react-bootstrap"

interface ErrorPageProps {
    error: Error,
    reset: () => void,
}

function Error({error, reset} : ErrorPageProps) {
  return (
    <div>
        <h5>Error </h5>
        <p>Something went wrong here</p>

        <Button onClick={reset}>Try again</Button>

    </div>
  )
}

export default Error