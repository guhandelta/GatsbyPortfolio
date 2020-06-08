import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import '../styles/styles.scss'
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa"

import { Header, Title } from '../components'

const AboutPage = () => {

    const data = useStaticQuery(graphql`
        query {
            eagleCreekPark: file(relativePath: { eq: "Eagle-Creek-Park1.png" }) {
                childImageSharp {
                    fixed(width: 350) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const WrappedImg = props => (<Wrapper><StyledImg {...props} /></Wrapper>)

    return (
        <>
            <Header /><br /><br /><br /><br /><br />
            <Title title={"About me"} />


            <StyledImageHolder>
                <WrappedImg fixed={data.eagleCreekPark.childImageSharp.fixed} />
            </StyledImageHolder>

            <StyledLinksTable>
                <th>
                    <a style={{ color: 'black' }} className="github" href="https://github.com/guhandelta">
                        <FaGithub size={32} />
                    </a>
                </th>
                <th>
                    <a href="https://linkedin.com/guhaprasaanthnandagopal">
                        <FaLinkedin size={32} />
                    </a>
                </th>
                <th>
                    <a href="https://facebook.com/deltaguhan">
                        <FaFacebookF size={32} />
                    </a>
                </th>
            </StyledLinksTable>

            <StyledRow>
                <StyledText>
                    <StyledWord>Versatile</StyledWord> Front-end/Web Developer with experience designing, developing, and managing complex responsive websites and internal web applications using <StyledJS>JavaScript</StyledJS> libraries and frameworks like <StyledReact>ReactJS</StyledReact> & <StyledNode>NodeJS</StyledNode> and <StyledPython1>Pyt</StyledPython1><StyledPython2>hon</StyledPython2> frameworks like <StyledDjango>Django</StyledDjango> and <StyledFlask>Flask</StyledFlask>.
                </StyledText>
            </StyledRow>
        </>
    )
}


export default AboutPage


const StyledImg = styled(Img)`
  display: block;
  border-radius: 1em;
  top: 0.5em;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

const StyledText = styled.p`
    font-family: 'Lobster', cursive;
    font-size: 2em;
    top: -10em;
    :first-letter{
        color: coral;
    }
`

const StyledWord = styled.span`
    font-size: 2.1em;
    color: coral;
`

const StyledJS = styled.span`
    color: #ffe600;
`
const StyledNode = styled.span`
    color: #ffe600;
`
const StyledReact = styled.span`
    color: #1ad1ff;
`
const StyledPython1 = styled.span`
    color: #336699;
    `
const StyledPython2 = styled.span`
    color: #ffe600;
`
const StyledDjango = styled.span`
    color: #008000;
`
const StyledFlask = styled.span`
    font-family: 'Piedra', cursive;
`
const StyledRow = styled.div`
    display: inline-block;
    position: relative;
    width: 65%;
    margin-left: 12em;
    left: 21.2em;
    top: -34.5em;
    margin-bottom: -30em;
`
const StyledLinksTable = styled.table`
    display: table;
    width: 20em;
    text-align:center;
    margin-left: 10em;
    margin-top: 16em;
    z-index: 7;
`
const StyledCentreAlign = styled.div`
    padding: 10px;
    border: 1px dashed gray;
    display: table - cell;
    text-align: center;
    vertical-align: middle;
`

const StyledContainerTable = styled.table`
    margin-left: 5em;
    width: 10em;
`
const StyledImageHolder = styled.div`
    height: 10em;
    width: 20em;
    margin-left: 10em;
    z-index: 3;
`
