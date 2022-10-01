import React, { useEffect } from 'react'
import { useNavbarContext } from "../../context/contextNavbar"

const Index = () => {
  // active nav
  const { setStatusNav } = useNavbarContext()
  useEffect(() => {
    setStatusNav("profile")
  },[])

  return (
    <div>Index</div>
  )
}

export default Index