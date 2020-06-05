import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Header } from '../components'

const Banner = () => {

    const data = useStaticQuery(graphql`
        query {
            eagleCreekPark: file(relativePath: { eq: "Eagle-Creek-Park1.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <>
            <Header />
            <div className="edit">
                <div className="container">
                    <div className="row">
                        <div className="about-image left">
                            <Img fluid={data.eagleCreekPark.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>
                <div className="fixed-misc">Web/UI Developer</div>
            </div>
        </>
    )
}

export default Banner;
