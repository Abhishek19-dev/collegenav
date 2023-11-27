import React from "react";
import Lottie from "react-lottie";
import animationData from "../images/listening.json";
import { Box, Button, Text } from "@chakra-ui/react";
import { UilStopwatchSlash } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from "react-redux";
import { RUN_PYTHON_CODE_RESET } from "../redux/actionType";

const Speaking = ({speakNow , setSpeakNow}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // rendererSettings : {
    //     preserveAspectRatio : "xMidYMid Slice"
    // },
  };
  const dispatch = useDispatch()
  const handleStopSpeak = ()=>{
    setSpeakNow(false)
     dispatch({
        type : RUN_PYTHON_CODE_RESET
     })
  }
  const {loading , isGetData , data} = useSelector((state)=> state.runPython) 
  return (
    <>
    <Box w='100%' h='100%' alignItems='center' display='flex'  flexDirection='column'>
     <Text fontFamily='Nunito' fontSize='4xl' mt='5vw' fontWeight={400}>Listening ......</Text>
     <Box mt='1vw'>
     <Lottie
        options={defaultOptions}
        height='25vw'
        width='25vw'
        style={{ marginBottom: 15, marginLeft: 0 }}
      />
     </Box>
     {isGetData && <Text fontFamily='Nunito' ml={{base:'10vw',md:'5vw'}} mb={{base:'8vw',md:'2vw'}} fontSize='lg' mt={{base:'5vw',md:'2vw'}} fontWeight={400}>{data}</Text>}
   <Button  _hover={{bg:'#ea5252'}} onClick={handleStopSpeak} bg='red' textColor='white' leftIcon={<UilStopwatchSlash />} fontFamily='Nunito' fontWeight={400} >
    Stop It!
   </Button>
    </Box>
      
    </>
  );
};

export default Speaking;
