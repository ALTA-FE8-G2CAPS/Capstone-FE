import axios from "axios";
import { useRouter } from "next/router.js";
import React, { useEffect, useState } from "react";
import { Col, InputGroup, Row } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";
import { IoFilterSharp } from "react-icons/io5";
// Import components
import ListCard from "../../components/ListCard.jsx";
import { useNavbarContext } from "../../context/contextNavbar";
import styles from "../../styles/Venue.module.css";

const Index = () => {
  const { setStatusNav } = useNavbarContext();
  const router = useRouter();
  const [filter, setFilter] = useState(false);
  const [allVenue, setAllVenue] = useState([]);

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

  useEffect(() => {
    setStatusNav("venue");
    getVenues();
  }, []);

  return (
    <Row>
      <Row className="d-flex justify-content-between">
        <Col xs={8} lg={9} className="ms-5 my-5">
          <InputGroup className={styles.searchBox}>
            <BiSearchAlt
              size={20}
              className={`${styles.searchIcon}`}
              color="lightgrey"
            />
            <input
              type="search"
              placeholder="search"
              className={`${styles.searchBar}`}
            />
          </InputGroup>
        </Col>
        <Col
          xs={1}
          lg={1}
          className={` my-5 me-5 d-flex justify-content-center align-items-center`}
        >
          <IoFilterSharp
            onClick={() => setFilter((prev) => !prev)}
            size={40}
            className={`${styles.filterBox}`}
            color="#465654"
          />
        </Col>
      </Row>
      <Row className={filter ? "d-flex justify-content-center mb-5" : "d-none"}>
        <Col xs={4} lg={3}>
          <select
            defaultValue={"DEFAULT"}
            className={`ms-5 ${styles.filter} mb-3`}
            name="cars"
          >
            <option value="DEFAULT" disabled hidden>
              Filters
            </option>
            <option value="volvo">Termurah</option>
            <option value="saab">Termahal</option>
            <option value="fiat">Populer</option>
            <option value="audi">Uhuy</option>
          </select>
        </Col>
        <Col xs={4} lg={3}>
          <select
            defaultValue={"DEFAULT"}
            className={`ms-5 ${styles.filter} mb-3`}
            name="cars"
          >
            <option value="DEFAULT" disabled hidden>
              Category
            </option>
            <option value="volvo">Termurah</option>
            <option value="saab">Termahal</option>
            <option value="fiat">Populer</option>
            <option value="audi">Uhuy</option>
          </select>
        </Col>
        <Col xs={4} lg={3}>
          <select
            defaultValue={"DEFAULT"}
            className={`ms-5 ${styles.filter} mb-3`}
            name="cars"
          >
            <option value="DEFAULT" disabled hidden>
              Filters
            </option>
            <option value="volvo">Termurah</option>
            <option value="saab">Termahal</option>
            <option value="fiat">Populer</option>
            <option value="audi">Uhuy</option>
          </select>
        </Col>
      </Row>
      <ListCard item={allVenue} />
    </Row>
  );
};

export default Index;
