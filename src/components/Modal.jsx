import moment from "moment";
import ReactModal from 'react-modal';

//STYLES
import styles from "../css/Modal.module.css";

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(119,122,124,0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '75%',
    borderRadius: '12px',
    padding: '50px 75px',
  },
};

export const Modal = ({isModalOpen, handleModalClose, currentModalData}) => {
  return (
    <ReactModal isOpen={isModalOpen} shouldCloseOnEsc={true} onRequestClose={handleModalClose} style={modalStyles} ariaHideApp={false}>
        <div className={styles.ModalContent}>
          <section className={styles.ModalHeading}>
            <section className={styles.ModalUserProfile}>
              <div className={styles.ModalUserImage}>
                <img src={currentModalData.avatar} alt="user appearance"/>
              </div>
              <div className={styles.ModalUserBio}>
                <h2>{currentModalData.company}</h2>
                <h3>{currentModalData.first_name} {currentModalData.last_name}</h3>
                <a href={currentModalData.email}>{currentModalData.email}</a>
              </div>
            </section>
            <section className={styles.ModalUserOtherInfo}>
              <div className={styles.ModalUserOtherInfoMain}>
                <sub>Loan amount</sub>
                <h2>£{currentModalData.loan_amount}</h2>
              </div>
              <div className={styles.ModalUserOtherInfoSub}>
                <div className={styles.ModalUserOtherInfoProduct}>
                  <sub>Product</sub>
                  <h3>{currentModalData.loan_type}</h3>
                </div>
                <div className={styles.ModalUserOtherInfoAppDate}>
                  <sub>Application date</sub>
                  <h3>{moment(currentModalData.date_created).format('DD-MM-YYYY')}</h3>
                </div>
                <div className={styles.ModalUserOtherInfoExpDate}>
                  <sub>Expiry date</sub>
                  <h3>{moment(currentModalData.expiry_date).format('DD-MM-YYYY')}</h3>
                </div>
              </div>
            </section>
            <span className={styles.ModalCloseIcon} onClick={handleModalClose}>&times;</span>
          </section>
          <section className={styles.ModalUserLoan}>
            <h3>Loan history</h3>
            <div className={styles.ModalUserLoanHistory}>
              <div className={styles.ModalUserLoanHistoryHeaders}>
                <h4>Start date</h4>
                <h4>End date</h4>
                <h4>Principal</h4>
                <h4>Interest</h4>
                <h4>Repayment</h4>
              </div>
              <div className={styles.ModalUserLoanHistoryDataContainer}>
                {currentModalData.loan_history?.map((loanItem, index) => {
                    return (
                      <div className={styles.ModalUserLoanHistoryData} key={index}>
                        <h4>{moment(loanItem.loan_started).format('DD MMM YYYY')}</h4>
                        <h4>{moment(loanItem.loan_ended).format('DD MMM YYYY')}</h4>
                        <h4>£{loanItem.principle}</h4>
                        <h4>£{loanItem.interest}</h4>
                        <h4>£{loanItem.principle + loanItem.interest}</h4>
                      </div>
                    )
                  })}
              </div>
            </div>
          </section>
        </div>
    </ReactModal>
  )
}