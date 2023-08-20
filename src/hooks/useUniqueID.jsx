import { useState } from "react"

export const useUniqueID = () => {
  const [ID, setID] = useState(0)

  return () => {
    const currentID = ID
    setID((prevID) => prevID + 1)
    return currentID
  }
}
