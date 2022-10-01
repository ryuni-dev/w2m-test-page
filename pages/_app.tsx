import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
//import { ThemeProvider as NextThemesProvider } from 'next-themes';
//import { useTheme as useNextTheme } from 'next-themes'


// const darkTheme = createTheme({
//   type: 'dark',
//   theme: {
//     colors: {
//       // brand colors
//       background: '#1d1d1d',
//       text: '#fff',
//       // you can also create your own color
//       myDarkColor: '#ff4ecd'
//       // ...  more colors
//     },
//     }, // optional
//   }
// )


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
