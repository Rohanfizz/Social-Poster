import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

const SocialButtons = () => {
  return (
    <HStack>
      <Button colorScheme="linkedin">
        Linkedin
      </Button>
      <Button colorScheme="facebook">
        Facebook
      </Button>
      <Button colorScheme="twitter">
        Twitter
      </Button>
      <Button colorScheme="telegram">
        Telegram
      </Button>
    </HStack>
  )
}

export default SocialButtons
