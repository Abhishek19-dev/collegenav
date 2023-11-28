 import { Box, IconButton, Image, Stack, Text, Tooltip, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'; 
 import speakAgain from '../images/speakAgain.png'
 import staircase1 from "../images/staircase1.jpeg"
 import staircase2 from "../images/staircase2.jpeg"
 import staircase3 from "../images/staircase3.jpeg"
 import staircase4 from "../images/staircase4.jpeg"
import { useDispatch } from 'react-redux';
import { RUN_PYTHON_CODE_RESET } from '../redux/actionType';
 const Directions = ({data , setShowDirection , setSpeakNow}) =>{
    const dispatch = useDispatch()
    const handleSpeakAgain = ()=>{
       setShowDirection(false)
       setSpeakNow(true)
       dispatch({
        type : RUN_PYTHON_CODE_RESET
       })
    }
return (
    <>
    <Box display='flex' flexDirection='column' alignItems='center' h='58vw' >
       <Text fontFamily='Nunito' fontWeight={500} mt={{lg:'3vw'}} fontSize={{base : '6vw',lg:'2vw'}}>
        {/* From Staircase4 , take left then right , then straight , 1st room */}
         {data}
       </Text>
       <Tooltip hasArrow label="Speak Again" bg="green">
       <IconButton onClick={handleSpeakAgain} mt='2vw' border='2px solid green' borderRadius='full' w={{base:'12vw',lg:'5vw'}} h={{base:'12vw',lg:'5vw'}} p='1vw' colorScheme='transparent'>
       <Image  src={speakAgain} alt='speak again'></Image>
       </IconButton>
       </Tooltip>
       <Text fontFamily='Nunito' mt='2vw' fontSize='2vw' textDecoration='underline' fontWeight={800}>Our CheckPoints</Text>
       <Wrap mt='1vw' ml='8vw' spacing={{base:'25vw',lg:'1vw'}} w='100%' h='50vh'>
        <WrapItem display='flex' flexDirection='column' alignItems='center' w={{base:'80%',lg:'40%'}} h={{base:'25vw',lg:'18vw'}}>
            <Image w='85%' h='85%'  src={staircase1}></Image>
            <Text fontFamily='Nunito' fontSize={{base:'5vw',lg:'1.5vw'}}>Staircase 1 (Saraswati mata mandir)</Text>
        </WrapItem>
        <WrapItem display='flex' flexDirection='column' alignItems='center' w={{base:'80%',lg:'40%'}} h='18vw'>
            <Image w='85%' h='85%'  src={staircase2}></Image>
            <Text fontFamily='Nunito' fontSize={{base:'5vw',lg:'1.5vw'}}>Staircase 2 (left Of MPH)</Text>
        </WrapItem>
        <WrapItem display='flex' flexDirection='column' alignItems='center' w={{base:'80%',lg:'40%'}} h='18vw'>
            <Image w='85%' h='85%'  src={staircase3}></Image>
            <Text fontFamily='Nunito' fontSize={{base:'5vw',lg:'1.5vw'}}>Staircase 3 (Front of Cafe)</Text>
        </WrapItem>
        <WrapItem display='flex' flexDirection='column' alignItems='center' w={{base:'80%',lg:'40%'}} h='18vw'>
            <Image w='85%' h='85%'  src={staircase4}></Image>
            <Text fontFamily='Nunito' fontSize={{base:'5vw',lg:'1.5vw'}}>Staircase 4 (right side of Cafe)</Text>
        </WrapItem>
       </Wrap>
    </Box>
    </>
)
};
 
export default Directions