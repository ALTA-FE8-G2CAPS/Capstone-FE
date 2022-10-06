import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../styles/Detail.module.css";
import { AddFotoVenue } from "./AddModal";

export const DetailLayout = ({
  fotoVenue,
  handleShow,
  showAddFoto,
  handleClose,
  handleForm,
  handleFoto,
}) => {
  const [image, setImage] = useState("/add.png");

  return (
    <Col md={12} lg={4}>
      {fotoVenue ? (
        <div>
          <Row className={styles.leftCol}>
            <div>
              <Image
                src={image}
                width={500}
                height={500}
                className={styles.imageBox}
                onClick={handleShow}
              />
            </div>
          </Row>
          <Row>
            <div className={styles.scrollImage}>
              <div className={styles.imageItem}>
                <Image
                  onClick={() => setImage("/add.png")}
                  src="/add.png"
                  width={165}
                  height={110}
                  className="rounded"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles.imageItem}>
                <Image
                  onClick={() => setImage("/add.png")}
                  src="/add.png"
                  width={165}
                  height={110}
                  className="rounded"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles.imageItem}>
                <Image
                  onClick={() => setImage("/add.png")}
                  src="/add.png"
                  width={165}
                  height={110}
                  className="rounded"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles.imageItem}>
                <Image
                  onClick={() => setImage("/add.png")}
                  src="/add.png"
                  width={165}
                  height={110}
                  className="rounded"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </Row>
        </div>
      ) : (
        <div>
          <Row className={styles.leftCol}>
            <div>
              <Image
                src={image}
                width={500}
                height={500}
                className={styles.imageBox}
              />
            </div>
          </Row>
          <Row>
            <div className={styles.scrollImage}>
              <div className={styles.imageItem}>
                <Image
                  onClick={() => setImage("/futsal.jpg")}
                  src="/futsal.jpg"
                  width={165}
                  height={110}
                  className="rounded"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles.imageItem}>
                <Image
                  onClick={() => setImage("/volley.jpg")}
                  src="/volley.jpg"
                  width={165}
                  height={110}
                  className="rounded"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles.imageItem}>
                <Image
                  onClick={() => setImage("/basket.jpg")}
                  src="/basket.jpg"
                  width={165}
                  height={110}
                  className="rounded"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles.imageItem}>
                <Image
                  onClick={() => setImage("/logo.png")}
                  src="/logo.png"
                  width={165}
                  height={110}
                  className="rounded"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </Row>
        </div>
      )}
      <AddFotoVenue
        show={showAddFoto}
        handleClose={handleClose}
        handleForm={(e) => handleForm(e)}
        handleFoto={handleFoto}
      />
    </Col>
  );
};

export const DetailHeading = ({ page, item }) => {
  const router = useRouter();
  return (
    <>
      <Row>
        <div className={styles.title}>
          <h1 className={styles.fontOpen}>{item?.name_venue}</h1>
          <p className={styles.fontLato}>{item?.address_venue}</p>
          <p className={styles.price}>Rp 210.000</p>
        </div>
      </Row>
      <Row className={styles.heading}>
        <Col
          sm={3}
          className={`${
            (page === "detail" && styles.headingActive) || styles.headingOff
          } py-auto text-center`}
          onClick={() => router.push("/venue/detail")}
        >
          <h5>Detail</h5>
        </Col>
        <Col
          sm={3}
          className={`${
            (page === "field" && styles.headingActive) || styles.headingOff
          } py-auto text-center`}
          onClick={() => router.push("/venue/field")}
        >
          <h5>Field</h5>
        </Col>
        <Col
          sm={3}
          className={`${
            (page === "review" && styles.headingActive) || styles.headingOff
          } py-auto text-center`}
          onClick={() => router.push("/venue/review")}
        >
          <h5>Review</h5>
        </Col>
      </Row>
    </>
  );
};
