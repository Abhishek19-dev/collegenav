import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/actions/userAction'
  
  export default function Login() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const toast = useToast()
    const dispatch = useDispatch()
     const navigate = useNavigate()

    const submitLoginUpForm = ()=>{
      if(!email || !password){
          toast({
              title:"Please Fill All the fields",
              status:"warning",
              duration:5000,
              isClosable:true,
              position:"bottom"
          })
      }
      else if (!email.endsWith('@mail.jiit.ac.in')) {
        toast({
          title: 'Invalid Email Format',
          description: 'Please Login With College Mail',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'bottom',
        });
      } else {
        dispatch(loginUser(email, password));
      }
  }

  const {loading , user:LoggedInUser , isLoggedIn} = useSelector((state)=> state.loginUser)

  useEffect(()=>{
    console.log("log",isLoggedIn)
    // if(isLoggedIn && !isLoggedInRef.current){
    if(isLoggedIn){
        // isLoggedInRef.current = true
        // isLoggedInRef.current = true
        navigate("/")
        toast({
            title:"Login Successfully",
            status:"success",
            duration:5000,
            isClosable:true,
            position:"bottom"
        })
    }
  },[isLoggedIn])

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to CollegeNav</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to make your college  <Text color={'blue.400'}>Navigation easier</Text> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}  onClick = {submitLoginUpForm}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }