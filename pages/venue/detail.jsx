import Image from "next/image";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../../styles/Detail.module.css";

const DetailPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <Row>
          <Col md="12" lg="4">
            <Row className={styles.leftCol}>
              <div>
                <Image
                  src="/basket.jpg"
                  width={500}
                  height={500}
                  className={styles.imageBox}
                />
              </div>
            </Row>
            <Row>
              <div className={styles.scrollImage}>
                <div>
                  <Image
                    src="/tennis.jpg"
                    width={500}
                    height={500}
                    className={styles.imageItem}
                  />
                </div>
                <div>
                  <Image
                    src="/futsal.jpg"
                    width={500}
                    height={500}
                    className={styles.imageItem}
                  />
                </div>
                <div>
                  <Image
                    src="/volley.jpg"
                    width={500}
                    height={500}
                    className={styles.imageItem}
                  />
                </div>
                <div>
                  <Image
                    src="/basket.jpg"
                    width={500}
                    height={500}
                    className={styles.imageItem}
                  />
                </div>
              </div>
            </Row>
          </Col>
          <Col md="12" lg="8">
            <div className={styles.containerRight}>
              <Row>
                <div className={styles.title}>
                  <h1>Buana Jaya Sport</h1>
                  <p>Jalan Konoha raya No. 10, Dressrosa, Kota East Blue</p>
                  <p className={styles.price}>Rp 210.000</p>
                </div>
              </Row>
              <Row>
                <div>
                  <div className={styles.heading}>
                    <h5 className={styles.headingActive}>Detail</h5>
                    <h5 className={styles.headingOff}>Field</h5>
                    <h5 className={styles.headingOff}>Review</h5>
                  </div>
                  <div className={styles.description}>
                    <Row>
                      <div className={styles.descTitle}>
                        <h5>Description :</h5>
                        <div>
                          <Button>Edit Description</Button>
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
                      <h5>Lokasi :</h5>
                      <p>Jalan Konoha raya No. 10 Dressrosa, Kota East Blue</p>
                      <div>
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
