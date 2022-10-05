import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { AddModal } from "../../components/AddModal";
import { DetailLayout, DetailHeading } from "../../components/DetailLayout";
import styles from "../../styles/Detail.module.css";
import { getCookie } from "cookies-next";

const DetailPage = () => {
  const [show, setShow] = useState(false);
  const [showAddFoto, setShowAddFoto] = useState(false);
  const [detail, setDetail] = useState([]);
  const router = useRouter();
  const [cookiess, setCookiess] = useState();
  const [fotoVenue, setFotoVenue] = useState({
    foto_venue: null,
  });
  const [venue, setVenue] = useState({
    name_venue: "",
    Address_venue: "",
    latitude: parseInt(),
    longitude: parseInt(),
    description_venue: "",
  });

  useEffect(() => {
    setCookiess(getCookie("id"));
  }, []);

  // get detail venue
  const getDetail = () => {
    axios
      .get(`https://grupproject.site/venues/${getCookie("id")}`)
      .then((res) => {
        console.log("responnya", res.data.data);
        setDetail(res.data.data);
      });
    // .catch((error) => console.error(error.response.data));
  };

  useEffect(() => {
    getDetail();
  }, []);

  // add foto
  const handleForm = (e) => {
    const target = e.target;
    let newFotoVenue = { ...fotoVenue };
    newFotoVenue[e.target.name] = target.files[0];
    setFotoVenue(newFotoVenue);
  };
  const handleFoto = (e) => {
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    for (var i in fotoVenue) {
      data.append(i, fotoVenue[i]);
    }
    axios
      .post(`https://grupproject.site/venues/foto/${getCookie("id")}`)
      .then((res) => {
        console.log(res.data);
        alert("add foto succces");
        getDetail();
        setShowAddFoto(false);
      })
      .catch((err) => console.log(err.response.data));
  };

  // edit venue
  const handleInput = (e) => {
    let newVenue = { ...venue };
    newVenue[e.target.name] = e.target.value;
    setVenue(newVenue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var axios = require("axios");
    const {
      name_venue,
      Address_venue,
      latitude,
      longitude,
      description_venue,
    } = venue;
    var data = {
      name_venue: name_venue,
      Address_venue: Address_venue,
      latitude: parseInt(latitude),
      longitude: parseInt(longitude),
      description_venue: description_venue,
    };

    axios
      .put(`https://grupproject.site/venues/${getCookie("id")}`, data)
      .then(() => {
        alert("Edit venue success");
        getDetail();
        setShow(false);
      });
  };

  return (
    <Row className={`${styles.container}`}>
      <DetailLayout
        fotoVenue={fotoVenue}
        handleShow={() => setShowAddFoto(true)}
        showAddFoto={showAddFoto}
        handleClose={() => setShowAddFoto(false)}
        handleForm={handleForm}
        handleFoto={handleFoto}
      />
      <Col md="12" lg="8" className={styles.containerRight}>
        <DetailHeading page="detail" item={detail} />
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
            <p className={styles.descBody}>{detail.description_venue}</p>
          </Row>
          <Row className={styles.location}>
            <h5 className="mb-2 fw-reguler">Lokasi :</h5>
            <p className={styles.fontLato}>{detail.address_venue}</p>
            <div className={styles.map}>
              <Image src="/map.png" width={750} height={300} />
            </div>
          </Row>
        </Row>
      </Col>

      {/* Modal */}
      <AddModal
        add="venue"
        show={show}
        handleClose={() => setShow(false)}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </Row>
  );
};

export default DetailPage;
