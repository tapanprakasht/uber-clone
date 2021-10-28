import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
   colors: {
     primary_text_color: 'white',
     invert_text_color: 'black',
     background_color: 'black',
     invert_background_color: 'white',
     hover_background_color: '#262626',
     invert_hover_background_color: '#dbdbdb'
   }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
}
export default MyApp
