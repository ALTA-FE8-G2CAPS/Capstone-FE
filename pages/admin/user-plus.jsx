import React, { useState } from "react";
import {
  Button,
  Col,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import styles from "../../styles/Admin.module.css";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/router";
import { VerifyModal } from "../../components/AddModal";

const UserPlus = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.titleUser}>
        <h3>List User Plus</h3>
      </div>
      <div>
        <Table responsive="sm">
          <thead className={styles.titleTable}>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Address</th>
              <th>Total Venues</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Si abdul</td>
              <td>siabdul@gmail.com</td>
              <td>Jln. Diponegoro</td>
              <td>Jln. Diponegoro</td>
              <td className={styles.status}>
                <Row>
                  <Col>Verified</Col>
                  <Col>
                    <FiEdit
                      size={20}
                      className={styles.icon}
                      onClick={() => setShow(true)}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
            <tr>
              <td>Si abdul</td>
              <td>siabdul@gmail.com</td>
              <td>Jln. Diponegoro</td>
              <td>Jln. Diponegoro</td>
              <td className={styles.status}>
                <Row>
                  <Col>Pending</Col>
                  <Col>
                    <FiEdit
                      size={20}
                      className={styles.icon}
                      onClick={() => setShow(true)}
                    />
                  </Col>
                </Row>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>Go back to dashboard</Tooltip>}
        >
          <Button
            variant="success"
            className={styles.goBack}
            onClick={() => router.push("/admin")}
          >
            <RiArrowGoBackLine size={35} />
          </Button>
        </OverlayTrigger>
      </div>
      {/* Verify Modal */}
      <VerifyModal show={show} handleClose={() => setShow(false)} />
    </div>
  );
};

export default UserPlus;
