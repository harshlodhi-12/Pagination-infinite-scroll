import axios from "axios";

//for pagination using tanstack 

//  export const getAllProducts = async (limit,page=1) => {
//     try {
     
//       let res = await axios.get(
//         `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
//       );
//       return res.data;
//     } catch (error) {
//       console.log("error in api", error);
//     }
//   };


 export const getAllProducts = async (limit,pageParam) => {
    try {
     console.log("page param-->",pageParam)
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`,
      );
      return res.data;
    } catch (error) {
      console.log("error in api", error);
    }
  };//for infinite scroll