import axios from 'file://C:/Users/CYL/Desktop/%E5%85%89%E9%9A%86/node_modules/axios/index.js';

const BASE_URL = "https://mysterious-stole-foal.cyclic.app";
const getProjects = async () => {
  const res = await axios.get(BASE_URL + "/projects");
  return res.data.data;
};

export { getProjects as g };
//# sourceMappingURL=index-0ac16786.mjs.map
