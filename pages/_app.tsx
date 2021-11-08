import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head';

const theme = {
   colors: {
     primary_text_color: 'white',
     invert_text_color: 'black',
     hover_text_color: '#a8a8a8',
     light_text_color: '#585858',
     background_color: 'black',
     grey_background_color: '#f4f4f4',
     invert_background_color: 'white',
     hover_background_color: '#262626',
     selected_background_color: '#424242',
     invert_hover_background_color: '#dbdbdb'
   }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Explore the Uber Platform | Uber.com</title>
          <link rel='preload' href='/fonts/UberMove-Regular.woff2' as='font' crossOrigin=''/>
          <link rel='preload' href='/fonts/UberMoveText-Regular.woff2' as='font' crossOrigin=''/>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
}
export default MyApp
