import { useRouter } from "next/router";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../styles/Detail.module.css";

const ListCard = ({ item }) => {
  const router = useRouter();

  return (
    <Row className={`${styles.listContainer}`}>
      {item?.map((item, index) => {
        return (
          <Col
            sm={6}
            md={4}
            lg={3}
            className="mt-5 d-flex justify-content-center"
            key={index}
          >
            <Card
              style={{ width: "18rem" }}
              className={`${styles.cardItem} shadow`}
              onClick={() =>
                router.push({
                  pathname: "/venue/detail",
                  query: { id: item.id },
                })
              }
            >
              <Card.Img variant="top" src="/basket.jpg" />
              <Card.Body>
                <Card.Title className={`${styles.fontOpen}`}>
                  {item.name_venue}
                </Card.Title>
                <Card.Text className={`${styles.fontLato} fs-5 fw-bold`}>
                  Rp 150.000
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ListCard;
