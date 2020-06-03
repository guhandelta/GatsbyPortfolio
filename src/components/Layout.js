import React from 'react'
import Header from './Header'
import Banner from './Banner'


export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Banner />
            {children}
        </div>
    )
}

