import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { AddModal } from "../../components/AddModal";
import { DetailLayout, DetailHeading } from "../../components/DetailLayout";
import styles from "../../styles/Detail.module.css";

const DetailPage = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const {
    query: { id },
  } = router;
  console.log(id);

  return (
    <Row className={`${styles.container}`}>
      <DetailLayout />
      <Col md="12" lg="8" className={styles.containerRight}>
        <DetailHeading page="detail" />
        <Row className={styles.description}>
          <Row>
            <div className={styles.descTitle}>
              <h5>Description :</h5>
              <div>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>Edit this page ?</Tooltip>
                  }
                >
                  <Button
                    variant="success"
                    className={styles.buttonEdit}
                    onClick={() => setShow(true)}
                  >
                    <AiFillEdit size={35} />
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Row>
          <Row>
            <p className={styles.descBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum id
              ab ipsum corrupti nihil harum omnis veniam soluta, incidunt fuga
              minima dolore cum, sint, quaerat cupiditate voluptatibus nulla
              voluptates! Voluptas veniam ea soluta. Repellendus modi, vero sit
              voluptates quae, ipsa fuga tempore aliquid rem id aliquam officiis
              saepe quidem, sed voluptate illo obcaecati. Delectus nesciunt
              animi voluptates laudantium exercitationem deserunt ratione magnam
              tenetur explicabo maiores placeat eum ad fugit expedita laboriosam
              iure perferendis assumenda, et perspiciatis quos atque dicta
              necessitatibus sapiente! Autem aperiam libero sit expedita quis?
              Sint ea odio tenetur impedit omnis, nihil odit, amet ab illum
              earum sed.
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
        </Row>
      </Col>

      {/* Modal */}
      <AddModal add="venue" show={show} handleClose={() => setShow(false)} />
    </Row>
  );
};

export default DetailPage;
