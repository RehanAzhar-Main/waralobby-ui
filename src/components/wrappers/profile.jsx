'use client'

import { Avatar, Box, Flex, keyframes, Text, Button, Grid, GridItem } from '@chakra-ui/react'

import ProfileCard from '../ui/ProfileCard'
import { capitalizeFirstLetter } from '../../util/Letter'
import { Navigation } from '../ui/Navbar'
import { isLogin, setLogout } from '../../services/authService'
import { getUserInfowithToken } from '../../util/userInfo'

import { BiLogOut } from 'react-icons/bi'

export default function ProfilePage() {

  const token = isLogin()


  const user = getUserInfowithToken(token)
  const size = '96px'
  const color = 'teal'

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`

  const ProfileData = {
    username: user.username,
    email: user.email,
    contact: user.phoneNumber,
  }

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        h="216px"
        w="full"
        overflow="hidden"
      >
        {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
        <Box
          as="div"
          position="relative"
          w={size}
          h={size}
          _before={{
            content: "''",
            position: 'relative',
            display: 'block',
            width: '300%',
            height: '300%',
            boxSizing: 'border-box',
            marginLeft: '-100%',
            marginTop: '-100%',
            borderRadius: '50%',
            bgColor: color,
            animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
          }}
        >
          <Avatar
            src="https://i.pravatar.cc/300"
            size="full"
            position="absolute"
            top={0}
          />
        </Box>
      </Flex>
      <Box textAlign="center" mt={-8} mb={16}>
        <Text fontSize="3xl" fontWeight="bold">
          {capitalizeFirstLetter(user.username)}
        </Text>
        <Text fontSize="xl">{capitalizeFirstLetter(user.rolename)}</Text>
      </Box>
      {Object.keys(ProfileData).map((key) => (
        <ProfileCard data={[key, ProfileData[key]]} />
      ))}
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
        <GridItem colStart={4} colEnd={6} h='10'>
          <Button onClick={() => {setLogout()}} colorScheme='red' mt={5} leftIcon={<BiLogOut/>}>Logout</Button>
        </GridItem>
        
      </Grid>
      

      <Navigation />

    </>
  )
}
