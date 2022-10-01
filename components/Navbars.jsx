import Image from "next/image";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { TbSoccerField, TbHome } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
// Import Components
import styles from "../styles/Navbars.module.css";
import { useGlobalContext } from "../context/contextGlobal";

export const Navbars = () => {
    const router = useRouter();
    const { isLogin } = useGlobalContext();
    const [hover, setHover] = useState("");

    const handleHover = (title) => {
        switch (title) {
            case "home":
                setHover("home");
                break;
            case "venue":
                setHover("venue");
                break;
            case "profile":
                setHover("profile");
                break;
            case "kosong":
                setHover("kosong");
                break;
        }
    };

    const handleClick = (title) => {
        switch (title) {
            case "home":
                setHover("home");
                router.push("/");
                break;
            case "venue":
                setHover("venue");
                router.push("/venue");
                break;
            case "profile":
                setHover("profile");
                router.push("/profile");
                break;
        }
    };

    return (
        <>
            {isLogin ? <Row className={`${styles.container}`}>
                <Col md={2} className="d-none d-md-flex">
                    <a className="navbar-brand">
                        <Image
                            src="/segoroSM.png"
                            width={185}
                            height={60}
                        />
                    </a>
                </Col>
                <Col md={9} lg={7} className={styles.nav}>
                    {/* Top Navbar */}
                    <Col md={4} className={`${styles.navBox} d-none d-md-flex`}>
                        <a onClick={() => handleClick("home")}
                            className={hover === "home" ? styles.linkActive : styles.link}
                        >Home</a>
                        <a onClick={() => handleClick("venue")}
                            className={hover === "venue" ? styles.linkActive : styles.link}
                        >Venue</a>
                    </Col>
                    <Col md={5} className={`${styles.profileBox} d-none d-md-flex`}>
                        <Image
                            className={styles.profileImage}
                            src="/profile.jpg"
                            width={50}
                            height={50}
                        />
                        <a onClick={() => handleClick("profile")}
                            className={hover === "profile" ? styles.linkActive : styles.link}
                            style={{ marginLeft: "1rem" }}>John Doe</a>
                    </Col>
                </Col>

                {/* Bottom Navbar */}
                <Col className={`d-flex d-md-none text-center `}>
                    <Row className={styles.container}>
                        <Col onMouseLeave={() => handleHover("kosong")} onMouseEnter={() => handleHover("home")} onClick={() => handleClick("home")}>
                            <TbHome
                                color={hover === "home" ? "#ECF7F6" : "#202B2A"}
                                className={`${styles.icon} my-2`}
                                size={20} />
                            {hover === "home" ? <p className={styles.titleIcon}>Home</p> : ""}
                        </Col>
                        <Col onMouseLeave={() => handleHover("kosong")} onMouseEnter={() => handleHover("venue")} onClick={() => handleClick("venue")}>
                            <TbSoccerField
                                color={hover === "venue" ? "#ECF7F6" : "#202B2A"}
                                className={`${styles.icon} my-2 `}
                                size={20} />
                            {hover === "venue" ? <p className={styles.titleIcon}>Venue</p> : ""}
                        </Col>
                        <Col onMouseLeave={() => handleHover("kosong")} onMouseEnter={() => handleHover("profile")} onClick={() => handleClick("profile")}>
                            <CgProfile
                                color={hover === "profile" ? "#ECF7F6" : "#202B2A"}
                                className={`${styles.icon} my-2`}
                                size={20} />
                            {hover === "profile" ? <p className={styles.titleIcon}>Profile</p> : ""}
                        </Col>
                    </Row>
                </Col>
            </Row> : ""}
        </>
    )
}