import { Box, Button, Container, Flex, Heading, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcManager } from 'react-icons/fc';

const Card = ({ heading, description, icon }) => (
  <Box maxW={{ base: 'full', md: '275px' }} w="full" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
    <Stack align="start" spacing={2}>
      <Flex w={16} h={16} align="center" justify="center" color="white" rounded="full" bg={useColorModeValue('gray.100', 'gray.700')}>
        {icon}
      </Flex>
      <Box mt={2}>
        <Heading fontFamily='Nunito' size="md">{heading}</Heading>
        <Text fontFamily='Nunito' mt={1} fontSize="sm">
          {description}
        </Text>
      </Box>
      {/* <Button variant="link" colorScheme="blue" size="sm">
        Learn more
      </Button> */}
    </Stack>
  </Box>
);

const AboutUsSection = () => (
  <Box p={4}>
    <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
      <Heading fontFamily='Nunito' fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="bold">
        College Navigation System
      </Heading>
      <Text fontFamily='Nunito' color="gray.600" fontSize={{ base: 'sm', sm: 'lg' }}>
        Experience our innovative navigation system designed to save you time, provide the fastest routes, locate specific areas, ensure easy navigation, feature an interactive UI, and include a speaking module for a seamless experience.
      </Text>
    </Stack>

    <Container maxW="5xl" mt={12}>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        <Card heading="Time-saving Routes" icon={<Icon as={FcAssistant} w={10} h={10} />} description="Discover time-saving routes to your classes, offices, and other key locations on campus." />
        <Card heading="Interactive Speaking Module" icon={<Icon as={FcManager} w={10} h={10} />} description="Enjoy an interactive speaking module that responds to voice commands for a hands-free navigation experience." />
        <Card heading="Efficient Management" icon={<Icon as={FcDonate} w={10} h={10} />} description="Efficiently manage your time and resources with tools designed to enhance your overall college experience." />
        <Card heading="Location-Specific Assistance" icon={<Icon as={FcManager} w={10} h={10} />} description="Get location-specific assistance, guiding you to facilities like libraries, cafeterias, and recreational areas with ease." />
        <Card heading="Personalized Recommendations" icon={<Icon as={FcManager} w={10} h={10} />} description="Receive personalized recommendations on study spots, nearby amenities, and events tailored to your preferences and schedule." />
      </Flex>
    </Container>
  </Box>
);

export default AboutUsSection;
