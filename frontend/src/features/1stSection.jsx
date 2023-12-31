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
import React, { useEffect, useState } from "react";
import { UilMicrophone } from "@iconscout/react-unicons";
import microphone from "../images/microphone.png";
import Speaking from "./Speaking";
import { useDispatch, useSelector } from "react-redux";
import { RunPythonAction } from "../redux/actions/runPythonAction";
import Directions from "./Directions";
import "./1stSection.css";
const FirstSection = () => {
  const [speakNow, setSpeakNow] = useState(false);
  const [showDirection, setShowDirection] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    // Set animate to true after the component is mounted to trigger the animation
    setAnimate(true);

    // Set animate to false after the animation duration
    const animationTimeout = setTimeout(() => {
      setAnimate(false);
    }, 500); // Adjust the duration to match your animation duration

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(animationTimeout);
  }, []);

  const handleOnSpeak = () => {
    dispatch(RunPythonAction);
    setSpeakNow(true);
    setShowMenu(true);
  };
  const { loading, data, isGetData } = useSelector((state) => state.runPython);

  useEffect(() => {
    if (isGetData) {
      console.log("inside get data");
      setShowDirection(true);
    }
  }, [isGetData, showDirection]);
  return (
    <>
      {/* <Box bg='red' w='100%'  h={{ base: `calc(100% - 25vw)`,md: `calc(100% - 18vw)`,lg: `calc(100% - 6vw)`}}> */}
      <Box
        bg="#EFF8E7"
        w="100%"
        h={{ base: "150vh", md: "110vh" }}
        display={{ base: "block", lg: "flex" }}
        flexDirection="row"
      >
        <Box
          className={animate ? "slide-in-element" : ""}
          order={{ lg: "1" }}
          mb={{ base: "3vw", lg: "0vw" }}
          w={{ lg: "40%" }}
          bg="#CFEBB7"
          h={{ base: "60%", lg: "100%" }}
        >
          <Image
            p="2vw"
            w="100%"
            h="80%"
            src="https://www.jiit.ac.in/jiit/sssic/images/jiit.png"
            alt="jiit Image"
          />
        </Box>
        {!showMenu ? (
          <Box
            w={{ base: "100%", lg: "65%" }}
            order={{ lg: "0" }}
            h={{ lg: "100%" }}
          >
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
              cabin an effortless journey, unlocking the possibilities of
              seamless exploration and discovery.
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
                fontFamily="Nunito"
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
                  <IconButton
                    onClick={handleOnSpeak}
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                  >
                    <Image w="6vw" src={microphone}></Image>
                  </IconButton>
                </InputRightElement>
              </Tooltip>
            </InputGroup>
          </Box>
        ) : speakNow && !showDirection ? (
          <Box
            transition="transform 0.5s ease-in-out"
            transform={speakNow && !showDirection  ? "translateX(0)" : "translateX(100%)"}
            w={{ base: "100%", lg: "65%" }}
            h={{ lg: "100%" }}
          >
            <Speaking
              setShowMenu={setShowMenu}
              speakNow={speakNow}
              setSpeakNow={setSpeakNow}
            />
          </Box>
        ) : (
          <Box
            w={{ base: "100%", lg: "65%" }}
            order={{ lg: "0" }}
            h={{ base: "100%", lg: "100%" }}
          >
            <Directions
              setSpeakNow={setSpeakNow}
              setShowDirection={setShowDirection}
              data={data}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default FirstSection;
