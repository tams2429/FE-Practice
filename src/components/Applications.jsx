import React, {useEffect, useState} from "react";
import axios from "axios";
import SingleApplication from "./SingleApplication";
import { getSingleApplicationFixture } from "../__fixtures__/applications.fixture";
import styles from "../css/Applications.module.css";

const Applications = () => {
  const applications = getSingleApplicationFixture;
  
  const [data, setData] = useState(null);

  useEffect(async () => {
    try {
      const {data} = await axios.get('http://localhost:3001/api/applications?_page=2&_limit=5')
      console.log(data)
      return setData(data)
    } catch (error) {
      console.log(error)
    }

  }, [])

  return (
    <div className={styles.Applications}>
      {data && data.map((user, index) => {
        return <SingleApplication key={index} application={user} />
      })}
    </div>
  );
};

export default Applications;
