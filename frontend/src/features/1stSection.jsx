import {
  Box,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Tooltip,
  calc,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { UilMicrophone } from "@iconscout/react-unicons";
import microphone from "../images/microphone.png";
import Speaking from "./Speaking";
import { useDispatch } from "react-redux";
import { RunPythonAction } from "../redux/actions/runPythonAction";

const FirstSection = () => {
    const [speakNow , setSpeakNow] = useState(false)
    const dispatch = useDispatch()

    const handleOnSpeak = ()=>{
        dispatch(RunPythonAction)
        setSpeakNow(true)
    }
  return (
    <>
      {/* <Box bg='red' w='100%'  h={{ base: `calc(100% - 25vw)`,md: `calc(100% - 18vw)`,lg: `calc(100% - 6vw)`}}> */}
      <Box
        bg="#EFF8E7"
        w="100%"
        h={{ base: "115vh", md: "90vh" }}
        display={{ base: "block", lg: "flex" }}
        flexDirection="row"
      >
          <Box order={{lg:'1'}} mb={{base:'3vw' , lg:'0vw'}} w={{ lg: "35%" }} bg="#CFEBB7" h={{base:'60%', lg: "100%" }}>
          <Image
            p="2vw"
            w="100%"
            h="80%"
            src="https://www.jiit.ac.in/jiit/sssic/images/jiit.png"
            alt="jiit Image"
          />
        </Box>
        {
            !speakNow ?   <Box w={{ base: "100%", lg: "65%" }} order={{lg:'0'}} h={{  lg: "100%" }}>
            <Text
              ml={{ base: "4vw", lg: "4vw" }}
              mt={{ lg: "6vw" }}
              pt={{ base: "2vw", lg: "0vw" }}
              fontSize={{ base: "3xl", lg: "6xl" }}
              fontWeight={600}
              fontFamily="Nunito"
            >
              Welcome to JIIT: Your Campus Companion
            </Text>
            <Text
              ml={{ base: "4.5vw", lg: "4vw" }}
              fontFamily="Nunito"
              fontSize={{ base: "md", lg: "2xl" }}
              mt={{ base: "1.5vw", lg: "2vw" }}
              fontWeight={500}
            >
              Where I, your AI guide, make navigating through classes , teachers
              cabin an effortless journey, unlocking the possibilities of seamless
              exploration and discovery.
            </Text>
            <InputGroup
              bg="#EFF8E7"
              w={{ base: "90%", lg: "80%" }}
              ml={{ base: "4vw", lg: "4vw" }}
              mt={{ base: "4vw", lg: "4vw" }}
            >
              <Input
                p="2vw"
                bg="white"
                borderRadius="25vw"
                placeholder="Write or speak your classroom or teacher's name"
                fontFamily='Nunito'
                fontWeight={400}
                fontSize={{ base: "0.8rem", lg: "1.2rem" }} // Adjust the font size for different screen sizes
              />
              <Tooltip hasArrow label="Speak Now" bg="green">
                <InputRightElement
                  pl="1vw"
                  borderLeft="2px solid green"
                  mt={{ lg: "0.9vw" }}
                  mr={{ base: "1vw", lg: "1vw" }}
                >
                  <IconButton onClick={handleOnSpeak} bg="transparent" _hover={{ bg: "transparent" }}>
                    {/* <UilMicrophone color="green.500" /> */}
                    <Image w="6vw" src={microphone}></Image>
                  </IconButton>
                </InputRightElement>
              </Tooltip>
            </InputGroup>
          </Box> :
          <Box w={{ base: "100%", lg: "65%" }} h={{  lg: "100%" }}>
            <Speaking speakNow={speakNow} setSpeakNow={setSpeakNow} />
            </Box>
        }
      
      
      </Box>
    </>
  );
};

export default FirstSection;
