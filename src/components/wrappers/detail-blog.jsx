import { Text, Image } from '@chakra-ui/react'

import { React } from 'react'

export default function DetailBlog({
  title = 'Waralobby Blog',
  description = 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
  image = 'https://placehold.co/600x400?text=Waralobby',
}) {
  return (
    <>
      <Text fontSize="3xl" textAlign="center" fontWeight="bold">
        {title}
      </Text>
      <Image src={image} alt={title} borderRadius="lg" mt={2} />
      <Text textAlign="left" mt={5}>
        {description}
      </Text>
    </>
  )
}
