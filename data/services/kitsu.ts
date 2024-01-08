import axios from "axios";

export const getAnimeData = async (page: number) => {
  const response = await axios.get(`https://kitsu.io/api/edge/anime/${page}`);
  return response.data;
};

export const api = {
  getAnimeData,
};
