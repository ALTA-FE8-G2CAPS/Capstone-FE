import Image from "next/image"
import React from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { Button, Col, Row } from "react-bootstrap"
import styles from "../../styles/BookingOwner.module.css"

const Index = () => {
    return (
        <Row className="mb-5">
            <Row className="ms-5 my-5"><h2>Booking List</h2></Row>
            <Row className="w-75 mx-auto d-flex border-bottom border-5 shadow-sm pb-4">
                <Row className="ms-0 my-2 fs-4 fw-bold">Owner</Row>
                <Col lg={2} className="d-flex align-items-center">
                    <Image src="/basket.jpg" width={300} height={240} />
                </Col>
                <Col lg={6} className="py-2">
                    <p className="fs-5 fw-bold my-2 lh-sm">Nama Gornya - Lorem ipsum dolor sit amet consectetur </p>
                    <p>26-09-2022 10:00-12.00</p>
                </Col>
                <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <Button className={`${styles.button}`}>Rp120.000</Button>
                    <AiOutlineDelete color="#EE0000" size={30}/>
                </Col>
            </Row>
            <Row className="w-75 mx-auto d-flex border-bottom border-5 shadow-sm pb-4">
                <Row className="ms-0 my-2 fs-4 fw-bold">Owner</Row>
                <Col lg={2} className="d-flex align-items-center">
                    <Image src="/basket.jpg" width={300} height={240} />
                </Col>
                <Col lg={6} className="py-2">
                    <p className="fs-5 fw-bold my-2 lh-sm">Nama Gornya - Lorem ipsum dolor sit amet consectetur </p>
                    <p>26-09-2022 10:00-12.00</p>
                </Col>
                <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <Button className={`${styles.button}`}>Rp120.000</Button>
                    <AiOutlineDelete color="#EE0000" size={30}/>
                </Col>
            </Row>
        </Row>
    )
}

export default Index