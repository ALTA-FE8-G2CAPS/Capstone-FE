import React, { useState, useEffect } from "react";
import axios from "axios"
import Image from "next/image";
import {getCookie} from "cookies-next"
import { Col, OverlayTrigger, Row, Tooltip, Button } from "react-bootstrap";
import { DetailHeading, DetailLayout } from "../../components/DetailLayout";
import { AiFillStar } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import styles from "../../styles/Review.module.css";
import { AddModal } from "../../components/AddModal";

const Review = () => {
  const [show, setShow] = useState(false);
  const [showAddFoto, setShowAddFoto] = useState(false);
  const [cookiess, setCookiess] = useState();
  const [detail, setDetail] = useState([]);

  // get detail venue
  const getDetail = () => {
    axios
      .get(`https://grupproject.site/venues/${getCookie("id")}`)
      .then((res) => {
        setDetail(res.data.data);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  // add foto
  const handleForm = (e) => {
    const files = e.target.files
    setInputFoto(files)
  };
  const handleFoto = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append("foto_venue", inputFoto[0])

    axios.post(`https://grupproject.site/venues/foto/${getCookie("id")}`, data)
      .then(res => {
        const RES = res.data
        getDetail()
        swal(RES.status, RES.message, "success")
          .then(setShowAddFoto(false))
      })
      .catch(err => console.log(err))
  };

  return (
    <Row className={styles.container}>
      <DetailLayout
        detail={detail.foto_venue}
        handleForm={handleForm}
        handleFoto={handleFoto}
        handleShow={() => setShowAddFoto(true)}
        showAddFoto={showAddFoto}
        handleClose={() => setShowAddFoto(false)}
      />
      <Col md="12" lg="8">
        <div className={styles.containerRight}>
          <DetailHeading page="review" item={detail}/>
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
