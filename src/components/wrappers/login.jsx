import {
  FormControl,
  Container,
  FormLabel,
  VStack,
  FormHelperText,
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Button,
  Input,
} from '@chakra-ui/react'
import { IconMailFilled, IconLock } from '@tabler/icons-react'

function Login() {
  return (
    <>
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
            <Input type="email" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IconLock />
            </InputLeftElement>
            <Input type="password" />
          </InputGroup>
        </FormControl>

        <Text textAlign="right" alignSelf="end">
          Lupa Password?
        </Text>
        <Button w="full">Submit</Button>
        <Text mt="2">Belum ada akun? Daftar disini</Text>
      </VStack>
    </>
  )
}

export default Login
