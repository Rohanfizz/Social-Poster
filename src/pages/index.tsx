import * as React from 'react'

import { Box, Button, Heading, Icon, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import { FaCode, FaGithub } from 'react-icons/fa'
import { NextSeo } from 'next-seo'

import siteConfig from '~/site-config'

import type { NextPage } from '@/types/next'
import PostForm from '@/components/MainForm/PostForm'

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo title={siteConfig.title} titleTemplate="%s" />
      <Stack alignItems="center" px={8} spacing={0} textAlign="center" w="full">
        <Heading size="2xl">{siteConfig.title}</Heading>
        <Heading fontWeight="normal" pb={8} size="md">
          {siteConfig.description}
        </Heading>
        <Box bg="green" h="50%" minH="0rem" minW="15rem" w="40%">
          <PostForm />
        </Box>
      </Stack>
    </>
  )
}

export default HomePage
