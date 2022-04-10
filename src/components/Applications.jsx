import React, {useEffect, useState} from "react";
import axios from "axios";

//COMPONENTS
import SingleApplication from "./SingleApplication";
import { Button } from "../ui/Button/Button.jsx";
import { Modal } from "./Modal";

//STYLES
import styles from "../css/Applications.module.css";

const Applications = () => {
  
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [limitPerPage, setLimitPerPage] = useState(5);
  const [currentPagination, setCurrentPagination] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState({});

  useEffect(() => {
    const getApplicationTotalData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/applications");
        return setTotalData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getApplicationTotalData();
  }, []);

  useEffect(() => {
    const getApplicationData = async (currentPagination, limitPerPage) => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/api/applications?_page=${currentPagination}&_limit=${limitPerPage}`
        );
        return setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getApplicationData(currentPagination, limitPerPage);
  }, [currentPagination, limitPerPage]);

  const handleBtnClick = () => {
    if ((currentPagination + 1) >= (totalData.length) / limitPerPage) {
      setLoadMore(false);
    }
    return setCurrentPagination(currentPagination + 1);
  };

  const handleModalOpen = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/applications/${id}`);
      setCurrentModalData(data);
    } catch (error) {
      console.log(error);
    }
    return setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.Applications}>
      {data && data.map((user, index) => {
        return <SingleApplication key={index} application={user} onClick={() => handleModalOpen(user.id)} />
      })}
      <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose} currentModalData={currentModalData}/>
      <Button onClick={handleBtnClick} disabled={!loadMore}>Load more</ Button>
    </div>
  );
};

export default Applications;
