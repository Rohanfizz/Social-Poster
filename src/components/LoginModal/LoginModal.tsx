import { loginModalIsOpenAtom } from '@/recoil/AuthAtoms'
import { useAuth0 } from '@auth0/auth0-react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil'

function LoginModal() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpen, setloginModal] = useRecoilState(loginModalIsOpenAtom)
  const onOpen = () => {
    setloginModal(true)
  }
  const onClose = () => {
    setloginModal(false)
  }
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      {/* <Button onClick={onOpen}>Trigger modal</Button> */}

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems={'center'} justifyContent="center">
            {/* <Lorem count={2} /> */}
            <Button onClick={()=>loginWithRedirect()}>Login</Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default LoginModal
