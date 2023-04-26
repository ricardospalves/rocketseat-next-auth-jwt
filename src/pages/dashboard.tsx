import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useContext } from 'react'
import { AuthContext } from '~/contexts/AuthContext'
import { getApiClient } from '~/services/apiClient'

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <Head>
        <title>Rocketseat - Next Auth JWT</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <header className="shrink-0 p-2 border-b border-neutral-500">
          <div className="flex justify-between items-center container mx-auto">
            <h1 className="lg:text-xl font-bold">Next Auth JWT</h1>

            <div className="flex w-9 h-9 justify-center items-center rounded-full overflow-hidden bg-slate-500">
              {user && (
                <img
                  src={user.avatar}
                  className="block rounded-full"
                  alt={`Avatar do ${user.name}`}
                />
              )}
            </div>
          </div>
        </header>

        <main className="flex grow">
          <h2 className="m-auto text-center text-3xl font-bold">Dashboard</h2>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiClient = getApiClient(context)
  const { 'nextauthjwt.token': token } = parseCookies(context)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  await apiClient.get('/users')

  return {
    props: {},
  }
}
