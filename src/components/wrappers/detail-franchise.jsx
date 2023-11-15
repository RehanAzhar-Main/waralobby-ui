import {
  Box,
  Stack,
  Text,
  Button,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import {
  IconMapPinShare,
  IconUserFilled,
  IconWallet,
} from '@tabler/icons-react'
import { React, useState } from 'react'

import ModalForm from '../ui/ModalForm'
import { isLogin } from '../../services/authService'

// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { useEffect } from 'react'
import axios from 'axios'

export default function DetailFranchise({}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState([])

  isLogin()
  const BASE_URL = process.env.REACT_APP_BASE_URL_API

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${BASE_URL}/franchises/${window.location.pathname.split('/')[2]}`)
        .then((response) => {
          setData(response.data)
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
      <Text fontSize="3xl" textAlign="center" fontWeight="bold">
        {data?.name}
      </Text>
      <Image src={data?.img} alt={data?.name} borderRadius="lg" mt={2} />

      <Text textAlign="left" mt={5}>
        {data?.description}
      </Text>
      <Box>
        <Text textAlign="left" mt={5} fontWeight="semibold">
          Informasi Pemilik
        </Text>
        {/* <Divider /> */}
        <Stack direction="row" pt={2}>
          <IconUserFilled />
          <Text fontWeight="semibold">{data?.owner}</Text>
        </Stack>
        <Stack direction="row" pt={2}>
          <IconMapPinShare />
          <Text fontWeight="semibold">{data?.location}</Text>
        </Stack>
      </Box>
      <Text textAlign="left" mt={5} fontWeight="semibold">
        Potensi Keuntungan
        <Stack direction="row" pt={2}>
          <IconWallet />
          <Text fontWeight="semibold">{data?.capital} / Hari</Text>
        </Stack>
      </Text>
      <Button onClick={onOpen} colorScheme="blue" mt={5} w={'full'}>
        Apply
      </Button>

      <div>
        {<ModalForm isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
      </div>
    </>
  )
}
