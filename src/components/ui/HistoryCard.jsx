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

  import { HiOutlineLocationMarker, HiBan } from 'react-icons/hi'
  import {BiPhoneCall} from 'react-icons/bi'
  import { MdBuild } from "react-icons/md"
  import { BsCheckLg, BsClockHistory } from "react-icons/bs"

export default function HistoryCard({ name,address,contact,status}){

        // const colorTextLight = checked ? 'white' : 'purple.600'

        let statColor;
        let iconStats;
        if (status === "accepted") {
            statColor = 'green';
            iconStats = <BsCheckLg/>
        } else if (status === "waiting") {
            statColor = 'orange';
            iconStats = <BsClockHistory/>
        } else {
            statColor = 'red';
            iconStats = <HiBan/>
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
                    <Heading size={'md'} pb={4}>{name}</Heading>
                    <List spacing={3} textAlign="start" fontSize={'sm'}>
                        <ListItem >
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
                    <Button leftIcon={iconStats} colorScheme={statColor} variant='solid' mb={8} w="100">
                        {status}
                    </Button>
                </Box>
            </Flex>
          </Box>
        )
      
}   