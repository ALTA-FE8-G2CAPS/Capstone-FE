import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../styles/Detail.module.css";

const ListCard = ({ onClick }) => {
  return (
    <Row className={`${styles.listContainer}`} onClick={onClick}>
      <Col sm={6} md={4} lg={3} className="mt-5 d-flex justify-content-center">
        <Card
          style={{ width: "18rem" }}
          className={`${styles.cardItem} shadow`}
        >
          <Card.Img variant="top" src="/basket.jpg" />
          <Card.Body>
            <Card.Title className={`${styles.fontOpen}`}>
              Ini Lapangan
            </Card.Title>
            <Card.Text className={`${styles.fontLato} fs-5 fw-bold`}>
              Rp 150.000
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={4} lg={3} className="mt-5 d-flex justify-content-center">
        <Card
          style={{ width: "18rem" }}
          className={`${styles.cardItem} shadow`}
        >
          <Card.Img variant="top" src="/basket.jpg" />
          <Card.Body>
            <Card.Title className={`${styles.fontOpen}`}>
              Ini Lapangan
            </Card.Title>
            <Card.Text className={`${styles.fontLato} fs-5 fw-bold`}>
              Rp 150.000
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={4} lg={3} className="mt-5 d-flex justify-content-center">
        <Card
          style={{ width: "18rem" }}
          className={`${styles.cardItem} shadow`}
        >
          <Card.Img variant="top" src="/basket.jpg" />
          <Card.Body>
            <Card.Title className={`${styles.fontOpen}`}>
              Ini Lapangan
            </Card.Title>
            <Card.Text className={`${styles.fontLato} fs-5 fw-bold`}>
              Rp 150.000
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={4} lg={3} className="mt-5 d-flex justify-content-center">
        <Card
          style={{ width: "18rem" }}
          className={`${styles.cardItem} shadow`}
        >
          <Card.Img variant="top" src="/basket.jpg" />
          <Card.Body>
            <Card.Title className={`${styles.fontOpen}`}>
              Ini Lapangan
            </Card.Title>
            <Card.Text className={`${styles.fontLato} fs-5 fw-bold`}>
              Rp 150.000
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={4} lg={3} className="mt-5 d-flex justify-content-center">
        <Card
          style={{ width: "18rem" }}
          className={`${styles.cardItem} shadow`}
        >
          <Card.Img variant="top" src="/basket.jpg" />
          <Card.Body>
            <Card.Title className={`${styles.fontOpen}`}>
              Ini Lapangan
            </Card.Title>
            <Card.Text className={`${styles.fontLato} fs-5 fw-bold`}>
              Rp 150.000
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ListCard;
