import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import { FaGithub, FaAudible } from "react-icons/fa"

import { Header, Title } from '../components'
import MyWorkData from '../jsondata/MyWorkData.json'

const Projects = () => {

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
        <>
            <br />
            <Header />
            <StyledImageHolder>
                <Img fixed={responsive.webDev.childImageSharp.fixed} />
            </StyledImageHolder>
            <Title title={"My works"} />
            <StyledInfoHolder>
                {
                    MyWorkData.map((work) => {
                        return (
                            <div key={work.id}>
                                <StyledTitleHolder>
                                    <tr>
                                        <td>
                                            <h4>{work.projectName}</h4>
                                        </td>
                                        <StyledGithubHolder>
                                            <a href={work.link}>
                                                <FaAudible size={28} />
                                            </a>
                                            &emsp;
                                            <a href={work.repo} className="logo">
                                                <FaGithub size={28} style={{ color: 'black' }} />
                                            </a>
                                        </StyledGithubHolder>
                                    </tr>
                                </StyledTitleHolder>
                                <h6>Domain: {work.domain}</h6>
                                <p>&emsp;&emsp;&emsp;{work.description}</p>
                            </div>
                        )
                    })
                }
            &emsp;. <br />
            &emsp;. <br />
            &emsp;. <br />
            &emsp;. <br />
            &emsp;. <br />
            &nbsp;<a href="https://github.com/guhandelta" className="logo">
                    <FaGithub size={28} style={{ color: 'black' }} />
                </a>
            </StyledInfoHolder>
        </>
    );
}

export default Projects;

const StyledImageHolder = styled.div`
    margin-bottom: -6.2em;
    margin-left: 14em;
`
const StyledInfoHolder = styled.div`
    margin: 1% 15%;
    width: 70%;
    h4{

    }
    h6{
        float: right;
        margin-left: 1em;
        transform: scale(0.7);
        margin-top: -1.2em;
        font-family: 'Courgette', cursive;
    }
`
const StyledTitleHolder = styled.div`
    display: inline;
    margin-bottom: -1.5em;

`

const StyledGithubHolder = styled.td`
    border: 1 ps solid #000;
`
