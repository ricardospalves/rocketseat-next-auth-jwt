import { v4 as uuid } from 'uuid'

type SignInRequestProps = {
  email: string
  password: string
}

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount))

export const signInRequest = async ({}: SignInRequestProps) => {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Lorem Ipsum',
      email: 'lorem@ipsum.dolor',
      avatar: 'https://picsum.photos/100',
    },
  }
}

export const recoverUserInformation = async () => {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Lorem Ipsum',
      email: 'lorem@ipsum.dolor',
      avatar: 'https://picsum.photos/100',
    },
  }
}
