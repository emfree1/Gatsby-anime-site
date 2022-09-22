import * as React from "react"
import { useState } from "react"
import Header from "../components/header"

const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <Header setIsPopupOpen={setIsPopupOpen} />
    </>
  )
}

export default HomePage
