import React from "react";
import ListCard from "../../components/ListCard";
import { Button, Col, Row } from "react-bootstrap";
import { IoAddOutline } from "react-icons/io5";
import styles from "../../styles/MyVenue.module.css";
import { useRouter } from "next/router";

const Myvenue = () => {
  const router = useRouter();

  return (
    <div>
      <div className={`${styles.container} container`}>
        <h2 className={styles.title}>My Venue</h2>
        <Row className={styles.boxBody}>
          <Col className={styles.boxAmount}>
            <span className={styles.amount}>8</span>
            <span> Venues</span>
          </Col>
          <Col className={styles.rightCol}>
            <div>
              <button sm className={styles.addButton}>
                <IoAddOutline size={20} />
                <div>Add New Venue</div>
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <ListCard onClick={() => router.push("/venue/detail")} />
        </Row>
      </div>
    </div>
  );
};

export default Myvenue;
