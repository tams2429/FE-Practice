import axios from "axios";

export const getApplications = async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/api/applications");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
