import {
    Box,
    Text,
    Heading,
    Spacer,
    HStack,

  } from '@chakra-ui/react'

import {GoPerson} from "react-icons/go";
import {MdOutlineMail} from "react-icons/md";
import {BiPhoneCall} from "react-icons/bi";

import { capitalizeFirstLetter } from '../../util/Letter';

export default function ProfileCard(props){
    let icon;
        if (props.data[0] === "username"){
            icon = <GoPerson size={30}/>
        } else if (props.data[0] === "email"){
            icon = <MdOutlineMail size={30}/>
        } else {
            icon = <BiPhoneCall size={30}/>
        }
        return (

          <Box
            mx={10}
            my={5}
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
                <HStack mt={-4} spacing='12px'>
                    {icon}
                    <Heading size={'lg'} pt={4} pb={4}>{capitalizeFirstLetter(props.data[0])}</Heading>
                </HStack>
                    
                    <Text fontSize={'xl'} ps={10}>{capitalizeFirstLetter(props.data[1])}</Text>
          </Box>
        )
      
}   