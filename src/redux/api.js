import { userActions } from "./userSlice";
import axios from "axios";
const fetchUser = () => {
     return async (dispatch) => {
          try {
               const URL = `https://jsonplaceholder.typicode.com/users`;
               const user = await axios.get(URL);
               const result = await user.data;
               //    console.log("result---------", result);
               dispatch(userActions.updateUserList(result));
          } catch (err) {
               console.log(err);
          }
     };
};
export default fetchUser;
