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
import dynamic from 'next/dynamic'

function Detail() {

  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showAddFoto, setShowAddFoto] = useState(false);
  const [detail, setDetail] = useState([]);
  const [venue, setVenue] = useState({
    name_venue: "",
    Address_venue: "",
    latitude: parseInt(),
    longitude: parseInt(),
    description_venue: "",
  });
  const [inputFoto, setInputFoto] = useState({})

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

  const ShowMap = dynamic(() => import('../../components/ShowMap'), {
    ssr: false,
  })

  return (
    console.log(detail),
    <Row className={`${styles.container}`}>
      <DetailLayout
        detail={detail.foto_venue}
        user_id={detail.user_id}
        handleForm={handleForm}
        handleFoto={handleFoto}
        handleShow={() => setShowAddFoto(true)}
        showAddFoto={showAddFoto}
        handleClose={() => setShowAddFoto(false)}
      />
      <Col md="12" lg="8" className={styles.containerRight}>
        <DetailHeading page="detail" item={detail} />
        <Row className={styles.description}>
          <Row>
            <div className={styles.descTitle}>
              <h5>Description :</h5>
              <div>
                {/* <OverlayTrigger
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
                </OverlayTrigger> */}
              </div>
            </div>
          </Row>
          <Row>
            <p className={styles.descBody}>{detail.description_venue}</p>
          </Row>
          <Row className={styles.location}>
            <h5 className="mb-2 fw-reguler">Lokasi :</h5>
            <p className={styles.fontLato}>{detail.address_venue}</p>
            <div className="p-2" style={{backgroundColor : "lightgrey"}}>
              <ShowMap marker={detail} />
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

export default Detail;
