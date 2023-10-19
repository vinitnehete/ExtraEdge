import { Box, Card, CardBody, CardFooter, HStack, Heading, Image, Text, VStack, useDisclosure } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { AiOutlinePhone, AiOutlineMail, AiFillHeart, AiOutlineHeart, AiOutlineDelete, AiOutlineEdit, AiOutlineGlobal } from "react-icons/ai";
import ModalEdit from "./ModalEdit";

const CardLayout = ({ name, email, phone, website, username, handleDeleteUserByEmail }) => {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const [isFav, setFav] = useState(false);
     const [openModal, setOpenModal] = useState(false);
     return (
          <>
               <Card w="xs">
                    <CardBody bg={"blackAlpha.100"} p={0}>
                         <Image m={"auto"} maxW={"50%"} src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg`} alt="user avatar" borderRadius="lg" />
                    </CardBody>
                    <CardBody>
                         <VStack align>
                              <Heading size="md">{`${name}`}</Heading>
                              <HStack>
                                   <AiOutlineMail /> <Text>{`${email}`}</Text>
                              </HStack>
                              <HStack>
                                   <AiOutlinePhone /> <Text>{`${phone}`}</Text>
                              </HStack>
                              <HStack>
                                   <AiOutlineGlobal /> <Text>{`${website}`}</Text>
                              </HStack>
                         </VStack>
                    </CardBody>
                    <CardFooter bg={"blackAlpha.200"} justifyContent="space-evenly" gap={3}>
                         <Box onClick={() => setFav(!isFav)} cursor="pointer">
                              {isFav ? <AiFillHeart color="red" /> : <AiOutlineHeart color="red" />}
                         </Box>
                         <Box
                              cursor="pointer"
                              onClick={() => {
                                   setOpenModal(!openModal);
                                   onOpen();
                              }}
                         >
                              <AiOutlineEdit />
                         </Box>
                         <Box cursor="pointer" onClick={() => handleDeleteUserByEmail(email)}>
                              <AiOutlineDelete />
                         </Box>
                    </CardFooter>
               </Card>
               {openModal && <ModalEdit isOpen={isOpen} onOpen={onOpen} onClose={onClose} setOpenModal={setOpenModal} userData={{ name, email, phone, website }} />}
          </>
     );
};
export default CardLayout;
