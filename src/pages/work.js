import React from "react"
import styled from 'styled-components'
import '../styles/styles.scss'

import { Header, Exp, Title } from '../components'

const IndexPage = () => {

    return (
        <div>
            <Header />
            <br /><br /><br />
            <Title title={"Work Experience"} />
            <Exp />
        </div>
    );
}

export default IndexPage

