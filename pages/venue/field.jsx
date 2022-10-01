import Image from "next/image";
import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import styles from "../../styles/Field.module.css";

const Field = () => {
  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };

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
                <div className={styles.imageItem}>
                  <Image
                    src="/futsal.jpg"
                    width={165}
                    height={110}
                    className="rounded"
                  />
                </div>
                <div className={styles.imageItem}>
                  <Image
                    src="/volley.jpg"
                    width={165}
                    height={110}
                    className="rounded"
                  />
                </div>
                <div className={styles.imageItem}>
                  <Image
                    src="/basket.jpg"
                    width={165}
                    height={110}
                    className="rounded"
                  />
                </div>
                <div className={styles.imageItem}>
                  <Image
                    src="/basket.jpg"
                    width={165}
                    height={110}
                    className="rounded"
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
                    <h5>
                      <a href="/venue/detail" className={styles.headingOff}>
                        Detail
                      </a>
                    </h5>
                    <h5>
                      <a href="/venue/field" className={styles.headingActive}>
                        Field
                      </a>
                    </h5>
                    <h5 className={styles.headingOff}>Review</h5>
                  </div>
                  <div className={styles.description}></div>
                </div>
                <div>
                  <Row>
                    <Col sm="12" md="8">
                      <div className={styles.scheduleDay}>
                        <div>Monday</div>
                        <div>Tuesday</div>
                        <div style={{ color: "black" }}>Wednesday</div>
                        <div>Thursday</div>
                        <div>Friday</div>
                        <div>Saturday</div>
                        <div>Sunday</div>
                      </div>
                      <div className={styles.scrollSchedule}>
                        <ListGroup>
                          <ListGroup.Item
                            action
                            onClick={alertClicked}
                            className={styles.scheduleItem}
                          >
                            <div className={styles.perItem}>
                              <div>User Y</div>
                              <div>08.00 - 09.00</div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={alertClicked}
                            className={styles.scheduleItem}
                          >
                            <div className={styles.perItem}>
                              <div>User Y</div>
                              <div>09.00 - 10.00</div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={alertClicked}
                            className={styles.scheduleItem}
                          >
                            <div className={styles.perItem}>
                              <div>User Y</div>
                              <div>08.00 - 09.00</div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={alertClicked}
                            className={styles.scheduleItem}
                          >
                            <div className={styles.perItem}>
                              <div>User Y</div>
                              <div>08.00 - 09.00</div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={alertClicked}
                            className={styles.scheduleItem}
                          >
                            <div className={styles.perItem}>
                              <div>User Y</div>
                              <div>08.00 - 09.00</div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={alertClicked}
                            className={styles.scheduleItem}
                          >
                            <div className={styles.perItem}>
                              <div>User Y</div>
                              <div>08.00 - 09.00</div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={alertClicked}
                            className={styles.scheduleItem}
                          >
                            <div className={styles.perItem}>
                              <div>User Y</div>
                              <div>08.00 - 09.00</div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={alertClicked}
                            className={styles.scheduleItem}
                          >
                            <div className={styles.perItem}>
                              <div>User Y</div>
                              <div>08.00 - 09.00</div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={alertClicked}
                            className={styles.scheduleItem}
                          >
                            <div className={styles.perItem}>
                              <div>User Y</div>
                              <div>08.00 - 09.00</div>
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={alertClicked}
                            className={styles.scheduleItem}
                          >
                            <div className={styles.perItem}>
                              <div>User Y</div>
                              <div>08.00 - 09.00</div>
                            </div>
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                    </Col>
                    <Col sm="12" md="4">
                      <div>
                        <ListGroup variant="flush">
                          <ListGroup.Item action onClick={alertClicked}>
                            Lapangan Tennis A
                          </ListGroup.Item>
                          <ListGroup.Item action onClick={alertClicked}>
                            Lapangan Tennis A
                          </ListGroup.Item>
                          <ListGroup.Item action onClick={alertClicked}>
                            Lapangan Tennis A
                          </ListGroup.Item>
                          <ListGroup.Item action onClick={alertClicked}>
                            Lapangan Tennis A
                          </ListGroup.Item>
                          <ListGroup.Item action onClick={alertClicked}>
                            Lapangan Tennis A
                          </ListGroup.Item>
                          <ListGroup.Item action onClick={alertClicked}>
                            Lapangan Tennis A
                          </ListGroup.Item>
                          <ListGroup.Item action onClick={alertClicked}>
                            Lapangan Tennis A
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                      <div className={styles.buttonBox}>
                        <button className={styles.addButton}>
                          Add New Field
                        </button>
                        <button className={styles.editButton}>
                          Edit Field
                        </button>
                        <button className={styles.deleteButton}>
                          Delete Field
                        </button>
                      </div>
                      <div className={styles.colorLegend}>
                        <Row>
                          <Col xs="2">
                            <div className="d-flex justify-content-center py-2">
                              <div className={styles.colorIndex}></div>
                            </div>
                          </Col>
                          <Col xs="10">
                            <div className="d-flex justify-content-start py-2">
                              <div className={styles.titleIndex}>Empty</div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="2">
                            <div className="d-flex justify-content-center py-2">
                              <div className={styles.colorIndex}></div>
                            </div>
                          </Col>
                          <Col xs="10">
                            <div className="d-flex justify-content-start py-2">
                              <div className={styles.titleIndex}>Empty</div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="2">
                            <div className="d-flex justify-content-center py-2">
                              <div className={styles.colorIndex}></div>
                            </div>
                          </Col>
                          <Col xs="10">
                            <div className="d-flex justify-content-start py-2">
                              <div className={styles.titleIndex}>Empty</div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="2">
                            <div className="d-flex justify-content-center py-2">
                              <div className={styles.colorIndex}></div>
                            </div>
                          </Col>
                          <Col xs="10">
                            <div className="d-flex justify-content-start py-2">
                              <div className={styles.titleIndex}>Empty</div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Field;
