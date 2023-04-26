import { ReactNode, createContext, useEffect, useState } from 'react'
import { recoverUserInformation, signInRequest } from '~/services/auth'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

const COOKIE_TOKEN_NAME = 'nextauthjwt.token'

type User = {
  name: string
  avatar: string
  email: string
}

type SignInProps = {
  email: string
  password: string
}

type AuthContextProps = {
  isAuthenticated: boolean
  user: User | null
  signIn: (data: SignInProps) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps)

type AuthContextProviderProps = {
  children?: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { [COOKIE_TOKEN_NAME]: token } = parseCookies()

    if (token) {
      recoverUserInformation().then((response) => {
        const { user: responseUser } = response

        setUser(responseUser)
      })
    }
  })

  const signIn = async ({ email, password }: SignInProps) => {
    const { token, user: signInUser } = await signInRequest({
      email,
      password,
    })

    setCookie(undefined, COOKIE_TOKEN_NAME, token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    setUser(signInUser)

    Router.push('/dashboard')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
