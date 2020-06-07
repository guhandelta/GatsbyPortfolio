import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {

    const data = useStaticQuery(graphql`
        query {
            lowerNiagra: file(relativePath: { eq: "Lower-Niagra.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            yosemiteCamp: file(relativePath: { eq: "Yosemite-campfire.png" }) {
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
                    <br /><br /><br />
                    <div className="side-image left">
                        <Img fluid={data.eagleCreekPark.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">Guhaprasaanth Nandagopal</div>
                    <div className="main-image">
                        <Img fluid={data.lowerNiagra.childImageSharp.fluid} />
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
