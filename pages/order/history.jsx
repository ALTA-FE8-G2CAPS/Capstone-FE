import axios from "axios"
import { getCookie } from "cookies-next"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Badge, Col, Row } from "react-bootstrap"

const Index = () => {

    const [list, setList] = useState([])

    const getHistory = () => {
        axios.get(`https://grupproject.site/history/?user_id=${getCookie("user_id")}`)
            .then((res) => {
                setList(res.data.data)
            })
    }

    useEffect(() => {
        setTimeout(() => {
            getHistory()
        },3000)
    }, [])

    return (
        <Row className="mb-5">
            <Row className="ms-5 my-5"><h2>Booking History</h2></Row>
            <Row className="w-75 mx-auto d-flex border-bottom border-5 shadow-sm pb-4">
                {list?.length < 1 ? <p className="fs-5 text-center">Booking History is Empty</p> :
                    list?.map((item, index) => {
                        return (
                            <>
                                <Row key={index} className="ms-0 my-2 fs-4 fw-bold">Owner</Row>
                                <Col lg={2} className="d-flex align-items-center">
                                    <Image src="/futsal.jpg" width={300} height={240} />
                                </Col>
                                <Col lg={6} className="py-2">
                                    <p className="fs-5 fw-bold my-2 lh-sm">{item.name_venue} - {item.category} </p>
                                    <p>Jumat 10:00-12.00</p>
                                </Col>
                                <Col lg={4} className="d-flex justify-content-center align-items-center">
                                    <Badge bg="success">SUCCESS</Badge>
                                </Col>
                            </>
                        )
                    })
                }
            </Row>
            <Row className="w-75 mx-auto d-flex border-bottom border-5 shadow-sm pb-4">
                <Row className="ms-0 my-2 fs-4 fw-bold">Owner</Row>
                <Col lg={2} className="d-flex align-items-center">
                    <Image src="/tennis.jpg" width={300} height={240} />
                </Col>
                <Col lg={6} className="py-2">
                    <p className="fs-5 fw-bold my-2 lh-sm">Nama Gornya - Lorem ipsum dolor sit amet consectetur </p>
                    <p>Jumat 10:00-12.00</p>
                </Col>
                <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <Badge bg="danger">FAILED</Badge>
                </Col>
            </Row>
        </Row>
    )
}

export default Index