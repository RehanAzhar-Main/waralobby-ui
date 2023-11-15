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
import axios from 'axios'

function Login() {
  const [input, setInput] = useState({})
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // submit data to backend
    await axios
      .post('https://waralobby.mrayhanfadil.my.id/api/signin', {
        ...input,
      })
      .then((res) => {
        alert('Login berhasil')
        // set token to localstorage
        localStorage.setItem('token', res.data.token)
        // navigate to home
        navigate('/')
      })
      .catch((err) => {
        alert('login gagal periksa kembali email dan password')
        console.log(err)
      })
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

          <Button mt={2} w="full" type="submit">
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
