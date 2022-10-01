import React, { useEffect } from 'react'
import { useNavbarContext } from "../../context/contextNavbar"

const Index = () => {
    const { setStatusNav } = useNavbarContext()
    useEffect(() => {
        setStatusNav("venue")
    }, [])

    return (
        <div>Index</div>
    )
}

export default Index