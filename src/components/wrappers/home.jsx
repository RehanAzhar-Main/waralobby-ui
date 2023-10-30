import '../../assets/style/App.css'
import {
  Container,
  Text,
  HStack,
  VStack,
  AspectRatio,
  Box,
  Image,
  Spacer,
  InputGroup,
  InputRightElement,
  Input,
  List,
  ListItem,
  ListIcon,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Flex,
} from '@chakra-ui/react'
import { IconCheck, IconPinFilled, IconSearch } from '@tabler/icons-react'

function Home() {
  return (
    <>
      <Text textAlign="left" fontSize="3xl" mt="5" fontWeight="bold">
        Waralobby
      </Text>
      <Text>Cari franchise dan mulai sukses</Text>
      <HStack>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={IconPinFilled} color="green.500" />
            Kebab Turki
          </ListItem>
          <ListItem>
            <ListIcon as={IconPinFilled} color="green.500" />
            Burjo
          </ListItem>
          <ListItem>
            <ListIcon as={IconPinFilled} color="green.500" />
            Seblak Rafael
          </ListItem>
          <ListItem>
            <ListIcon as={IconPinFilled} color="green.500" />
            Odading Mang Oleh
          </ListItem>
        </List>
        <Spacer />
        <Image
          boxSize="30vh"
          objectFit="cover"
          src="/globe.png"
          alt="Dan Abramov"
        />
      </HStack>
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <IconSearch />
        </InputRightElement>
        <Input type="text" placeholder="Cari Franchise" />
      </InputGroup>

      <Text fontSize="2xl" fontWeight="semibold" mt="5">
        Featured Franchise
      </Text>
      <div className="overflow__carousel">
        <Card
          maxW="sm"
          style={{
            flex: '0 0 auto',
            width: 'auto',
            marginRight: '16px',
          }}
        >
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card
          maxW="sm"
          style={{
            flex: '0 0 auto',
            width: 'auto',
            marginRight: '16px',
          }}
        >
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card
          maxW="sm"
          style={{
            flex: '0 0 auto',
            width: 'auto',

            marginRight: '16px',
          }}
        >
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card
          maxW="sm"
          style={{
            flex: '0 0 auto',
            width: 'auto',

            marginRight: '16px',
          }}
        >
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </div>

      <Text fontSize="2xl" fontWeight="semibold" mt="5">
        Featured Blog
      </Text>
      <div className="overflow__carousel">
        <Card
          maxW="sm"
          style={{
            flex: '0 0 auto',
            width: 'auto',
            marginRight: '16px',
          }}
        >
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card
          maxW="sm"
          style={{
            flex: '0 0 auto',
            width: 'auto',

            marginRight: '16px',
          }}
        >
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card
          maxW="sm"
          style={{
            flex: '0 0 auto',
            width: 'auto',

            marginRight: '16px',
          }}
        >
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card
          maxW="sm"
          style={{
            flex: '0 0 auto',
            width: 'auto',

            marginRight: '16px',
          }}
        >
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Home
