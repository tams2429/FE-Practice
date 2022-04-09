import React, {useEffect, useState} from "react";
import axios from "axios";

//COMPONENTS
import SingleApplication from "./SingleApplication";
import { Button } from "../ui/Button/Button.jsx";

//STYLES
import styles from "../css/Applications.module.css";

const Applications = () => {
  
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [limitPerPage, setLimitPerPage] = useState(5);
  const [currentPagination, setCurrentPagination] = useState(1);

  useEffect(async () => {
    try {
      const {data} = await axios.get(`http://localhost:3001/api/applications`)
      console.log('total data length is:', totalData.length)
      return setTotalData(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(async () => {
    try {
      const {data} = await axios.get(`http://localhost:3001/api/applications?_page=${currentPagination}&_limit=${limitPerPage}`)
      console.log(data)
      return setData(data)
    } catch (error) {
      console.log(error)
    }

  }, [currentPagination])

  //Create a function to update pagination and refetch the data 
  //When pagination goes to 20 return to 1 or disable button
  //Add a test with dummy data when data goes out of bounds, pagination resets to 1
  const handleClick = () => {
    if ((currentPagination + 1) === (totalData.length) / limitPerPage) {
      setLoadMore(false)
    }
    return setCurrentPagination(currentPagination + 1)
  }

  return (
    <div className={styles.Applications}>
      {data && data.map((user, index) => {
        return <SingleApplication key={index} application={user} />
      })}
      <Button onClick={handleClick} disabled={!loadMore}>Load more</ Button>
    </div>
  );
};

export default Applications;
