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

export const createArgonautes = async (argonaute, setTrigger) => {

  try {
    // TODO
    // si l'argonaute est le 49 eme, on enregistre : "Jason, beau, vaillant et courageux"
    // et on enregistre dans la foulée un 50ème argonaute :"julien : chanceux !"
    
    const newArgonaute = await API.post("argonautes", argonaute);
    setTrigger(true);
  } catch (error) {
    console.log(error)
  }

};

