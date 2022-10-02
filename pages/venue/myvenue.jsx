import React, { useState } from "react";
import ListCard from "../../components/ListCard";
import { Button, Col, Row } from "react-bootstrap";
import { IoAddOutline } from "react-icons/io5";
import styles from "../../styles/MyVenue.module.css";
import { useRouter } from "next/router";
import AddModal from "../../components/AddModal";

const Myvenue = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

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
              <button
                sm
                className={styles.addButton}
                onClick={() => setShow(true)}
              >
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

      {/* Modal */}
      <AddModal add="venue" show={show} handleClose={() => setShow(false)} />
    </div>
  );
};

export default Myvenue;
