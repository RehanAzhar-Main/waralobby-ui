import React from 'react';


import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Text
  } from '@chakra-ui/react'

export default function ModalForm(props) {
    
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const formContent = [
      {
        section: "Pemilik Waralaba",
        fields: [
          { name: 'Nama', type: 'text' },
          { name: 'Alamat', type: 'text' },
          { name: 'Tempat, Tanggal Lahir', type: 'text' },
          { name: 'Nomor Telepon', type: 'text' },
        ]
      },
      {
        section: "Waralaba",
        fields: [
          { name: 'Nama', type: 'text' },
          { name: 'Alamat', type: 'text' },
          { name: 'Nomor Telepon', type: 'text' },
          { name: 'Pendanaan Modal', type: 'text' },
        ]
      }
    ];
  
    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={props.isOpen}
          onClose={props.onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {formContent.map((subTitle) => {
                return (
                <>
                  <Text fontSize='xl' fontWeight='bold'  mt={4} mb={2}>{subTitle.section}</Text>
                  {subTitle.fields.map((field) =>{
                  return (
                    <>
                      <FormControl>
                        <FormLabel>{field.name}</FormLabel>
                        <Input placeholder={field.name} />
                      </FormControl>
                    </>
                  )
                })}
                </>)
              })}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={props.onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }