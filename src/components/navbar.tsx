import * as React from 'react'

import { HStack, Icon, IconButton, Link, Tooltip, useColorMode } from '@chakra-ui/react'

import { FaMoon } from 'react-icons/fa'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import NextLink from 'next/link'
import { useSocials } from '@/hooks/app'
import siteConfig from '~/site-config'
import { useRecoilState } from 'recoil'
import { loginModalIsOpenAtom, logoutModalIsOpenAtom } from '@/recoil/AuthAtoms'
import { getRecoil, setRecoil } from 'recoil-nexus'
import LoginModal from './LoginModal/LoginModal'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutModal from './LoginModal/LogoutModal'

export const Navbar: React.FC = () => {
  const { toggleColorMode } = useColorMode()
  const socials = useSocials()
  const [loginModal, setloginModal] = useRecoilState(loginModalIsOpenAtom)
  const [logoutModal, setlogoutModal] = useRecoilState(logoutModalIsOpenAtom)
  const { isAuthenticated } = useAuth0()

  return (
    <HStack as="nav" fontSize="md" p={4} spacing={0}>
      <NextLink href="/">
        <Link fontWeight="bold" href="/" p={4} variant="link">
          {siteConfig.title}
        </Link>
      </NextLink>

      {!isAuthenticated && (
        <Tooltip label="Login">
        <IconButton
          aria-label="login-modal-open"
          color="currentColor"
          icon={<Icon as={BiLogIn} boxSize={5} />}
          onClick={() => {
            setloginModal(true)
          }}
          variant="link"
        />
        </Tooltip>
      )}
      
      {isAuthenticated && (
        <Tooltip label="Logout">
        <IconButton
          aria-label="logout-modal-open"
          color="currentColor"
          icon={<Icon as={BiLogOut} boxSize={5} />}
          onClick={() => {
            setlogoutModal(true);
          }}
          variant="link"
        />
        </Tooltip>
      )}
      <HStack flexGrow={1} justify="flex-end" p={4} spacing={{ base: 0, sm: 2 }}>
        {socials.map(([href, SocialIcon]) => (
          <IconButton
            as="a"
            aria-label={href}
            color="currentColor"
            href={href}
            icon={<Icon as={SocialIcon} boxSize={5} />}
            key={href}
            variant="link"
          />
        ))}
        <IconButton
          aria-label="toggle dark mode"
          color="currentColor"
          icon={<Icon as={FaMoon} boxSize={5} />}
          onClick={toggleColorMode}
          variant="link"
        />
      </HStack>
      <LoginModal />
      <LogoutModal />
    </HStack>
  )
}
