import Image from "next/image";
import Router from "next/router";
import React, { useState } from "react";
import { Button, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import styles from "../../styles/Detail.module.css";

const DetailPage = () => {
  const [image, setImage] = useState("/basket.jpg");

  const goToField = () => {
    Router.push({
      pathname: "/venue/field",
    });
  };

  const goToReview = () => {
    Router.push({
      pathname: "/venue/field",
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <Row>
          <Col md="12" lg="4">
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
                    onClick={() => setImage("/basket.jpg")}
                    src="/basket.jpg"
                    width={165}
                    height={110}
                    className="rounded"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </Row>
          </Col>
          <Col md="12" lg="8">
            <div className={styles.containerRight}>
              <Row>
                <div className={styles.title}>
                  <h1 className={styles.fontOpen}>Buana Jaya Sport</h1>
                  <p className={styles.fontLato}>
                    Jalan Konoha raya No. 10, Dressrosa, Kota East Blue
                  </p>
                  <p className={styles.price}>Rp 210.000</p>
                </div>
              </Row>
              <Row>
                <div>
                  <Row className={styles.heading}>
                    <Col
                      sm={3}
                      className={`${styles.headingActive} py-auto text-center`}
                    >
                      <h5>Detail</h5>
                    </Col>
                    <Col
                      sm={3}
                      className={`${styles.headingOff} py-auto text-center`}
                      onClick={goToField}
                    >
                      <h5>Field</h5>
                    </Col>
                    <Col
                      sm={3}
                      className={`${styles.headingOff} py-auto text-center`}
                      onClick={goToReview}
                    >
                      <h5>Review</h5>
                    </Col>
                  </Row>
                  <div className={styles.description}>
                    <Row>
                      <div className={styles.descTitle}>
                        <h5>Description :</h5>
                        <div>
                          <OverlayTrigger
                            key="top"
                            placement="top"
                            overlay={
                              <Tooltip id={`tooltip-top`}>
                                Edit this page ?
                              </Tooltip>
                            }
                          >
                            <Button
                              variant="success"
                              className={styles.buttonEdit}
                            >
                              <AiFillEdit size={35} />
                            </Button>
                          </OverlayTrigger>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <p className={styles.descBody}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum id ab ipsum corrupti nihil harum omnis veniam
                        soluta, incidunt fuga minima dolore cum, sint, quaerat
                        cupiditate voluptatibus nulla voluptates! Voluptas
                        veniam ea soluta. Repellendus modi, vero sit voluptates
                        quae, ipsa fuga tempore aliquid rem id aliquam officiis
                        saepe quidem, sed voluptate illo obcaecati. Delectus
                        nesciunt animi voluptates laudantium exercitationem
                        deserunt ratione magnam tenetur explicabo maiores
                        placeat eum ad fugit expedita laboriosam iure
                        perferendis assumenda, et perspiciatis quos atque dicta
                        necessitatibus sapiente! Autem aperiam libero sit
                        expedita quis? Sint ea odio tenetur impedit omnis, nihil
                        odit, amet ab illum earum sed.
                      </p>
                    </Row>
                    <Row className={styles.location}>
                      <h5 className="mb-2 fw-reguler">Lokasi :</h5>
                      <p className={styles.fontLato}>
                        Jalan Konoha raya No. 10 Dressrosa, Kota East Blue
                      </p>
                      <div className={styles.map}>
                        <Image src="/map.png" width={750} height={300} />
                      </div>
                    </Row>
                  </div>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DetailPage;
