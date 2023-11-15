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
  
import { useNavigate } from 'react-router-dom';


import { isLogin } from '../../services/authService';
import axios from 'axios'
import { getUserInfowithToken } from '../../util/userInfo';

export default function ModalForm(props) {
    
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const formContent = [
      {
        section: "Pemilik Waralaba",
        fields: [
          { id: 'franchisee_name', name: 'Nama', type: 'text' },
          { id: 'franchisee_address', name: 'Alamat', type: 'text' },
          { id: 'franchisee_placeDateBirth', name: 'Tempat, Tanggal Lahir', type: 'text' },
          { id: 'franchisee_phone', name: 'Nomor Telepon', type: 'text' },
        ]
      },
      {
        section: "Waralaba",
        fields: [
          { id: 'franchise_name', name: 'Nama', type: 'text' },
          { id: 'franchise_address', name: 'Alamat', type: 'text' },
          { id: 'franchise_phone', name: 'Nomor Telepon', type: 'text' },
          { id: 'funding_capital', name: 'Pendanaan Modal', type: 'text' },
        ]
      }
    ];


    const token = isLogin()
    const user = getUserInfowithToken(token)
    const navigate = useNavigate();

    const handleApply = async(data) => {
      

      const str = document.getElementById('franchisee_name').value

      try {
        await axios.post('https://waralobby.mrayhanfadil.my.id/api/apply', {
          franchisee_id: user.userID,
          franchisee_name: document.getElementById('franchisee_name').value,
          franchisee_address: document.getElementById('franchisee_address').value,
          franchisee_placeDateBirth: document.getElementById('franchisee_placeDateBirth').value,
          franchisee_phone: document.getElementById('franchisee_phone').value,
          franchise_name: document.getElementById('franchise_name').value,
          franchise_address: document.getElementById('franchise_address').value,
          franchise_phone: document.getElementById('franchise_phone').value,
          funding_capital: document.getElementById('funding_capital').value
      })

      props.onClose();
      navigate('/history');
      } catch (error) {
        console.error("Error : ", error)
      }

      
    }
  
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
                        <Input id={field.id} placeholder={field.name} />
                      </FormControl>
                    </>
                  )
                })}
                </>)
              })}
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>{handleApply()}} colorScheme='blue' mr={3}>
                Apply
              </Button>
              <Button onClick={props.onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }