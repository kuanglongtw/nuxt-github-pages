import axios from "axios";
const BASE_URL = "https://mysterious-stole-foal.cyclic.app";
const getProjects = async () => {
  const res = await axios.get(BASE_URL + "/projects");
  return res.data.data;
};
export {
  getProjects as g
};
//# sourceMappingURL=index-0ac16786.js.map
