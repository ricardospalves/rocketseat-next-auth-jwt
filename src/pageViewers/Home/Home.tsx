import Head from 'next/head'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '~/components/Button'
import { TextField } from '~/components/TextField'
import { AuthContext } from '~/contexts/AuthContext'

type RegisterFields = {
  email: string
  password: string
}

export const Home = () => {
  const { register, handleSubmit } = useForm<RegisterFields>()
  const { signIn } = useContext(AuthContext)

  const handleSignIn = async ({ email, password }: RegisterFields) => {
    await signIn({
      email,
      password,
    })
  }

  return (
    <>
      <Head>
        <title>Rocketseat - Next Auth JWT</title>
      </Head>

      <main className="flex min-h-screen">
        <div className="grow m-auto p-2">
          <div className="grid">
            <h1 className="text-center text-3xl font-bold mt-2 mb-8 order-last">
              Faça login em sua conta
            </h1>

            <img
              className="mx-auto h-12 w-auto"
              src="logo.svg"
              alt="Logo do Next Auth JWT"
            />
          </div>

          <form
            className="max-w-md mx-auto"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="grid gap-4 mb-4">
              <TextField
                label="E-mail"
                inputMode="email"
                {...register('email')}
                autoFocus
              />
              <TextField
                label="Senha"
                type="password"
                {...register('password')}
              />
            </div>

            <Button />
          </form>
        </div>
      </main>
    </>
  )
}
