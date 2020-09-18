import React from 'react';
import {Box, Text, Image} from '@chakra-ui/core';
import {NextPage} from 'next';


const Index: NextPage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" w="100vw" h="100vh" flexDir="column"
         textAlign="center">
      <Box w="50%">
        <Text fontSize="3xl" my={2}>Fala Dev!</Text>
        <Text color="gray.500" fontSize="xl">
          Welcome to gStudio a codeLess webApp that does everything that you need: <br/>
          <b>
            We handle your design with design patterns,<br/>
            We handle your data and its fetch from our servers,<br/>
            We handle the deploy and the redirect to your site proxy
          </b>
        </Text>
      </Box>
      <Box w="50%" my={4} py={2} px={2} borderWidth="1px" borderRadius="md">
        <Text fontSize="xl" fontWeight="bold">About our stack</Text>
        <Text color="gray.600">
          <b>graphql, es6+, react hooks, redux, typescript, jest, linters e pattern de design systems com chakra-ui</b>
        </Text>
      </Box>
      
      <Box px={6} py={6}>
        <Image
          mx="auto"
          width="70%"
          src="https://miro.medium.com/max/578/1*puA_YaolpjEt1YKGjNWVqg.png"
        />
      </Box>
    </Box>
  )
};

export default Index
