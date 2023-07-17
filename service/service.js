const API_URL = "https://647f22a2c246f166da9024a8.mockapi.io/phone";

//axios product API
let ProductSev = {
  getList: () => {
    return axios({
      url: "https://648f143b75a96b664444aba0.mockapi.io/product",
      method: "GET",
    });
  },
};
//axios Buy SP api
let buyCratSev = {
  getCart: () => {
    return axios({
      url: API_URL,
      method: "GET",
    });
  },
  getById: (id) => {
    return axios({
      url: `${API_URL}/${id}`,
      method: "GET",
    });
  },
  Create: (cart) => {
    return axios({
      url: API_URL,
      method: "POST",
      data: cart,
    });
  },
  Update: (id, cart) => {
    return axios({
      url: `${API_URL}/${id}`,
      method: "PUT",
      data: cart,
    });
  },
  Delete: (id) => {
    return axios({
      url: `${API_URL}/${id}`,
      method: "DELETE",
    });
  },
};
