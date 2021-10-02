import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
});

export const getArgonautes = async () => {
  try{
    const argonautes = await API.get("argonautes");
    // console.log(argonautes.data);
    return argonautes.data;
  }catch (error){

  }
  
  // console.log(argonautes.data);
  
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
