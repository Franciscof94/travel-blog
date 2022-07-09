import { Box } from '@material-ui/core'
import React from 'react'
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <Box>
        <NavBar />
        <Banner />
    </Box>
  )
}

export default Home