import {
    Flex,
    Spacer,
    Box,

    Heading,
    Button,
    List,
    ListItem,
    ListIcon,

  } from '@chakra-ui/react'

  import { HiOutlineLocationMarker } from 'react-icons/hi'
  import {BiPhoneCall} from 'react-icons/bi'
  import { MdBuild } from "react-icons/md"

export default function HistoryCard({ name,address,contact,status}){

        // const colorTextLight = checked ? 'white' : 'purple.600'

        let statColor;
        if (status === "accepted") {
            statColor = 'green';
        } else if (status === "waiting") {
            statColor = 'orange';
        } else {
            statColor = 'red';
        }
            
        
        return (

          <Box
            px={6}
            pt={6}
            pb={4}
            borderWidth="2px"
            borderRadius={'xl'}
            justifyContent={{
              base: 'flex-start',
              md: 'space-around',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}
            alignItems={{ md: 'center' }}>

            <Flex>
                <Box spacing='24px'>
                    <Heading size={'xl'} pb={4}>{name}</Heading>
                    <List spacing={3} textAlign="start">
                        <ListItem>
                            <ListIcon as={HiOutlineLocationMarker} color="green.500"/>
                                {address}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BiPhoneCall} color="green.500"/>
                                {contact}
                        </ListItem>
                    </List>
                </Box>
                <Spacer />
                <Box display='grid'>
                    <Button leftIcon={<MdBuild />} colorScheme={statColor} variant='solid' mb={8} w="75%">
                        {status}
                    </Button>
                    <Button colorScheme='teal' variant='outline'>
                        Discussion History
                    </Button>
                </Box>
            </Flex>
          </Box>
        )
      
}   