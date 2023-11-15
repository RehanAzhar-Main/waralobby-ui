import { useEffect, useState } from 'react'
import axios from 'axios'
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
} from '@chakra-ui/react'
import CardItem from '../ui/CardItem.jsx'
import { IconPinFilled, IconSearch } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const BASE_URL = process.env.REACT_APP_BASE_URL_API
  const [franchise, setFranchise] = useState([])
  const [blog, setBlog] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${BASE_URL}/franchises`)
        .then((response) => {
          setFranchise(response.data)
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })

      await axios
        .get(`${BASE_URL}/blog`)
        .then((response) => {
          setBlog(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    fetchData()
  }, [])
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
        <InputRightElement
          onClick={() => {
            navigate('/franchise?search=' + search, { replace: true })
          }}
          cursor={'pointer'}
        >
          <IconSearch />
        </InputRightElement>
        <Input
          type="text"
          placeholder="Cari Franchise"
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </InputGroup>

      <Text fontSize="2xl" fontWeight="semibold" mt="5">
        Featured Franchise
      </Text>
      <div className="overflow__carousel">
        {franchise.map((item, index) => (
          <CardItem
            key={index}
            name={item?.name}
            description={item?.description}
            owner={item?.owner}
            location={item?.location}
            capital={item?.capital}
            image={item?.image}
            onClick={() => {
              navigate(`/franchise/${item._id}`)
            }}
          />
        ))}
      </div>
      <Text fontSize="2xl" fontWeight="semibold" mt="5">
        Featured Blog
      </Text>
      <div className="overflow__carousel">
        {blog.map((item, index) => (
          <CardItem
            key={index}
            image={item?.image}
            title={item?.title}
            description={item?.content}
            variant="blog"
            onClick={() => {
              navigate(`/blog/${item._id}`)
            }}
          />
        ))}
      </div>
    </>
  )
}

export default Home
