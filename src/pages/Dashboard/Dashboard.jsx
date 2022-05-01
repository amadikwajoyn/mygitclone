import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RepoList from '../../components/RepoList/RepoList'

function Dashboard() {
  return (
    <>
        <Navbar />
        <Header />
        <RepoList />
    </>
  )
}

export default Dashboard