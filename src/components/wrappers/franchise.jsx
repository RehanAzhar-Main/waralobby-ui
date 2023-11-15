import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react'
import { IconSearch } from '@tabler/icons-react'
import CardItem from '../ui/CardItem'
import { useNavigate } from 'react-router-dom'

export default function FranchisePage() {
  const BASE_URL = process.env.REACT_APP_BASE_URL_API
  const [franchise, setFranchise] = useState([])
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
    }
    fetchData()
  }, [])
  return (
    <>
      <Text fontSize="3xl" textAlign="center">
        Franchise
      </Text>
      <InputGroup mt="5">
        <InputRightElement pointerEvents="none">
          <IconSearch />
        </InputRightElement>
        <Input type="text" placeholder="Cari Franchise" />
      </InputGroup>
      <VStack mt="5">
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
      </VStack>
    </>
  )
}
