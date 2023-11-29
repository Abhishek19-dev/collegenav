import React, { useState } from "react";
import logoImg from "../images/logo.png";
import {
  Button,
  Divider,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  Image,
} from "@chakra-ui/react";
import { UilBars } from "@iconscout/react-unicons";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { color } from "framer-motion";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import {
  FiChevronDown,
} from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/userAction";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(logoutUser)
  }
  const {loading , user:LoggedInUser , isLoggedIn} = useSelector((state)=> state.loginUser)
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
        <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
              <Avatar bg='green' size={'sm'} name={LoggedInUser && LoggedInUser.name} />
                <VStack
                mr='2vw'
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{LoggedInUser && LoggedInUser.name}</Text>
                  <Text fontSize="xs" color="gray.600">
                   {LoggedInUser && LoggedInUser.email}
                  </Text>
                </VStack>
                <Box mr='2vw' display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem><Button onClick={handleLogout} color='green' colorScheme="transparent">SignOut</Button></MenuItem>
            </MenuList>
          </Menu>
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
           
           {/* Profile */}
           {/* <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu> */}

          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
      <Divider />
    </>
  );
};

export default Navbar;
