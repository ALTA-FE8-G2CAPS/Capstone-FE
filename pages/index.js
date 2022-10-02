import Image from "next/image"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { HiOutlineClipboardList } from "react-icons/hi"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { AiOutlineSchedule } from "react-icons/ai"
import styles from "../styles/Home.module.css"
import ListCard from "../components/ListCard"
import { useNavbarContext } from "../context/contextNavbar"
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()
  // active Nav
  const { setStatusNav } = useNavbarContext()
  useEffect(() => {
    setStatusNav("home")
  }, [])

  return (
    <div className="mb-5">
      <Row className={styles.jumbotron}>
        <Col>
          <p className={`fs-1 fw-bold ${styles.title}`}>SEGORO</p>
          <p className={`fs-2 fw-lighter ${styles.title}`}>Searching, booking, and playing</p>
          <p className={`fs-6 fw-normal ${styles.title}`}>enjoy your playing with comfortable venue</p>
        </Col>

        <Row className={`${styles.flyingBox} d-none d-md-block`}>
          <Row className="w-75 mx-auto">
            <Col className={`${styles.contentBox}`} >
              <HiOutlineClipboardList size={28} className="mb-1 me-2" /> List Booking
            </Col>
            <Col className={`${styles.contentBox}`} onClick={() => router.push("/order")}>
              <RiMoneyDollarCircleLine size={28} className="mb-1 me-2" /> Pay Venue
            </Col>
            <Col className={`${styles.contentBox}`} onClick={() => router.push("/schedule")}>
              <AiOutlineSchedule size={28} className="mb-1 me-2" /> Don't Forgot
            </Col>
          </Row>
          <Row className={`${styles.wave}`}>
            <Image
              style={{ borderRadius: "0px 0px 10px 10px" }}
              src="/wave.png"
              layout="fill"
            />
          </Row>
        </Row>
      </Row>
      <Row className={`${styles.popBox} text-center`}>
        <p className="fs-2 fw-bold" style={{ color: "#202B2A" }}>Popular Venue</p>
      </Row>
      <ListCard />
    </div>
  )
}

export default Home