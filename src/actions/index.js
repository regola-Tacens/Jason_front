import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
});

export const getArgonautes = async () => {
  try {
    const argonautes = await API.get("argonautes");
    return argonautes.data;
  } catch (error) {
    console.log(error);
  }
};

export const createArgonaute = async (argonaute, setTrigger) => {
  try {
    const newArgonaute = await API.post("argonautes", argonaute);
    setTrigger(true);
  } catch (error) {
    console.log(error);
  }
};

export const deleteArgonaute = async (id, setTrigger) => {
  try {
    await API.delete(`argonautes/${id}`);
    setTrigger(true);
  } catch (error) {
    console.log(error);
  }
};
