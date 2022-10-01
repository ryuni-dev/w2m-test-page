import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../components/BoxSelect'
import { useTheme } from '@nextui-org/react';
import MainHeader from '../components/MainHeader'
import BtnContainer from '../components/BtnContainer'
import AboutContainer from '../components/AboutContainer';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Test page for Team MIMI</title>
      </Head>
      <MainHeader></MainHeader>
      <AboutContainer></AboutContainer>
      <BtnContainer></BtnContainer>
    </>
  )
}

export default Home
