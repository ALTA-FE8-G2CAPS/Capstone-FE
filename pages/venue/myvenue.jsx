import React, { useEffect, useState } from "react";
import ListCard from "../../components/ListCard";
import { Button, Col, Row } from "react-bootstrap";
import { IoAddOutline } from "react-icons/io5";
import styles from "../../styles/MyVenue.module.css";
import { useRouter } from "next/router";
import { AddModal } from "../../components/AddModal";
import axios from "axios";
import { getCookie } from "cookies-next";

const Myvenue = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [allVenue, setAllVenue] = useState([]);
  const [cookiess, setCookiess] = useState();
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

  // Get all venues
  const getVenues = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: "https://grupproject.site/venues",
      data: data,
    };

    axios(config).then(function (resp) {
      setAllVenue(resp.data.data);
    });
  };

  // Add new venue
  const handleInput = (e) => {
    let newvenue = { ...venue };
    newvenue[e.target.name] = e.target.value;
    setVenue(newvenue);
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

    axios.post("https://grupproject.site/venues", data).then(() => {
      alert("Add new venue success");
      getVenues();
      setShow(false);
    });
  };

  useEffect(() => {
    getVenues();
  }, []);

  // delete venue
  const handleDelete = (id) => {
    axios.delete(`https://grupproject.site/venues/${id}`).then(() => {
      alert("venue deleted");
      getVenues();
    });
  };

  return (
    <div>
      <div className={`${styles.container} container`}>
        <h2 className={styles.title}>My Venue</h2>
        <Row className={styles.boxBody}>
          <Col className={styles.boxAmount}>
            <span className={styles.amount}>{allVenue.length}</span>
            <span> Venues</span>
          </Col>
          <Col className={styles.rightCol}>
            <div>
              <button
                sm
                className={styles.addButton}
                onClick={() => setShow(true)}
              >
                <IoAddOutline size={20} />
                <div>Add New Venue</div>
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <ListCard item={allVenue} handleDelete={(id) => handleDelete(id)} />
        </Row>
      </div>

      {/* Modal */}
      <AddModal
        add="venue"
        show={show}
        handleClose={() => setShow(false)}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Myvenue;
