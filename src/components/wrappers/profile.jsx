'use client'

import { Avatar, Box, Flex, keyframes, Text } from '@chakra-ui/react'

import ProfileCard from '../ui/ProfileCard'
import { capitalizeFirstLetter } from '../../util/Letter'
import { Navigation } from '../ui/Navbar'

export default function ProfilePage() {
  // get token from localstorage
  const token = localStorage.getItem('token')
  // check if token is exist
  if (!token) {
    // if token is not exist, redirect to login page
    window.location.href = '/login'
  }
  console.log(atob(token.split('.')[1]))

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

  const ProfileFetch = {
    username: 'rehan',
    email: 'rehan@gmail.com',
    role: 'admin',
    contact: '08126351253761',
  }
  const ProfileData = {
    username: ProfileFetch.username,
    email: ProfileFetch.email,
    contact: ProfileFetch.contact,
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
          {capitalizeFirstLetter(ProfileFetch.username)}
        </Text>
        <Text fontSize="xl">{capitalizeFirstLetter(ProfileFetch.role)}</Text>
      </Box>
      {Object.keys(ProfileData).map((key) => (
        <ProfileCard data={[key, ProfileData[key]]} />
      ))}

      <Navigation />
    </>
  )
}
