import axios from "axios";
import {environment} from "../environment/environment"

// const serverApi = "https://video-meeting-backend2022.herokuapp.com/api";

export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${environment.BACKEND}/room-exists/${roomId}`);
  return response.data;
};

export const getTURNCredentials = async () => {
  const response = await axios.get(`${environment.BACKEND}/get-turn-credentials`);
  return response.data;
};
