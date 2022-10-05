import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import styles from "../styles/Detail.module.css";

const ListCard = ({ item, handleDelete }) => {
  const router = useRouter();
  const handleDetail = (id) => {
    router.push("/venue/detail");
    setCookie("id", id);
  };

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
            >
              <Card.Img
                variant="top"
                src="/basket.jpg"
                onClick={() => handleDetail(item.id)}
              />
              <Card.Body>
                <Card.Title className={`${styles.fontOpen}`}>
                  {item.name_venue}
                </Card.Title>
                <Card.Text className={`${styles.fontLato} fs-5 fw-bold`}>
                  Rp 150.000
                </Card.Text>
                <button className={styles.delete} onClick={handleDelete}>
                  <MdDeleteOutline size={25} />
                </button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ListCard;
