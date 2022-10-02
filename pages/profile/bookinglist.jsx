import React from "react";
import { Table } from "react-bootstrap";
import styles from "../../styles/BookingOwner.module.css";

const Bookinglist = () => {
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.title}>
        <h3>Booking List</h3>
      </div>
      <div>
        <Table responsive="sm">
          <thead className={styles.titleTable}>
            <tr>
              <th className={styles.titleItem}>Field</th>
              <th>Renter</th>
              <th>Schedule</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Transaction Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lapangan Tennis A</td>
              <td>Si Abdul</td>
              <td>Jumat 09.00-11.00</td>
              <td>Rp120.000</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Lapangan Tennis A</td>
              <td>Si Abdul</td>
              <td>Jumat 09.00-11.00</td>
              <td>Rp120.000</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Bookinglist;
