import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import '../styles/styles.scss'

import { Header, Exp, Title } from '../components'

const IndexPage = () => {

    const responsive = useStaticQuery(graphql`
        query {
            webDev: file(relativePath: { eq: "responsive-web-developer.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Header />
            <br /><br /><br />
            <StyledImageHolder>
                <Img fixed={responsive.webDev.childImageSharp.fixed} />
            </StyledImageHolder>
            <Title title={"Work Experience"} />
            <Exp />
        </div>
    );
}

export default IndexPage

const StyledImageHolder = styled.div`
    margin-bottom: -6.2em;
    margin-left: 14em;
`
