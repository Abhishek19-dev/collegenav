import { Link, useNavigate } from 'react-router-dom'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react'
  import { useEffect, useState } from 'react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/actions/userAction'
  
  export default function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    const [password , setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toast = useToast()

    //handle register user
    const submitSignUpForm = async(e)=>{
      e.preventDefault()
      
      if(!name || !email || !password || !confirmPassword)
      {
         toast({
             title:"Please Fill All the fields",
             status:"warning",
             duration:5000,
             isClosable:true,
             position:"bottom"
         })
      }

      if(password != confirmPassword){
         toast({
             title:"Password and Confirm Password Do Not Match",
             status:"warning",
             duration:5000,
             isClosable:true,
             position:"bottom"
         })
      }
      

      const formData = new FormData();

      formData.append("name",name)
      formData.append("email",email)
      formData.append("password",password)
      formData.append("confirmPassword",confirmPassword)      
    dispatch(registerUser(formData))
 
 }

 const {loading,user,isRegistered} = useSelector((state)=> state.registerUser)
    const {isLoggedIn} = useSelector((state)=> state.loginUser)

    useEffect(()=>{
      if(isRegistered){
          navigate("/")
      }
      if(isRegistered && !isLoggedIn ){
          toast({
              title:"Account Created SuccessFully!",
              status:"success",
              duration:3000,
              isClosable:true,
              position:"bottom"
          })
      }
  },[isRegistered,navigate,isLoggedIn])
 

  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} w='60vw' py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up 
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to make your navigation easier!✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input onChange={(e)=> setName(e.target.value)} value={name} type="text" />
                  </FormControl>
                </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input value={password} onChange={(e)=> setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="confirm password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  onClick={submitSignUpForm}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to='/login' color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }