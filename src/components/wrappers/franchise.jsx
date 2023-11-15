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
  const [filtered, setFiltered] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${BASE_URL}/franchises`)
        .then((response) => {
          setFranchise(response.data)
          // check query params
          const params = new URLSearchParams(window.location.search)
          filtered.push(
            ...response.data.filter((item) =>
              item.name.toLowerCase().includes(params.get('search'))
            )
          )
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
        <Input
          type="text"
          placeholder="Cari Franchise"
          onChange={(e) => {
            const params = new URLSearchParams(window.location.search)
            params.set('search', e.target.value)
            navigate(`/franchise?${params.toString()}`)
            setFiltered(
              franchise.filter((item) =>
                item.name.toLowerCase().includes(e.target.value)
              )
            )
          }}
        />
      </InputGroup>
      <VStack mt="5">
        {filtered.map((item, index) => (
          <CardItem
            key={index}
            title={item?.name}
            description={item?.description}
            price={item?.capital}
            image={item?.img}
            onClick={() => {
              navigate(`/franchise/${item._id}`)
            }}
          />
        ))}
      </VStack>
    </>
  )
}
