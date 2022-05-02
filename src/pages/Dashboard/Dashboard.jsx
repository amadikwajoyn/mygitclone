import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RepoList from '../../components/RepoList/RepoList'
import SideNav from '../../components/SideNav/SideNav'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="App-header">
        <Navbar />
        <Header />
        <div className="dashboard-container">
            <SideNav />
            <RepoList />
        </div>
        
    </div>
  )
}

export default Dashboard