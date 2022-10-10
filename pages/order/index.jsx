import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import styles from "../../styles/BookingOwner.module.css";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const Index = () => {
  const [userId, setUserId] = useState();
  const [allBooking, setAllBooking] = useState([]);
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setUserId(getCookie("user_id"));
  });

  const handleShow = () => {
    setShow(prev => !prev)
  }

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

  // Delete booking
  const deleteBooking = (id) => {
    var config = {
      method: "delete",
      url: `https://grupproject.site/bookings/${id}`,
    };
    const myPromise = axios(config).then(() => {
      getBookingList();
    });
    toast.promise(myPromise, {
      loading: "Saving...",
      success: "Delete Success!",
      error: "Delete Failed",
    });
  };

  const handleSubmit =() => {
    
  }

  return (
    <Row className="mb-5">
      <Row className="ms-5 my-5">
        <h2>Pay Venue</h2>
      </Row>

      {allBooking?.map((obj, index) => {
        const { name_venue, name_user, category, total_price, booking_id } =
          obj;
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
              <Button className={`${styles.button}`}>Rp {total_price}</Button>
              <AiOutlineDelete
                className={`${styles.icon}`}
                color="#EE0000"
                size={30}
                onClick={() => deleteBooking(booking_id)}
              />
            </Col>
          </Row>
        );
      })}

      <Modal show={show} onHide={handleShow}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleShow}>
              Close
            </Button>
            <Button type="submit" onSubmit={handleSubmit} variant="primary" onClick={handleShow}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

    </Row>
  );
};

export default Index;
