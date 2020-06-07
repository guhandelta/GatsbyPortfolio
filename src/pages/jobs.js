import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Experience from '../jsondata/Experience.json'
import { Banner, Header } from '../components'
import '../styles/styles.scss'

const Jobs = () => {

    const data = useStaticQuery(graphql`
        query {
            job1: file(relativePath: { eq: "discover.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            job2: file(relativePath: { eq: "barclaycard.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            job3: file(relativePath: { eq: "express-scripts.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            job4: file(relativePath: { eq: "bsCal.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            job5: file(relativePath: { eq: "veridic.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            job6: file(relativePath: { eq: "n2s.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            job7: file(relativePath: { eq: "mildred.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            job8: file(relativePath: { eq: "wvaquavit.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            job9: file(relativePath: { eq: "adroit.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            job10: file(relativePath: { eq: "skcet.png" }) {
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
            <Header />
            <Banner />
            <div className="job-holder">
                {
                    Experience.map((exp) => (
                        <>
                            <div className="row" key={exp.id}>
                                <div class="column left">
                                    <br /><br />
                                    <h2>{exp.client}<span className="date">({exp.daterange})</span></h2>
                                    <p>{exp.work}</p>
                                </div>
                                <div className="column right">
                                    <Img fixed={data.job1.childImageSharp.fixed} />
                                </div>
                            </div>
                            <hr />
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Jobs;

