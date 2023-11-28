 import { Box, IconButton, Image, Stack, Text, Tooltip, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'; 
 import speakAgain from '../images/speakAgain.png'
 const Directions = () =>{
return (
    <>
    <Box display='flex' flexDirection='column' alignItems='center'>
       <Text fontFamily='Nunito' fontWeight={500} mt={{lg:'3vw'}} fontSize={{base : '6vw',lg:'2vw'}}>
        From Staircase4 , take left then right , then straight , 1st room
       </Text>
       <Tooltip hasArrow label="Speak Again" bg="green">
       <IconButton mt='2vw' border='2px solid green' borderRadius='full' w={{base:'12vw',lg:'5vw'}} h={{base:'12vw',lg:'5vw'}} p='1vw' colorScheme='transparent'>
       <Image  src={speakAgain} alt='speak again'></Image>
       </IconButton>
       </Tooltip>
       <Text fontFamily='Nunito' mt='2vw' fontSize='2vw' textDecoration='underline' fontWeight={800}>Our CheckPoints</Text>
       <Wrap mt='1vw' ml='8vw' spacing={{base:'25vw',lg:'1vw'}} w='100%' h='50vh'>
        <WrapItem display='flex' flexDirection='column' alignItems='center' w={{base:'80%',lg:'40%'}} h={{base:'25vw',lg:'18vw'}}>
            <Image src='https://cache.careers360.mobi/media/colleges/reviews/2023/1/7/187368/jiit.png'></Image>
            <Text fontFamily='Nunito' fontSize={{base:'5vw',lg:'1.5vw'}}>Staircase 1 (Left of cafe)</Text>
        </WrapItem>
        <WrapItem display='flex' flexDirection='column' alignItems='center' w={{base:'80%',lg:'40%'}} h='18vw'>
            <Image src='https://cache.careers360.mobi/media/colleges/reviews/2023/1/7/187368/jiit.png'></Image>
            <Text fontFamily='Nunito' fontSize={{base:'5vw',lg:'1.5vw'}}>Staircase 2 (Front of cafe)</Text>
        </WrapItem>
        <WrapItem display='flex' flexDirection='column' alignItems='center' w={{base:'80%',lg:'40%'}} h='18vw'>
            <Image src='https://cache.careers360.mobi/media/colleges/reviews/2023/1/7/187368/jiit.png'></Image>
            <Text fontFamily='Nunito' fontSize={{base:'5vw',lg:'1.5vw'}}>Staircase 3 (right of Mph)</Text>
        </WrapItem>
        <WrapItem display='flex' flexDirection='column' alignItems='center' w={{base:'80%',lg:'40%'}} h='18vw'>
            <Image src='https://cache.careers360.mobi/media/colleges/reviews/2023/1/7/187368/jiit.png'></Image>
            <Text fontFamily='Nunito' fontSize={{base:'5vw',lg:'1.5vw'}}>Staircase 4 (near Saraswati Mata Mandir)</Text>
        </WrapItem>
       </Wrap>
    </Box>
    </>
)
};
 
export default Directions