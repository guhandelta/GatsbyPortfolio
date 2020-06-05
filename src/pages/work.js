import React from "react"
import '../styles/styles.scss'

import { Header, Banner, Exp, Title } from '../components'

const IndexPage = () => (
    <div>
        <Header />
        <Banner />
        <br /><br /><br />
        <Title title={"Work Experience"} />
        <Exp />
    </div>
)

export default IndexPage
