import type { NextPage } from 'next'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import UberBusiness from '../components/UberBusiness'
import Reservation from '../components/Reservation'
import SafetySection from '../components/SafetySection'
import AboutSection from '../components/AboutSection'
import AppSection from '../components/AppSection'
import SignupSection from '../components/SignupSection'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <MainContent/>
      <UberBusiness/>
      <Reservation/>
      <SafetySection/>
      <AboutSection/>
      <AppSection/>
      <SignupSection/>
      <Footer/>
    </>
  )
}

export default Home
