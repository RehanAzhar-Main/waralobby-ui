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
import { IconMailFilled, IconLock, IconUser } from '@tabler/icons-react'

function Register() {
  return (
    <>
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
            <Input type="text" />
          </InputGroup>
        </FormControl>

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

        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IconLock />
            </InputLeftElement>
            <Input type="password" />
          </InputGroup>
        </FormControl>

        <Button w="full">Submit</Button>
        <Text mt="2">Sudah ada akun? Login disini</Text>
      </VStack>
    </>
  )
}

export default Register
