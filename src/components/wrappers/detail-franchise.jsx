import {
  Box,
  Stack,
  Text,
  IconButton,
  useBreakpointValue,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import {
  IconArrowBigLeftFilled,
  IconArrowBigRightFilled,
  IconMapPinShare,
  IconUserFilled,
  IconWallet,
} from '@tabler/icons-react'
import { React, useState } from 'react'

import ModalForm from '../ui/ModalForm'
import { isLogin } from '../../services/authService'

// And react-slick as our Carousel Lib
import Slider from 'react-slick'

export default function DetailFranchise() {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [slider, setSlider] = useState(0)

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  const cards = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ]

  isLogin()


  return (
    <>
      <Text fontSize="3xl" textAlign="center" fontWeight="bold">
        Kebab Turki
      </Text>
      <Box
        position={'relative'}
        height={'250px'}
        width={'full'}
        overflow={'hidden'}
        mt={5}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <IconArrowBigLeftFilled />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <IconArrowBigRightFilled />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Box
              key={index}
              height={'6xl'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
      <Text textAlign="left" mt={5}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
        venenatis magna. In hac habitasse
      </Text>
      <Box>
        <Text textAlign="left" mt={5} fontWeight="semibold">
          Informasi Pemilik
        </Text>
        {/* <Divider /> */}
        <Stack direction="row" pt={2}>
          <IconUserFilled />
          <Text fontWeight="semibold">Andi</Text>
        </Stack>
        <Stack direction="row" pt={2}>
          <IconMapPinShare />
          <Text fontWeight="semibold">Alun Alun Kota</Text>
        </Stack>
      </Box>
      <Text textAlign="left" mt={5} fontWeight="semibold">
        Potensi Keuntungan
        <Stack direction="row" pt={2}>
          <IconWallet />
          <Text fontWeight="semibold">2.000.000 / Hari</Text>
        </Stack>
      </Text>  
      <Button onClick={onOpen} colorScheme='blue' mt={5}>Apply</Button>

      <div>{<ModalForm isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>}</div>
    </>

  )
}
