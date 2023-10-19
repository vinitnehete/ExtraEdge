import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { userActions } from "../redux/userSlice";
const ModalEdit = ({ isOpen, onOpen, onClose, setOpenModal, userData }) => {
     const initialRef = React.useRef(null);
     const finalRef = React.useRef(null);
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [phone, setPhone] = useState("");
     const [website, setWebsite] = useState("");
     const dispatch = useDispatch();
     const userList = useSelector((state) => state.userReducer.userList);

     useEffect(() => {
          if (isOpen) {
               setEmail(userData.email);
               setName(userData.name);
               setPhone(userData.phone);
               setWebsite(userData.website);
          }
     }, [userData]);

     const handleUserFormEdit = () => {
          //   console.log("--------", userList);
          let validName = validator.isLength(name, { min: 3 });
          let validEmail = validator.isEmail(email);
          let validWebsite = validator.isEmail(website);
          let validPhone = validator.isEmail(phone);
          if (!validName) {
               alert("Name should be atleast length 3 ");
          } else if (!validEmail) {
               alert("Please enter a valid email");
          } else {
               let editList = userList.map((items, index) => (items.email === userData.email ? { ...items, name, email, phone, website } : items));
               dispatch(userActions.updateUserList(editList));
               onClose();
               setOpenModal(false);
          }
     };

     return (
          <>
               <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={() => {
                         onClose();
                         setOpenModal(false);
                    }}
               >
                    <ModalOverlay />
                    <ModalContent>
                         <ModalHeader>Edit User's Details</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody pb={6}>
                              <FormControl>
                                   <FormLabel>name</FormLabel>
                                   <Input
                                        value={name}
                                        onChange={(e) => {
                                             setName(e.target.value);
                                        }}
                                        placeholder="name"
                                        required
                                   />
                              </FormControl>

                              <FormControl mt={4}>
                                   <FormLabel>email</FormLabel>
                                   <Input
                                        value={email}
                                        onChange={(e) => {
                                             setEmail(e.target.value);
                                        }}
                                        type="email"
                                        placeholder="email"
                                        required
                                   />
                              </FormControl>

                              <FormControl mt={4}>
                                   <FormLabel>phone</FormLabel>
                                   <Input
                                        value={phone}
                                        onChange={(e) => {
                                             setPhone(e.target.value);
                                        }}
                                        type="text"
                                        placeholder="phone"
                                        required
                                   />
                              </FormControl>

                              <FormControl mt={4}>
                                   <FormLabel>website</FormLabel>
                                   <Input
                                        value={website}
                                        onChange={(e) => {
                                             setWebsite(e.target.value);
                                        }}
                                        type="text"
                                        placeholder="website"
                                        required
                                   />
                              </FormControl>
                         </ModalBody>

                         <ModalFooter>
                              <Button
                                   onClick={() => {
                                        onClose();
                                        setOpenModal(false);
                                   }}
                              >
                                   Cancel
                              </Button>
                              <Button colorScheme="blue" mr={3} onClick={handleUserFormEdit}>
                                   Ok
                              </Button>
                         </ModalFooter>
                    </ModalContent>
               </Modal>
          </>
     );
};
export default ModalEdit;
