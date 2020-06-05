import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import '../styles/styles.scss'

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
            {/* <div className="about-section"> */}

            <WrappedImg fixed={data.eagleCreekPark.childImageSharp.fixed} />

            <StyledRow>
                <StyledText>
                    <StyledWord>Versatile</StyledWord> Front-end/Web Developer with experience designing, developing, and managing complex responsive websites and internal web applications using <StyledJS>JavaScript</StyledJS> libraries like <StyledReact>ReactJS</StyledReact> and <StyledPython1>Pyt</StyledPython1><StyledPython2>hon</StyledPython2> frameworks like <StyledDjango>Django</StyledDjango> or <StyledFlask>Flask</StyledFlask>.
                    </StyledText>
            </StyledRow>
            {/* </div> */}
        </>
    )
}


export default AboutPage


const StyledImg = styled(Img)`
  display: block;
  border-radius: 1em;
  left: 7em;
  top: 4em;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

const StyledText = styled.p`
    font-family: 'Lobster', cursive;
    font-size: 2em;
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

const StyledColumn = styled.div`
    display: inline-block;
    border: 2px solid #000;
`
const StyledRow = styled.div`
    display: inline-block;
    position: relative;
    width: 65%;
    margin-left: 12em;
    left: 21.2em;
    top: -20em;
`
const StyledRows = styled.div`
    display: inline-block;
`
