import React, { useEffect, useState } from "react";
import ListCard from "../../components/ListCard";
import { Button, Col, Row } from "react-bootstrap";
import { IoAddOutline } from "react-icons/io5";
import styles from "../../styles/MyVenue.module.css";
import { useRouter } from "next/router";
import { AddModal } from "../../components/AddModal";
import axios from "axios";

const Myvenue = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [allVenue, setAllVenue] = useState([]);
  const [venue, setVenue] = useState({
    name_venue: "",
    Address_venue: "",
    latitude: parseInt(),
    longitude: parseInt(),
    description_venue: "",
  });
  const [nameVenue, setNameVenue] = useState();
  const [addressVenue, setAddress] = useState();
  const [latVen, setLatVen] = useState();
  const [longVen, setLongVen] = useState();
  const [desc, setDesc] = useState();

  // Get all venues
  const getVenues = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: "https://grupproject.site/venues",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NjQ4OTg5OTgsIm5hbWVfdXNlciI6Inp1bGZhIiwicm9sZSI6InVzZXIiLCJ1c2VySWQiOjYsInVzZXJfb3duZXIiOmZhbHNlfQ.gRvnlZgrgqf5icrsaWWr1KR3UvX8ZJXiobfQwlQAuCI",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config).then(function (resp) {
      // console.log(resp.data);
      setAllVenue(resp.data.data);
      console.log(resp);
    });
  };

  // // Add new venue
  // const handleInput = (e) => {
  //   setNameVenue(e.target.value);
  //   setAddress(e.target.value);
  //   setLatVen(e.target.value);
  //   setLongVen(e.target.value);
  //   setDesc(e.target.value);
  // };

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

    // var config = {
    //   method: "post",
    //   url: "https://grupproject.site/venues",
    //   headers: {
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NjQ4OTc4NjEsIm5hbWVfdXNlciI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwidXNlcklkIjoxLCJ1c2VyX293bmVyIjpmYWxzZX0.sdL8dewfU7kHuHCd5woHqbJHvV3fDnBBauxlq28FVY4",
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // axios(config).then(function (resp) {
    //   getVenues();
    //   console.log(resp.data);
    // });

    axios
      .post("https://grupproject.site/venues", data, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NjQ4OTc4NjEsIm5hbWVfdXNlciI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwidXNlcklkIjoxLCJ1c2VyX293bmVyIjpmYWxzZX0.sdL8dewfU7kHuHCd5woHqbJHvV3fDnBBauxlq28FVY4",
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        alert("Add new venue success");
        getVenues();
      });
  };

  useEffect(() => {
    getVenues();
  }, []);

  return (
    <div>
      <div className={`${styles.container} container`}>
        <h2 className={styles.title}>My Venue</h2>
        <Row className={styles.boxBody}>
          <Col className={styles.boxAmount}>
            <span className={styles.amount}>8</span>
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
          <ListCard item={allVenue} />
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
