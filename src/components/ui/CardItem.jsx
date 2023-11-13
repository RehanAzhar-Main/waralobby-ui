import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
export default function CardItem({
  image = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  title = 'Living room Sofa',
  description = 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
  price = '$450',
}) {
  const navigate = useNavigate()
  return (
    <Card
      maxW="sm"
      style={{
        flex: '0 0 auto',
        width: 'auto',
        marginRight: '16px',
        cursor: 'pointer',
      }}
      onClick={() => navigate('/franchise/1')}
    >
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}
