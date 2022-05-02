import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RepoList from '../../components/RepoList/RepoList'
import SideNav from '../../components/SideNav/SideNav'
import './Dashboard.css'

function Dashboard() {
  return (
    <>
        <Navbar />
        <Header />
        <div className="dashboard-container">
            <SideNav />
            <RepoList />
        </div>
        
    </>
  )
}

export default Dashboard