import React, {useEffect, useState} from "react";
import axios from "axios";

//COMPONENTS
import SingleApplication from "./SingleApplication";
import { Button } from "../ui/Button/Button.jsx";

//STYLES
import styles from "../css/Applications.module.css";

const Applications = () => {
  
  const [data, setData] = useState(null);
  const [currentPagination, setCurrentPagination] = useState(2);

  useEffect(async () => {
    try {
      const {data} = await axios.get(`http://localhost:3001/api/applications?_page=${currentPagination}&_limit=5`)
      console.log(data)
      return setData(data)
    } catch (error) {
      console.log(error)
    }

  }, [])

  //Create a function to update pagination and refetch the data 
  //When pagination goes to 20 return to 1 or disable button
  // handleClick = () => {

  // }

  return (
    <div className={styles.Applications}>
      {data && data.map((user, index) => {
        return <SingleApplication key={index} application={user} />
      })}
      <Button>Load more</ Button>
    </div>
  );
};

export default Applications;
