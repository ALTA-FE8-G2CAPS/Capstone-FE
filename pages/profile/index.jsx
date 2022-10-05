import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Row, Table } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { TbSoccerField } from "react-icons/tb";
import { BsCalendarCheck } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { useRouter } from "next/router";
import { deleteCookie, getCookie } from "cookies-next"
import toast, { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading"
import axios from "axios";
// import Components
import { useNavbarContext } from "../../context/contextNavbar";
import { AddModal, RegisPlus } from "../../components/AddModal";
import styles from "../../styles/Profile.module.css";

const Index = () => {
  // active nav
  const { setStatusNav } = useNavbarContext();
  useEffect(() => {
    setStatusNav("profile");
  }, []);

  const router = useRouter();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleLogout = () => {
    deleteCookie("token")
    deleteCookie("user")
    deleteCookie("user_id")
    toast.success("You have been logout");
    router.push("/login");
  };

  const getProfile = () => {
    setLoading(true)
    axios.get(`https://grupproject.site/users/${getCookie("user_id")}`)
      .then(res => {
        setProfile(res.data.data)
        setLoading(false)
      })
  }
  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div>
      <div>
        <Toaster />
      </div>
      {loading ? <Row className="d-flex justify-content-center align-items-center">
        <ReactLoading type="bubbles" color="#81ADA8" height={667} width={375} />
      </Row> :
        <Row className={styles.container}>
          <Col md="4">
            <div className={styles.colLeft}>
              <div className={styles.topBox}>
                <div className={styles.itemLeft} onClick={() => setShow(true)}>
                  <div>
                    <FiEdit size={30} />
                  </div>
                  <div className={styles.itemLabel}>Edit Profile</div>
                </div>
                <div
                  className={styles.itemLeft}
                  onClick={() => router.push("/venue/myvenue")}
                >
                  <div>
                    <TbSoccerField size={30} />
                  </div>
                  <div className={styles.itemLabel}>My Venues</div>
                </div>
                <div
                  className={styles.itemLeft}
                  onClick={() => router.push("/profile/bookinglist")}
                >
                  <div>
                    <BsCalendarCheck size={30} />
                  </div>
                  <div className={styles.itemLabel}>My Booking List</div>
                </div>
                <div
                  className={styles.itemLeft}
                  onClick={() => router.push("/schedule")}
                >
                  <div>
                    <AiOutlineSchedule size={30} />
                  </div>
                  <div className={styles.itemLabel}>My Schedule</div>
                </div>
                <div
                  className={styles.itemLeft}
                  onClick={() => router.push("/admin")}
                >
                  <div>
                    <MdOutlineDashboard size={30} />
                  </div>
                  <div className={styles.itemLabel}>Admin Dashboard</div>
                </div>
              </div>
              <div className={styles.bottomBox}>
                <div className={styles.beOwner}>
                  Become an Owner?
                  <span onClick={() => setShow2(true)}> Click Here!</span>
                </div>
                <div>
                  <div className={styles.logOut} onClick={handleLogout}>
                    <div>
                      <BiLogOut size={30} />
                    </div>
                    <div className={styles.itemLabel}>Log Out</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="8">
            <div className={styles.colRight}>
              <div className={styles.topItem}>
                <h2>My Profile</h2>
                <p>
                  Manage your profile information to control, protect and secure
                  your account
                </p>
              </div>
              <div className={styles.imageBox}>
                <Image
                  src={profile?.foto_user}
                  width={250}
                  height={250}
                  className={styles.imageProfile}
                />
              </div>
              <div>
                <Table className={styles.tableBox}>
                  <tbody>
                    <tr>
                      <td>Username</td>
                      <td>{profile?.name_user}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{profile?.email}</td>
                    </tr>
                    <tr>
                      <td>Role</td>
                      <td>{profile?.role}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{profile?.address_user}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      }

      {/* Modal */}
      <AddModal add="profile" profile={profile} show={show} handleClose={() => setShow(false)} />

      {/* Modal for register user plus */}
      <RegisPlus show={show2} handleClose={() => setShow2(false)} />
    </div>
  );
};

export default Index;
