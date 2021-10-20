import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

async function busca(url, setData) {
  const response = await api.get(url);
  setData(response.data);
}

/*
const busca = async () => {
    const response = await api.get(url);
    setData(response.data);
}
*/

export { api, busca };
