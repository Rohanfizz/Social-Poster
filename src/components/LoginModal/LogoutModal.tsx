import { loginModalIsOpenAtom, logoutModalIsOpenAtom } from '@/recoil/AuthAtoms'
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

function LogoutModal() {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const [isOpen, setlogoutModal] = useRecoilState(logoutModalIsOpenAtom)
    const { loginWithRedirect ,logout} = useAuth0();
  const onOpen = () => {
    setlogoutModal(true)
  }
  const onClose = () => {
    setlogoutModal(false)
  }
  const onLogout= ()=>{
    logout({returnTo:'http://localhost:3000/'});
    setlogoutModal(false)

  }

  return (
    <>
      {/* <Button onClick={onOpen}>Trigger modal</Button> */}

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure you want to Log Out?</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody display="flex" alignItems={'center'} justifyContent="center">
          </ModalBody> */}
          <ModalFooter gap={'1rem'}>
            <Button onClick={onClose}>No</Button>
            <Button onClick={onLogout}>Yes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default LogoutModal
