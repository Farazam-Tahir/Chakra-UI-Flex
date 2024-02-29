import { Box, Button, Container, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navItemStyle = {
    fontWeight : 'bold',
    fontSize : 'large'
  }
  return (
    <Flex as='nav' alignItems='center' p='20px' justifyContent='space-between' borderBottom='1px'>
      <Heading as='h1'>LOGO</Heading>
      <HStack spacing='40px'>
        <Link to="/" style={navItemStyle}>Home</Link>
        <Link to="contact" style={navItemStyle}>Contact</Link>
        <Link to="shop" style={navItemStyle}>Shop</Link>
      </HStack>
      <HStack spacing='20px'>
      <Text>example@gmail.com</Text>
      <Button>Logout</Button>
      </HStack>
    </Flex>
  )
}

export default Navbar
