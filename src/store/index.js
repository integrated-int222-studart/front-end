import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
        {
          prodID: 2,
          prodName: "testProd1",
          manufacDate: "2021-08-25T00:00:00.000Z",
          imgurl: "https://source.unsplash.com/random",
          prodDescription: "product01",
          price: 500.5,
          ownerID: 1,
          productType: 1,
        },
        {
          prodID: 3,
          prodName: "testProd2",
          manufacDate: "2021-08-25T00:00:00.000Z",
          imgurl: "https://source.unsplash.com/random",
          prodDescription: "product02",
          price: 500.5,
          ownerID: 1,
          productType: 1,
        },
        {
          prodID: 4,
          prodName: "testProd3",
          manufacDate: "2021-08-25T00:00:00.000Z",
          imgurl: "https://source.unsplash.com/random",
          prodDescription: "product03",
          price: 500.5,
          ownerID: 1,
          productType: 1,
        },
      ],
  },
  mutations: {
    
  },
  actions: {
     
  }
});