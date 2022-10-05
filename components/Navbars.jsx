import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { TbSoccerField, TbHome } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { getCookie, hasCookie } from "cookies-next"
// Import Components
import styles from "../styles/Navbars.module.css";
import { useNavbarContext } from "../context/contextNavbar";

export const Navbars = () => {
    const router = useRouter()
    const { statusNav, handleHover, handleClick } = useNavbarContext();
    const [username, setUsername] = useState("")
    const [foto, setFoto] = useState("")

    useEffect(() => {
        setUsername(getCookie("user"))
        setFoto(getCookie("foto_user"))
    },[])
    // const [profile, setProfile] = useState({
    //     user: "",
    //     foto_user: ""
    // })
    // useEffect(() => {
    //     setProfile({ ...profile, user: getCookie("user"), foto_user: getCookie("foto_user") })
    // }, [getCookie("foto_user"), getCookie("user")])

    return (
        console.log(foto),
        <>
            {statusNav ? <Row className={`${styles.container}`}>
                <Col md={2} className="d-none d-md-flex">
                    <a className="navbar-brand">
                        <Image
                            src="/segoroSM.png"
                            width={195}
                            height={60}
                        />
                    </a>
                </Col>
                <Col md={9} lg={7} className={styles.nav}>
                    {/* Top Navbar */}
                    <Col md={4} className={`${styles.navBox} d-none d-md-flex`}>
                        <a onClick={() => handleClick("home")}
                            className={statusNav === "home" ? styles.linkActive : styles.link}
                        >Home</a>
                        <a onClick={() => handleClick("venue")}
                            className={statusNav === "venue" ? styles.linkActive : styles.link}
                        >Venue</a>
                    </Col>
                    <Col md={5} className={`${styles.profileBox} d-none d-md-flex`}>
                        <Image
                            className={styles.profileImage}
                            src={(foto && foto) || "/profile.jpg"}
                            width={50}
                            height={50}
                        />
                        <a onClick={() => handleClick("profile")}
                            className={statusNav === "profile" ? styles.linkActive : styles.link}
                            style={{ marginLeft: "1rem" }}>
                            {(username && username) || "Login"}
                        </a>
                    </Col>
                </Col>

                {/* Bottom Navbar */}
                <Col className={`d-flex d-md-none text-center `}>
                    <Row className={styles.container}>
                        <Col onMouseLeave={() => handleHover("kosong")} onMouseEnter={() => handleHover("home")} onClick={() => handleClick("home")}>
                            <TbHome
                                color={(statusNav === "home") && "#ECF7F6" || "#202B2A"}
                                className={`${styles.icon} my-2`}
                                size={20} />
                            {statusNav === "home" ? <p className={styles.titleIcon}>Home</p> : ""}
                        </Col>
                        <Col onMouseLeave={() => handleHover("kosong")} onMouseEnter={() => handleHover("venue")} onClick={() => handleClick("venue")}>
                            <TbSoccerField
                                color={(statusNav === "venue") && "#ECF7F6" || "#202B2A"}
                                className={`${styles.icon} my-2 `}
                                size={20} />
                            {statusNav === "venue" ? <p className={styles.titleIcon}>Venue</p> : ""}
                        </Col>
                        <Col onMouseLeave={() => handleHover("kosong")} onMouseEnter={() => handleHover("profile")} onClick={() => handleClick("profile")}>
                            <CgProfile
                                color={(statusNav === "profile") && "#ECF7F6" || "#202B2A"}
                                className={`${styles.icon} my-2`}
                                size={20} />
                            {statusNav === "profile" ? <p className={styles.titleIcon}>Profile</p> : ""}
                        </Col>
                    </Row>
                </Col>
            </Row> : ""}
        </>
    )
}