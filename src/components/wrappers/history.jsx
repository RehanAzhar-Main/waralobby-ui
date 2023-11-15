import { Box, Center, Divider, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState, useEffect, useCallback } from 'react';

import HistoryCard from '../ui/HistoryCard'
import { isLogin } from '../../services/authService'
import { getUserInfowithToken } from '../../util/userInfo'

const franchiseData = [
  {
    id: 1,
    name: 'Mixue',
    address: 'Jl. Peter 1',
    contact: '08123456789',
    status: 'accepted',
  },
  {
    id: 1,
    name: 'KFC',
    address: 'Jl. Anggur 1',
    contact: '081235621321',
    status: 'waiting',
  },
  {
    id: 1,
    name: 'McDonald',
    address: 'Jl. Jawa 1',
    contact: '0812357126',
    status: 'rejected',
  },
]

const HistoryPage = () => {
  const token = isLogin()
  const user = getUserInfowithToken(token)

  const [history,setHistory] = useState([])

  const fetchHistory = useCallback(async() => {
    const response = await fetch(`https://waralobby.mrayhanfadil.my.id/api//history/${user.userID}`)
    const history = await response.json()
    setHistory(history)
  })
  
  useEffect(() => {
    fetchHistory()
  },[fetchHistory]);


  return (
    <>
      <Box py={6} px={5} width="full">
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <Stack
            p={5}
            alignItems={'center'}
            justifyContent={{
              base: 'flex-start',
              md: 'space-around',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <Stack
              width={{
                base: '100%',
                md: '40%',
              }}
              textAlign={'center'}
            >
              <Center fontSize={'3xl'} fontWeight='bold' color="blue.400">
                History
              </Center>
            </Stack>
            <Stack
              width={{
                base: '100%',
                md: '60%',
              }}
            ></Stack>
          </Stack>
          <Divider />
          <Divider />
          {history.map((franchise) => {
            return (
              <HistoryCard
                name={franchise.franchiseName}
                address={franchise.franchiseAddress}
                contact={franchise.franchisePhone}
                status={franchise.status}
              />
            )
          })}
          <Divider />
        </Stack>
      </Box>
    </>
  )
}

export default HistoryPage
