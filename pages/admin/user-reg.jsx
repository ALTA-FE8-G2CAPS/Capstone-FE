import React from "react";
import { Button, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import styles from "../../styles/Admin.module.css";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useRouter } from "next/router";

const UserReg = () => {
  const router = useRouter();

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.titleUser}>
        <h3>List User Reguler</h3>
      </div>
      <div>
        <Table responsive="sm">
          <thead className={styles.titleTable}>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Si abdul</td>
              <td>siabdul@gmail.com</td>
              <td>Jln. Diponegoro</td>
            </tr>
            <tr>
              <td>Si abdul</td>
              <td>siabdul@gmail.com</td>
              <td>Jln. Diponegoro</td>
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
    </div>
  );
};

export default UserReg;
