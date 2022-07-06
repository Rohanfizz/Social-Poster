import { atom } from 'recoil'

export const loginModalIsOpenAtom = atom({
  key: 'loginModalIsOpenAtom',
  default: false,
})
export const logoutModalIsOpenAtom = atom({
    key: 'logoutModalIsOpenAtom',
    default: false,
  })