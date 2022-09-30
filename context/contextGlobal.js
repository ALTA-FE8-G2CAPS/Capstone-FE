import React, { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    const [isLogin, setIsLogin] = context.isLogin

    return { isLogin, setIsLogin }
}

export const GlobalProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <GlobalContext.Provider
            value={{ isLogin: [isLogin, setIsLogin] }}
        >
            {children}
        </GlobalContext.Provider>
    )
}