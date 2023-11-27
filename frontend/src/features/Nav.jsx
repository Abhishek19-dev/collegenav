import React, { useState } from "react";
import logoImg from "../images/logo.png";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { UilBars } from "@iconscout/react-unicons";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { color } from "framer-motion";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  return (
    <>
      <Box
        w="100%"
        h={{ base: "25vw", md: "18vw", lg: "6vw" }}
      //   pl="5vw"
        display="flex"
        flexDirection="row"
      justifyContent= 'space-between'
      //   bg='blue'
        alignItems="center"
      >
        <Image
          h="100%"
          w={{base:'40vw' ,lg:'15vw'}}
         //  boxSize={{ base: "40vw", sm: "9vw" }}
          src={logoImg}
          alt="College nav"
        ></Image>
        <Box
          display={{ base: "none", md: "flex" }}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text _hover={{ color: 'green' }} fontFamily='Nunito' px="3vw">Home</Text>
          <Text _hover={{ color: 'green' }} fontFamily='Nunito' px="3vw">About Us</Text>
          <Text  _hover={{ color: 'green' }} fontFamily='Nunito' px="3vw">Contact</Text>
        </Box>
        <Button
          display={{ base: "none", sm: "block" }}
          leftIcon={<UilSignOutAlt />}
          mt={2}
          mr='4vw'
          colorScheme="green"
          variant="outline"
        >
          Logout
        </Button>
        <IconButton
          display={{ base: "block", sm: "none" }}
          onClick={onOpen}
          bg="transparent"
          color="green" 
          _hover={{ color: "lightgreen" , bg:'transparent' }}
        >
          <UilBars />
        </IconButton>
        <Drawer  size='xs' placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay  />
        <DrawerContent   h='150vw'>
        {/* <DrawerContent mt='25vw'  h='150vw'> */}
        {/* <DrawerContent mt='25vw'  h='100%'> */}
          <DrawerHeader borderBottomWidth='1px' fontFamily='Nunito' fontWeight={500}>Welcome To JIIT , Noida</DrawerHeader>
          <DrawerBody>
          <Text _hover={{ color: 'green' }} fontFamily='Nunito' py='4vw'>Home</Text>
           <Text _hover={{ color: 'green' }} fontFamily='Nunito' py='4vw'>About Us</Text>
           <Text _hover={{ color: 'green' }} fontFamily='Nunito' py='4vw'>Contact</Text>
           <Divider />
           <Button
          leftIcon={<UilSignOutAlt />}
          mt='10vw'
          colorScheme="green"
          variant="outline"
          fontFamily='Nunito'
          fontWeight={400}
        >
          Logout
        </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
      <Divider />
    </>
  );
};

export default Navbar;
