import { useState } from 'react'
import axios from 'axios'
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
import {
  IconMailFilled,
  IconLock,
  IconUser,
  IconPhone,
} from '@tabler/icons-react'

function Register() {
  const [input, setInput] = useState({})
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // check if password and confirm password is same
    if (input.password !== input.confirmPassword) {
      alert('Password tidak sama')
      return
    }
    // submit data to backend
    await axios
      .post('https://waralobby.mrayhanfadil.my.id/api/signup', {
        ...input,
      })
      .then((res) => {
        if (res.data.status === 'success') {
          alert('Register berhasil')
          console.log(res.data)
          navigate('/login')
        } else {
          alert('Register gagal')
        }
      })
      .catch((err) => {
        alert('Register gagal')
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
            <FormLabel>Name</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IconUser />
              </InputLeftElement>
              <Input
                type="text"
                onChange={handleChange}
                name="username"
                required
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IconMailFilled />
              </InputLeftElement>
              <Input
                type="email"
                onChange={handleChange}
                name="email"
                required
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Phone</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IconPhone />
              </InputLeftElement>
              <Input
                type="tel"
                onChange={handleChange}
                name="phoneNumber"
                required
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IconLock />
              </InputLeftElement>
              <Input
                type="password"
                onChange={handleChange}
                name="password"
                required
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IconLock />
              </InputLeftElement>
              <Input
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                required
              />
            </InputGroup>
          </FormControl>

          <Button mt={2} w="full" type="submit">
            Submit
          </Button>
          <Text mt="2">
            Sudah ada akun?{' '}
            <Link
              color="blue.500"
              onClick={() => {
                navigate('/login')
              }}
            >
              Login disini
            </Link>
          </Text>
        </VStack>
      </form>
    </>
  )
}

export default Register
