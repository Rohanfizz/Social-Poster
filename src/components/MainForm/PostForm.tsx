import usePostContent from '@/hooks/usePostContent'
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  TagLabel,
  Text,
  Textarea,
  VisuallyHidden,
} from '@chakra-ui/react'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import SocialButtons from './SocialButtons'

const PostForm = () => {

  const {setPostingTweet} = usePostContent();

  const postContentHandler = ()=>{
    setPostingTweet(true);
  }

  return (
    <Box
      bg="#edf3f8"
      _dark={{
        bg: 'gray.800',
      }}
    //   p={1}
      h={'100%'}
      w="100%"
      boxShadow={"lg"}
    >
      <Box>
        <SimpleGrid
          display={{
            base: 'initial',
            md: 'grid',
          }}
          columns={{
            md: 3,
          }}
          spacing={{
            md: 1,
          }}
        >
          <GridItem
            mt={[0, null, 0]}
            colSpan={{
              md: 3,
            }}
          >
            <FormControl
              shadow="base"
              rounded={[null, 'md']}
              overflow={{
                sm: 'hidden',
              }}
            >
              <Stack
                px={4}
                py={2}
                bg="white"
                _dark={{
                  bg: 'gray.900',
                }}
                spacing={6}
                p={{
                  sm: 6,
                }}
              >
                <SimpleGrid columns={3} spacing={1}>
                  <FormControl as={GridItem} colSpan={[3, 2]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: 'gray.50',
                      }}
                    >
                      Websites
                    </FormLabel>
                    <SocialButtons/>
                  </FormControl>
                </SimpleGrid>

                <div>
                  <FormControl id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: 'gray.50',
                      }}
                    >
                      Description
                    </FormLabel>
                    <Textarea
                      placeholder="you@example.com"
                      mt={1}
                      rows={3}
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{
                        sm: 'sm',
                      }}
                    />
                    <FormHelperText>Brief description for your profile. URLs are hyperlinked.</FormHelperText>
                  </FormControl>
                </div>
{/* 
                <FormControl>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: 'gray.50',
                    }}
                  >
                    Photo
                  </FormLabel>
                  <Flex alignItems="center" mt={1}>
                    <Avatar
                      boxSize={12}
                      bg="gray.100"
                      _dark={{
                        bg: 'gray.800',
                      }}
                      icon={
                        <Icon
                          as={FaUser}
                          boxSize={9}
                          mt={3}
                          rounded="full"
                          color="gray.300"
                          _dark={{
                            color: 'gray.700',
                          }}
                        />
                      }
                    />
                    <Button
                      type="button"
                      ml={5}
                      variant="outline"
                      size="sm"
                      fontWeight="medium"
                      _focus={{
                        shadow: 'none',
                      }}
                    >
                      Change
                    </Button>
                  </Flex>
                </FormControl> */}

                <FormControl>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: 'gray.50',
                    }}
                  >
                    Add Photos
                  </FormLabel>
                  <Flex
                    mt={1}
                    justify="center"
                    px={6}
                    pt={5}
                    pb={6}
                    borderWidth={2}
                    _dark={{
                      color: 'gray.500',
                    }}
                    borderStyle="dashed"
                    rounded="md"
                  >
                    <Stack spacing={1} textAlign="center">
                      <Icon
                        mx="auto"
                        boxSize={12}
                        color="gray.400"
                        _dark={{
                          color: 'gray.500',
                        }}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2" 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Icon>
                      <Flex
                        fontSize="sm"
                        color="gray.600"
                        _dark={{
                          color: 'gray.400',
                        }}
                        alignItems="baseline"
                      >
                        <TagLabel
                          //   htmlFor="file-upload"
                          cursor="pointer"
                          rounded="md"
                          fontSize="md"
                          color="brand.600"
                          _dark={{
                            color: 'brand.200',
                          }}
                          pos="relative"
                          _hover={{
                            color: 'brand.400',
                            _dark: {
                              color: 'brand.300',
                            },
                          }}
                        >
                          <span>Upload a file</span>
                          <VisuallyHidden>
                            <input id="file-upload" name="file-upload" type="file" />
                          </VisuallyHidden>
                        </TagLabel>
                        <Text pl={1}>or drag and drop</Text>
                      </Flex>
                      <Text
                        fontSize="xs"
                        color="gray.500"
                        _dark={{
                          color: 'gray.50',
                        }}
                      >
                        PNG, JPG, GIF up to 10MB
                      </Text>
                    </Stack>
                  </Flex>
                </FormControl>
              </Stack>
              <Box
                px={{
                  base: 4,
                  sm: 6,
                }}
                py={3}
                bg="gray.200"
                _dark={{
                  bg: 'blackAlpha.500',
                }}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="teal"
                  _dark={{
                    colorScheme: 'pink',
                  }}
                  _focus={{
                    shadow: '',
                  }}
                  onClick={postContentHandler}
                  disabled={false}
                  fontWeight="md"
                >
                  Post
                </Button>
              </Box>
            </FormControl>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default PostForm
