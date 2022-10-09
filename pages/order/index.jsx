import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../../styles/BookingOwner.module.css";
import { getCookie } from "cookies-next";
import axios from "axios";

const Index = () => {
  const [userId, setUserId] = useState();
  const [allBooking, setAllBooking] = useState([]);

  useEffect(() => {
    setUserId(getCookie("user_id"));
  });

  // get all booking list
  const getBookingList = () => {
    axios
      .get(`https://grupproject.site/bookings?UserID=${userId}`)
      .then((res) => {
        setAllBooking(res.data.data);
      });
  };

  useEffect(() => {
    getBookingList();
  }, []);

  return (
    <Row className="mb-5">
      <Row className="ms-5 my-5">
        <h2>Pay Venue</h2>
      </Row>

      {allBooking?.map((obj, index) => {
        const { name_venue, name_user, category, total_price } = obj;
        return (
          <Row
            key={index}
            className="w-75 mx-auto d-flex border-bottom border-5 shadow-sm pb-4"
          >
            <Row className="ms-0 my-2 fs-4 fw-bold">{name_user}</Row>
            <Col lg={2} className="d-flex align-items-center">
              <Image src="/basket.jpg" width={300} height={240} />
            </Col>
            <Col lg={6} className="py-2">
              <p className="fs-5 fw-bold my-2 lh-sm">
                {name_venue} - {category}
              </p>
              <p>Jumat 10:00-12.00</p>
            </Col>
            <Col
              lg={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Button className={`${styles.button}`}>{total_price}</Button>
              <AiOutlineDelete
                className={`${styles.icon}`}
                color="#EE0000"
                size={30}
              />
            </Col>
          </Row>
        );
      })}
    </Row>
  );
};

export default Index;
