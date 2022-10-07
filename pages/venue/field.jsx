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
import toast, { Toaster } from "react-hot-toast";
import styles from "../../styles/Field.module.css";
import { DetailHeading, DetailLayout } from "../../components/DetailLayout";
import { AddModal, EditField } from "../../components/AddModal";
import { getCookie } from "cookies-next";

const Field = () => {
  const router = useRouter();
  const [summon, setSummon] = useState(false);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAddFoto, setShowAddFoto] = useState(false);
  const [detail, setDetail] = useState([]);
  const [fields, setFields] = useState([]);
  const [idField, setIdField] = useState();
  const [result, setResult] = useState(null);
  const [cookiess, setCookiess] = useState();
  const [id, setId] = useState();

  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };

  useEffect(() => {
    setCookiess(getCookie("id"));
    setId(getCookie("user_id"));
  }, []);

  // get detail venue
  const getDetail = () => {
    axios
      .get(`https://grupproject.site/venues/${getCookie("id")}`)
      .then((res) => {
        setDetail(res.data.data);
      });
  };

  // get all fields ==> ini masih nyampur semua GOR
  const getFields = () => {
    axios
      .get(`https://grupproject.site/fields?venue_id=${getCookie("id")}`)
      .then((res) => {
        setFields(res.data.data);
      });
  };

  useEffect(() => {
    getDetail();
    getFields();
  }, []);

  const handleId = (id) => {
    console.log(id);
    setIdField(id);
  };

  // initiate state addfield
  const [addField, setAddField] = useState({
    venue_id: parseInt(getCookie("id")),
    category: "",
    price: parseInt(),
  });

  // add foto
  const handleForm = (e) => {
    const files = e.target.files;
    setInputFoto(files);
  };
  const handleFoto = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append("foto_venue", inputFoto[0]);

    axios
      .post(`https://grupproject.site/venues/foto/${getCookie("id")}`, data)
      .then((res) => {
        const RES = res.data;
        getDetail();
        swal(RES.status, RES.message, "success").then(setShowAddFoto(false));
      })
      .catch((err) => console.log(err));
  };

  // Add new field
  const handleInput = (e) => {
    let newField = { ...addField };
    newField[e.target.name] = e.target.value;
    setAddField(newField);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var axios = require("axios");
    const { category, price } = addField;
    var data = {
      venue_id: parseInt(getCookie("id")),
      category: category,
      price: parseInt(price),
    };

    const myPromise = axios
      .post("https://grupproject.site/fields", data)
      .then(() => {
        getFields();
        setShow(false);
      });
    toast.promise(myPromise, {
      loading: "Saving...",
      success: "Adding Success!",
      error: "Adding Fail",
    });
  };

  // initiate state editfield
  const handleEdit = (id) => {
    setShowEdit(true);
    setIdField(id);
    console.log(idField);
  };
  const [editField, setEditField] = useState();
  // Edit field
  const inputEdit = (e) => {
    let updateField = { ...editField };
    updateField[e.target.name] = e.target.value;
    setEditField(updateField);
    console.log(editField);
  };

  const submitEdit = (e, id) => {
    e.preventDefault();
    var axios = require("axios");
    const { category, price } = editField;
    var data2 = {
      venue_id: parseInt(getCookie("id")),
      category: category,
      price: parseInt(price),
    };
    const myPromise = axios
      .put(`https://grupproject.site/fields/${id}`, data2)
      .then(() => {
        console.log(data2);
        getFields();
        setShowEdit(false);
      });
    toast.promise(myPromise, {
      loading: "Saving...",
      success: "Update Success!",
      error: "Update Failed",
    });
  };

  // delete
  const handleDelete = (id) => {
    var config = {
      method: "delete",
      url: `https://grupproject.site/fields/${id}`,
    };
    const myPromise = axios(config).then(() => {
      getFields();
    });
    toast.promise(myPromise, {
      loading: "Saving...",
      success: "Delete Success!",
      error: "Delete Failed",
    });
  };

  useEffect(() => {
    const idN = parseInt(id);
    const newResult = idN === detail.user_id;
    setResult(newResult);
  }, [detail]);

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
                      const { venue_id, category, price, id } = obj;
                      return (
                        <ListGroup.Item
                          key={index}
                          action
                          onClick={() => handleId(id)}
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
                            onClick={() => handleEdit(idField)}
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
                            onClick={() => handleDelete(idField)}
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

      {/* Modal add field*/}
      <AddModal
        add="field"
        show={show}
        handleClose={() => setShow(false)}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />

      {/* Modal edit field */}
      <EditField
        showEdit={showEdit}
        closeEdit={() => setShowEdit(false)}
        inputEdit={inputEdit}
        submitEdit={(e) => submitEdit(e, idField)}
      />
    </Row>
  );
};

export default Field;
