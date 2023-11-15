import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'

export default function CardItem({
  image = 'https://placehold.co/600x400?text=Waralobby',
  title = 'Waralobby',
  description = 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
  price = '$450',
  variant = 'franchise',
  onClick,
}) {
  return (
    <Card
      maxW="sm"
      style={{
        flex: '0 0 auto',
        width: 'auto',
        marginRight: '16px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <CardBody>
        <Image src={image} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text
            style={{
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </Text>
          {variant === 'franchise' && (
            <Text color="blue.600" fontSize="2xl">
              {price}
            </Text>
          )}
        </Stack>
      </CardBody>
    </Card>
  )
}
