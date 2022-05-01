import React from 'react'
import { Navbar } from '../../components'
import Layout from '../../layout'

const Dashboard = () => {
    return (
        <>  
            <Navbar/>
            <div className="container">
                <Layout/>
            </div>
            <footer>Created With Love By Otinomo 💖💖</footer>
        </>
    )
}

export default Dashboard