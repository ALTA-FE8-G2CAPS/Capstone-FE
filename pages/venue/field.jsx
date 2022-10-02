import React, { useState } from "react";
import {
  Button,
  Col,
  ListGroup,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { BsInfoLg } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";
import { AiFillEdit, AiOutlineDelete, AiOutlineClose } from "react-icons/ai";
import styles from "../../styles/Field.module.css";
import { DetailHeading, DetailLayout } from "../../components/DetailLayout";

const Field = () => {

  const [summon, setSummon] = useState(false)

  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };

  return (
    <Row className={styles.container}>
      <DetailLayout />
      <Col md="12" lg="8">
        <div className={styles.containerRight}>
          <DetailHeading
            page="field"
          />
          <div>
            <Row>
              <Col sm="12" md="8">
                <div className={styles.scheduleDay}>
                  <div className={styles.dayActive}>Monday</div>
                  <div className={styles.dayOff}>Tuesday</div>
                  <div className={styles.dayOff}>Wednesday</div>
                  <div className={styles.dayOff}>Thursday</div>
                  <div className={styles.dayOff}>Friday</div>
                  <div className={styles.dayOff}>Saturday</div>
                  <div className={styles.dayOff}>Sunday</div>
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
                <div className={`${styles.fabContainer}`}>
                  {summon ? <Button onClick={() => setSummon(false)} className={styles.button}>
                    <AiOutlineClose size={20} />
                  </Button> :
                    <Button onClick={() => setSummon(true)} className={styles.button}>
                      <BsInfoLg size={20} />
                    </Button>
                  }
                  {summon ?
                    <ul onMouseEnter={() => setSummon(true)} onMouseLeave={() => setSummon(false)} className={`${styles.option}`}>
                      <li>
                        <OverlayTrigger
                          key="left"
                          placement="left"
                          overlay={
                            <Tooltip id={`tooltip-left`}>
                              Add Field
                            </Tooltip>
                          }>
                          <Button className={`${styles.infoButton} ${styles.addButton}`}>
                            <IoAddOutline size={20} />
                          </Button>
                        </OverlayTrigger>
                      </li>
                      <li>
                        <OverlayTrigger
                          key="left"
                          placement="left"
                          overlay={
                            <Tooltip id={`tooltip-left`}>
                              Edit Field
                            </Tooltip>
                          }>
                          <Button className={`${styles.infoButton} ${styles.editButton}`}>
                            <AiFillEdit size={20} />
                          </Button>
                        </OverlayTrigger>
                      </li>
                      <li>
                        <OverlayTrigger
                          key="left"
                          placement="left"
                          overlay={
                            <Tooltip id={`tooltip-left`}>
                              Delete Field
                            </Tooltip>
                          }>
                          <Button className={`${styles.infoButton} ${styles.deleteButton}`}>
                            <AiOutlineDelete size={20} />
                          </Button>
                        </OverlayTrigger>
                      </li>
                    </ul> : ""}
                </div>

                <div className={styles.colorLegend}>
                  <Row>
                    <Col xs="3">
                      <div className="d-flex justify-content-center py-2">
                        <div className={styles.colorIndex}></div>
                      </div>
                    </Col>
                    <Col xs="9">
                      <div className="d-flex justify-content-start py-2">
                        <div className={styles.titleIndex}>Empty</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                      <div className="d-flex justify-content-center py-2">
                        <div className={styles.colorIndex}></div>
                      </div>
                    </Col>
                    <Col xs="9">
                      <div className="d-flex justify-content-start py-2">
                        <div className={styles.titleIndex}>Empty</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                      <div className="d-flex justify-content-center py-2">
                        <div className={styles.colorIndex}></div>
                      </div>
                    </Col>
                    <Col xs="9">
                      <div className="d-flex justify-content-start py-2">
                        <div className={styles.titleIndex}>Empty</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">
                      <div className="d-flex justify-content-center py-2">
                        <div className={styles.colorIndex}></div>
                      </div>
                    </Col>
                    <Col xs="9">
                      <div className="d-flex justify-content-start py-2">
                        <div className={styles.titleIndex}>Empty</div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Field;
