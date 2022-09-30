import Image from "next/image"
import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { TbSoccerField, TbHome } from "react-icons/tb"
import { CgProfile } from "react-icons/cg"
import { useRouter } from "next/router"
// Import Components
import styles from "../styles/Navbars.module.css"
import { useGlobalContext } from "../context/contextGlobal"

export const Navbars = () => {

    const router = useRouter()
    const { isLogin } = useGlobalContext()
    const [hover, setHover] = useState("")

    const handleHover = (title) => {
        switch (title) {
            case "home":
                setHover("home");
                router.push("/")
                break;
            case "venue":
                setHover("venue");
                router.push("/venue")
                break;
            case "profile":
                setHover("profile")
                router.push("/profile")
                break;
        }
    }

    return (
        <>
            {isLogin ? <Row className={`${styles.container}`}>
                <Col md={2} className="d-none d-md-flex">
                    <Image
                        src="/segoro.png"
                        width={170}
                        height={75}
                    />
                </Col>
                <Col md={9} lg={7} className={styles.nav}>
                    {/* Top Navbar */}
                    <Col md={4} className={`${styles.navBox} d-none d-md-flex`}>
                        <a onClick={() => handleHover("home")}
                            className={hover === "home" ? styles.linkActive : styles.link}
                        >Home</a>
                        <a onClick={() => handleHover("venue")}
                            className={hover === "venue" ? styles.linkActive : styles.link}
                        >Venue</a>
                    </Col>
                    <Col md={5} className={`${styles.profileBox} d-none d-md-flex`}>
                        <Image
                            className={styles.profileImage}
                            src="/profile.jpg"
                            width={60}
                            height={60}
                        />
                        <a onClick={() => handleHover("profile")}
                            className={hover === "profile" ? styles.linkActive : styles.link}
                            style={{ marginLeft: "1rem" }}>John Doe</a>
                    </Col>
                </Col>

                {/* Bottom Navbar */}
                <Col className={`d-flex d-md-none text-center `}>
                    <Row className={styles.container}>
                        <Col onClick={() => handleHover("home")}>
                            <TbHome
                                color={hover === "home" ? "#ECF7F6" : "#202B2A"}
                                className={`${styles.icon} my-3`}
                                size={40} />
                            {hover === "home" ? <p className={styles.titleIcon}>Home</p> : ""}
                        </Col>
                        <Col onClick={() => handleHover("venue")}>
                            <TbSoccerField
                                color={hover === "venue" ? "#ECF7F6" : "#202B2A"}
                                className={`${styles.icon} my-3`}
                                size={40} />
                            {hover === "venue" ? <p className={styles.titleIcon}>Venue</p> : ""}
                        </Col>
                        <Col onClick={() => handleHover("profile")}>
                            <CgProfile
                                color={hover === "profile" ? "#ECF7F6" : "#202B2A"}
                                className={`${styles.icon} my-3`}
                                size={40} />
                            {hover === "profile" ? <p className={styles.titleIcon}>Profile</p> : ""}
                        </Col>
                    </Row>
                </Col>
            </Row> : ""}
        </>
    )
}