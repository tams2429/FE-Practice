import React from "react";
import styles from "../css/SingleApplication.module.css";
import moment from "moment";

const SingleApplication = ({ application }) => {
  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        £{application.loan_amount}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {moment(application.date_created).format('Do MMMM YYYY')}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {moment(application.expiry_date).format('Do MMMM YYYY')}
      </div>
    </div>
  );
};

export default SingleApplication;
