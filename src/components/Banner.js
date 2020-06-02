import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {

    const data = useStaticQuery(graphql`
        query {
            ashCave: file(relativePath: { eq: "Ash-Cave.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            yosemiteCamp: file(relativePath: { eq: "Yosemite-camp.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            eagleCreekPark: file(relativePath: { eq: "Eagle-Creek-Park.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                        <Img fluid={data.eagleCreekPark.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">Guhaprasaanth Nandagopal</div>
                    <div className="main-image">
                        <Img fluid={data.ashCave.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
                        <Img fluid={data.yosemiteCamp.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
            <div className="fixed-misc">Web/UI Developer</div>
        </div>
    )
}

export default Banner;
