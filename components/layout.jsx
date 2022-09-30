import {Navbars} from "../components/Navbars"

export const Layout = ({ children }) => {
    return (
        <>
            <Navbars />
            {children}
        </>
    )
}