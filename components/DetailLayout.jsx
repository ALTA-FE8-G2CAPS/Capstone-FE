import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BsFillCameraFill } from "react-icons/bs"
import { getCookie } from "cookies-next"
// Import Component
import styles from "../styles/Detail.module.css";
import { AddFotoVenue } from "./AddModal";

export const DetailLayout = ({
  user_id,
  detail,
  handleShow,
  showAddFoto,
  handleClose,
  handleForm,
  handleFoto,
}) => {
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState(false)
  useEffect(() => {
    if (detail !== null && detail !== undefined) {
      setImage(detail[0].foto_venue)
    } else {
      setImage("/add.png")
    }
    const result = getCookie("user_id") === user_id
    setUserId(result)
    console.log(result)
  }, [detail])
  return (
    <Col md={12} lg={4}>
      <Row className={styles.leftCol}>
        <div className={styles.imageBoxMain} onClick={userId? handleShow : () => {}}>
          <div className={styles.colorBox} >
            <Image
              src={image}
              width={500}
              height={500}
              className={styles.imageBox}
              onClick={userId? handleShow : () => {}}
            />
            <Row
              className={`${styles.middle} d-flex justify-content-center text-center ms-0 fs-5 fw-bold`}
            >
              <BsFillCameraFill size={50} />
              Add Image
            </Row>
          </div>
        </div>
      </Row>
      <Row>
        <div className={styles.scrollImage}>
          {detail?.map((item, index) => {
            return (
              <div key={index} className={styles.imageItem}>
                <Image
                  onClick={() => setImage(item.foto_venue)}
                  src={item.foto_venue}
                  width={165}
                  height={110}
                  className="rounded"
                  style={{ cursor: "pointer" }}
                />
              </div>
            )
          })}
        </div>
      </Row>
      <AddFotoVenue
        show={showAddFoto}
        handleClose={handleClose}
        handleForm={handleForm}
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
          className={`${(page === "detail" && styles.headingActive) || styles.headingOff
            } py-auto text-center`}
          onClick={() => router.push("/venue/detail")}
        >
          <h5>Detail</h5>
        </Col>
        <Col
          sm={3}
          className={`${(page === "field" && styles.headingActive) || styles.headingOff
            } py-auto text-center`}
          onClick={() => router.push("/venue/field")}
        >
          <h5>Field</h5>
        </Col>
        <Col
          sm={3}
          className={`${(page === "review" && styles.headingActive) || styles.headingOff
            } py-auto text-center`}
          onClick={() => router.push("/venue/review")}
        >
          <h5>Review</h5>
        </Col>
      </Row>
    </>
  );
};
