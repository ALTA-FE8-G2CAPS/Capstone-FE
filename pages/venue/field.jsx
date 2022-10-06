import axios from "axios";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
import { AddModal } from "../../components/AddModal";
import { getCookie } from "cookies-next";

const Field = () => {
  const [summon, setSummon] = useState(false);
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState([]);
  const [fields, setFields] = useState([]);
  const [cookiess, setCookiess] = useState();
  const router = useRouter();

  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };

  useEffect(() => {
    setCookiess(getCookie("id"));
  }, []);

  // get detail venue
  const getDetail = () => {
    axios
      .get(`https://grupproject.site/venues/${getCookie("id")}`)
      .then((res) => {
        setDetail(res.data.data);
      });
    // .catch((error) => console.error(error.response.data));
  };

  // get all fields ==> ini masih nyampur semua GOR
  const getFields = () => {
    axios.get("https://grupproject.site/fields").then((res) => {
      setFields(res.data.data);
    });
  };

  useEffect(() => {
    getDetail();
    getFields();
  }, []);

  // initiate state addfield
  const [addField, setAddField] = useState({
    venue_id: parseInt(getCookie("id")),
    category: "",
    price: parseInt(),
  });

  // Add new field
  const handleInput = (e) => {
    let newField = { ...addField };
    newField[e.target.name] = e.target.value;
    setAddField(newField);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var axios = require("axios");
    const { venue_id, category, price } = addField;
    var data = {
      venue_id: parseInt(getCookie("id")),
      category: category,
      price: parseInt(price),
    };

    axios.post("https://grupproject.site/fields", data).then(() => {
      alert("add new field success");
      getFields();
      setShow(false);
    });
  };

  return (
    <Row className={styles.container}>
      <DetailLayout />
      <Col md="12" lg="8">
        <div className={styles.containerRight}>
          <DetailHeading page="field" item={detail} />
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
                    {fields?.map((obj, index) => {
                      const { venue_id, category, price } = obj;
                      return (
                        <ListGroup.Item
                          key={index}
                          action
                          onClick={alertClicked}
                        >
                          {category}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </div>
                <div className={`${styles.fabContainer}`}>
                  {summon ? (
                    <Button
                      onClick={() => setSummon(false)}
                      className={styles.button}
                    >
                      <AiOutlineClose size={20} />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setSummon(true)}
                      className={styles.button}
                    >
                      <BsInfoLg size={20} />
                    </Button>
                  )}
                  {summon ? (
                    <ul
                      onMouseEnter={() => setSummon(true)}
                      onMouseLeave={() => setSummon(false)}
                      className={`${styles.option}`}
                    >
                      <li>
                        <OverlayTrigger
                          key="left"
                          placement="left"
                          overlay={
                            <Tooltip id={`tooltip-left`}>Add Field</Tooltip>
                          }
                        >
                          <Button
                            className={`${styles.infoButton} ${styles.addButton}`}
                            onClick={() => setShow(true)}
                          >
                            <IoAddOutline size={20} />
                          </Button>
                        </OverlayTrigger>
                      </li>
                      <li>
                        <OverlayTrigger
                          key="left"
                          placement="left"
                          overlay={
                            <Tooltip id={`tooltip-left`}>Edit Field</Tooltip>
                          }
                        >
                          <Button
                            className={`${styles.infoButton} ${styles.editButton}`}
                            onClick={() => setShow(true)}
                          >
                            <AiFillEdit size={20} />
                          </Button>
                        </OverlayTrigger>
                      </li>
                      <li>
                        <OverlayTrigger
                          key="left"
                          placement="left"
                          overlay={
                            <Tooltip id={`tooltip-left`}>Delete Field</Tooltip>
                          }
                        >
                          <Button
                            className={`${styles.infoButton} ${styles.deleteButton}`}
                          >
                            <AiOutlineDelete size={20} />
                          </Button>
                        </OverlayTrigger>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
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

      {/* Modal */}
      <AddModal
        add="field"
        show={show}
        handleClose={() => setShow(false)}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </Row>
  );
};

export default Field;
