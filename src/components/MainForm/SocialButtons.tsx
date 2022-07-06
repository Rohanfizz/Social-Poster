import { useAuth0 } from '@auth0/auth0-react'
import { Box, Button, Hide, HStack, Show } from '@chakra-ui/react'
import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'

const SocialButtons = () => {
  return (
    <HStack min-width={'6rem'}>
      <Button leftIcon={<FaLinkedin />} colorScheme="linkedin">
        <Show above="lg">
          <Box>Linkedin</Box>
        </Show>
      </Button>
      <Button leftIcon={<FaFacebook />} colorScheme="facebook">
        <Show above="lg">
          <Box>Facebook</Box>
        </Show>
      </Button>
      <Button leftIcon={<FaTwitter />} colorScheme="twitter">
        <Show above="lg">
          <Box>Twitter</Box>
        </Show>
      </Button>
      <Button leftIcon={<FaTelegram />} colorScheme="telegram">
        <Show above="lg">
          <Box>Telegram</Box>
        </Show>
      </Button>
    </HStack>
  )
}

export default SocialButtons
