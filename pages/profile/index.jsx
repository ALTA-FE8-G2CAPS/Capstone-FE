import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Row, Table } from "react-bootstrap";
import { useNavbarContext } from "../../context/contextNavbar";
import { FiEdit } from "react-icons/fi";
import { TbSoccerField } from "react-icons/tb";
import { BsCalendarCheck } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import styles from "../../styles/Profile.module.css";
import { useRouter } from "next/router";
import { AddModal, RegisPlus } from "../../components/AddModal";
import toast, { Toaster } from "react-hot-toast";

const Index = () => {
  // active nav
  const { setStatusNav } = useNavbarContext();
  useEffect(() => {
    setStatusNav("profile");
  }, []);

  const router = useRouter();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleLogout = () => {
    toast.success("You have been logout");
    router.push("/login");
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
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
                src="/photoprofile.jpg"
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
                    <td>johndoe</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>John Doe</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>johndoe@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Role</td>
                    <td>User / User Plus</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>Jl. Ir. Soekarno No.22</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>

      {/* Modal */}
      <AddModal add="profile" show={show} handleClose={() => setShow(false)} />

      {/* Modal for register user plus */}
      <RegisPlus show={show2} handleClose={() => setShow2(false)} />
    </div>
  );
};

export default Index;
