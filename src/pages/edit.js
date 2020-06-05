import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import '../styles/styles.scss'

import { Header, Title } from '../components'


const Edit = () => {

    const data = useStaticQuery(graphql`
        query {
            eagleCreekPark: file(relativePath: { eq: "Eagle-Creek-Park1.png" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)


    return (
        <>
            <Header />
            <br /><br /><br /><br />
            <Title title={"About Me "} />
            <div className="edit">
                <div className="container about">
                    <div className="about-section">
                        <div className="row">
                            <div className="about-image left">
                                <Img fadeIn={true} fluid={data.eagleCreekPark.childImageSharp.fluid} />
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit;
