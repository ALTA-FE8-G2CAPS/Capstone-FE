import React, { useState } from "react";
import Image from "next/image";
import { Col, OverlayTrigger, Row, Tooltip, Button } from "react-bootstrap";
import { DetailHeading, DetailLayout } from "../../components/DetailLayout";
import { AiFillStar } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import styles from "../../styles/Review.module.css";
import AddModal from "../../components/AddModal";

const Review = () => {
  const [show, setShow] = useState(false);

  return (
    <Row className={styles.container}>
      <DetailLayout />
      <Col md="12" lg="8">
        <div className={styles.containerRight}>
          <DetailHeading page="review" />
          <div className={styles.reviewBody}>
            <div className={styles.titleBody}>
              <h5>Review :</h5>
            </div>
            <div>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id={`tooltip-top`}>Add review ?</Tooltip>}
              >
                <Button
                  variant="success"
                  className={styles.buttonAdd}
                  onClick={() => setShow(true)}
                >
                  <IoAddOutline size={35} />
                </Button>
              </OverlayTrigger>
            </div>
            <div className={styles.reviewBox}>
              <Row className={styles.reviewItem}>
                <div>
                  <AiFillStar size={30} className={styles.star} />
                  <AiFillStar size={30} className={styles.star} />
                  <AiFillStar size={30} className={styles.star} />
                  <AiFillStar size={30} className={styles.star} />
                  <AiFillStar size={30} className={styles.star} />
                </div>
                <div className={styles.reviewProfile}>
                  <div>
                    <Image
                      className={styles.imageProfile}
                      src="/profile.jpg"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.nameProfile}>
                    <h6>Customer A</h6>
                  </div>
                </div>
                <div>
                  <p>Lapangannya nyaman kaya mantan</p>
                </div>
                <div className={styles.imageBox}>
                  <Image
                    className={styles.imageReview}
                    src="/futsal.jpg"
                    width={80}
                    height={50}
                  />
                </div>
              </Row>
              <Row className={styles.reviewItem}>
                <div>
                  <AiFillStar size={30} className={styles.star} />
                  <AiFillStar size={30} className={styles.star} />
                  <AiFillStar size={30} className={styles.star} />
                  <AiFillStar size={30} className={styles.star} />
                  <AiFillStar size={30} className={styles.star} />
                </div>
                <div className={styles.reviewProfile}>
                  <div>
                    <Image
                      className={styles.imageProfile}
                      src="/profile.jpg"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.nameProfile}>
                    <h6>Customer A</h6>
                  </div>
                </div>
                <div>
                  <p>Lapangannya nyaman kaya mantan</p>
                </div>
                <div className={styles.imageBox}>
                  <Image
                    className={styles.imageReview}
                    src="/futsal.jpg"
                    width={80}
                    height={50}
                  />
                </div>
              </Row>
            </div>
          </div>
        </div>
      </Col>

      {/* Modal */}
      <AddModal add="review" show={show} handleClose={() => setShow(false)} />
    </Row>
  );
};

export default Review;
