import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
});

export const getArgonautes = async () => {
  try{
    const argonautes = await API.get("argonautes");
    return argonautes.data;
  }catch (error){

  }
  
};

export const createArgonautes = async (argonaute) => {
   const newArgonaute = await API.post("argonautes",argonaute)
};

// export const createArgonautes = (argonaute) => {
//   axios({
//     method: "post",
//     url: "http://localhost:5000/argonautes",
//     data: argonaute
//   });
// };
