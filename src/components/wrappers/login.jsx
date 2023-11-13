import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  VStack,
  Text,
  InputGroup,
  InputLeftElement,
  Button,
  Input,
  Link,
} from '@chakra-ui/react'
import { IconMailFilled, IconLock } from '@tabler/icons-react'

function Login() {
  const [input, setInput] = useState({})
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // check if password and confirm password is same
    if (input.password !== input.confirmPassword) {
      alert('Password tidak sama')
      return
    }
    console.log('submit')
    console.log(input)
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
        }}
      >
        <VStack>
          <Text fontSize="3xl" textAlign="center">
            Waralobby
          </Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IconMailFilled />
              </InputLeftElement>
              <Input type="email" name="email" onChange={handleChange} />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IconLock />
              </InputLeftElement>
              <Input type="password" name="password" onChange={handleChange} />
            </InputGroup>
          </FormControl>

          {/* <Text textAlign="right" alignSelf="end">
            Lupa Password?
          </Text> */}
          <Button mt={2} w="full">
            Submit
          </Button>
          <Text mt="2">
            Belum ada akun?{' '}
            <Link
              color="blue.500"
              onClick={() => {
                navigate('/register')
              }}
            >
              Daftar disini
            </Link>
          </Text>
        </VStack>
      </form>
    </>
  )
}

export default Login
