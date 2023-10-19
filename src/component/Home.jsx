import { Box, Flex, HStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import CardLayout from "./CardLayout";
import { useDispatch, useSelector } from "react-redux";
import fetchUser from "../redux/api";
import "./home.css";
import { userActions } from "../redux/userSlice";
const Home = () => {
     const userList = useSelector((state) => state.userReducer.userList);
     console.log(userList);
     const dispatch = useDispatch();

     useEffect(() => {
          setTimeout(() => {
               dispatch(fetchUser());
          }, 1500);
     }, []);

     const handleDeleteUserByEmail = (email) => {
          let updatedList = userList.filter((item) => item.email !== email);
          dispatch(userActions.updateUserList(updatedList));
     };

     return (
          <>
               <Box mt={3}>
                    {!userList.length ? (
                         <Box className="spinner">
                              <div className="bounce1"></div>
                              <div className="bounce2"></div>
                              <div className="bounce3"></div>
                         </Box>
                    ) : (
                         <Flex flexWrap="wrap" gap={3} justifyContent="center">
                              {userList.map((item) => (
                                   <CardLayout key={item.email} {...item} handleDeleteUserByEmail={handleDeleteUserByEmail} />
                              ))}
                         </Flex>
                    )}
               </Box>
          </>
     );
};
export default Home;
