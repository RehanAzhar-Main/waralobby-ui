import '../../assets/style/App.css'
import {
  Text,
  HStack,
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
import CardItem from '../ui/CardItem.jsx'
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
        {[1, 2, 3, 4].map((item, index) => (
          <CardItem key={index} />
        ))}
      </div>
      <Text fontSize="2xl" fontWeight="semibold" mt="5">
        Featured Blog
      </Text>
      <div className="overflow__carousel">
        {[1, 2, 3, 4].map((item, index) => (
          <CardItem key={index} />
        ))}
      </div>
    </>
  )
}

export default Home
