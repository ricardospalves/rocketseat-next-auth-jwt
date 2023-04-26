import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className="font-sans text-base leading-normal text-black dark:bg-neutral-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
