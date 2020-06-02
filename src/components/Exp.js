import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Exp = () => {

    const data = useStaticQuery(graphql`
        query {
            discover: file(relativePath: { eq: "discovers.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            barclaycard: file(relativePath: { eq: "barclaycard.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            expressScripts: file(relativePath: { eq: "express-scripts.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            bsCal: file(relativePath: { eq: "bsCal.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            veridic: file(relativePath: { eq: "veridic.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            n2s: file(relativePath: { eq: "n2s.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            mildred: file(relativePath: { eq: "mildred.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            wvaquavit: file(relativePath: { eq: "wvaquavit.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            adroit: file(relativePath: { eq: "adroit.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            skcet: file(relativePath: { eq: "skcet.png" }) {
                childImageSharp {
                    fixed(width: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <div className="about-blurb">
            <div className="container">
                <h2>Work Experience</h2>
                <div className="inner-blurb">
                    <div class="row">
                        <div class="column">
                            <h2>Discover Financial Services(Dec 2019 – May 2020)</h2>
                            <h2>Discover Financial Services<span className="date">(Dec 2019 – May 2020)</span></h2>
                            <p>• Developed Server Side Rendered SPA using Next JS, React JS, Material UI, SASS, JavaScript/JSX, JSON and Ajax<br />
                        • Constructed a robust server using Python Flask with endpoints to provide data to the UI pages<br />
                        • Worked with team in developing an interactive menu with elegant animations using D3.js<br />
                        • Developed an interactive dashboard that displays updates on user actions in realtime, using Python Flask and Jinja2.<br />
                            </p>
                        </div>
                        <div class="column .logo">
                            &emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;
                            <Img fixed={data.discover.childImageSharp.fixed} />
                        </div>
                    </div>

                    <div className="row">
                        <div class="column .bcard">

                            <Img fixed={data.barclaycard.childImageSharp.fixed} />
                        </div>
                        <div class="column">
                            <h2>Barclay Card Us<span className="date">(Sep 2019 – Nov 2019)</span></h2>
                            <p>• Designed Responsive Single Page Application using React JS, JSON, SASS/SCSS <br />
                            • Worked with business to design and develop web pages that adhered to company, industry and usability standards. <br />
                            • Contributed to design and development of the UI for the Credit Card Offers Portal <br />
                            • Contributed in developing internal applications and application server with APIs using Python Flask and MongoDB <br />

                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div class="column">
                            <h2>Express Scripts International<span className="date">(Dec 2018 – Aug 2019)</span></h2>
                            <p>• Developed Single Page Applications using HTML5/CSS3, SASS, JavaScript/JSX, React JS, Redux, JSON, Node.js, and Ajax <br />
                            • Designed methods and classes to interact and dispatch data using multiple APIs to React components <br />
                            • Design the web pages with the Server Side Rendering architecture to make the website faster<br />
                            • Composed unit test cases using Jest-Enzyme for performing unit tests on React components<br />

                            </p>
                        </div>
                        <div class="column .logo">
                            &emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;
                            <Img fixed={data.expressScripts.childImageSharp.fixed} />
                        </div>
                    </div>

                    <div className="row">
                        <div class="column .bcard">
                            <Img fixed={data.bsCal.childImageSharp.fixed} />
                        </div>
                        <div class="column">
                            <h2>Blue Shield of California<span className="date">(May 2018 – Nov 2018)</span></h2>
                            <p>     • Developed responsive UI using Angular 4/Bootstrap by binding HTML DOM to JavaScript objects. <br />
                            • Created Typescript reusable components and services using Component-based architecture provided by Angular 4. <br />
                            • Utilized in-browser testing with Karma to perform unit testing of the Angular 4 applications on browsers. <br />
                            • Constructed database Model, APIs and Views utilizing python, in order to build an interactive web based solution. <br />
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div class="column">
                            <h2>Veridic Solutions<span className="date">(Nov 2017 – Mar 2018)</span></h2>
                            <p>• Designed and managed public/private cloud infrastructures using Amazon Web Services (AWS). <br />
                            • Worked on automating AWS infrastructure provisioning using AWS SDK Boto3 and Python. <br />
                            • Worked On-Premise migration into AWS, over a dedicated connection using AWS Direct Connect. <br />
                            • Developed cookbooks using Chef for Deploying services on Hybrid environments, both Windows and Linux. <br />
                            </p>
                        </div>
                        <div class="column .logo">
                            &emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;
                            <Img fixed={data.veridic.childImageSharp.fixed} />
                        </div>
                    </div>

                    <div className="row">
                        <div class="column .bcard">
                            <Img fixed={data.n2s.childImageSharp.fixed} />
                        </div>
                        <div class="column">
                            <h2>N2 Services<span className="date">(July 2017 – Nov 2017)</span></h2>
                            <p>     • Implemented Angular app with CRUD features utilizing all concepts of Angular 4 i.e. Data binding, Components, Directives, in-built and user-defined directives, Routing, Observables, Forms, Pipes, Services with Dependency Injection. <br />
                            • Worked on Angular Strap Framework and AngularJS Validations and used jQuery core library functions for the
                            logical implementation part at client side for all the applications <br />
                            • Collaborated with designers to create responsive Single Page Applications (SPA) on with Angular 4 Routing. <br />

                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div class="column">
                            <h2>Mildred Mitchell-Bateman Hospital<span className="date">(Jan 2017 – May 2017)</span></h2>
                            <p>• Developed secure views and templates using Django’s Jinja2 templating engine with powerful automatic HTML Escaping, which helps preventing Cross-site Scripting attacks. Bootstrap4 was used to make the pages responsive. <br />
                            • Created Django Forms for the database models, to receive user data and process submitted forms. <br />
                            • Worked on creating RestAPI endpoints for every pages in the app, along with alerting about any new maintenance requests and the pre-registered maintenance dates, using push notifications. <br />
                            • Django ORM was used here to manage all the equipment and user information, over SQL lite 3 DB. <br />

                            </p>
                        </div>
                        <div class="column .logo">
                            &emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;
                            <Img fixed={data.mildred.childImageSharp.fixed} />
                        </div>
                    </div>

                    <div className="row">
                        <div class="column .bcard">
                            <Img fixed={data.wvaquavit.childImageSharp.fixed} />
                        </div>
                        <div class="column">
                            <h2>WV Aquavit<span className="date">(Mar 2016 – May 2016)</span></h2>
                            <p>• Developed a wireless sensor network using Raspberry Pi 3, Arduino and Vernier Water pH sensor to actively report water pH value, of Ohio River, to the project admin via IBM Bluemix and store the values in a MongoDB Database. <br /> </p>
                        </div>
                    </div>

                    <div className="row">
                        <div class="column">
                            <h2>Adroit Technologies<span className="date">(Sept 2012 – Mar 2015)</span></h2>
                            <p>• Designed web interfaces for websites and web applications using Bootstrap, Angular JS/2 and React JS. <br />
                            • Developed web applications with frameworks like Node.js, PHP Laravel, Python Django and Ruby on Rails. <br />
                            • Composed Python scripts to parse documents like XML, Excel, CSV and load the data into database. <br />
                            • Developed a Rails application for the cross functional sharing data between Backend and Frontend. <br />
                            • Experienced in developing single page web applications using web frameworks like React and Angular. <br />

                            </p>
                        </div>
                        <div class="column .logo .adroit">
                            &emsp;&emsp;&emsp;&emsp; <br /><br /><br /><br /><br /><br />
                            &emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;
                            <Img fixed={data.adroit.childImageSharp.fixed} />
                        </div>
                    </div>

                    <div className="row">
                        <div class="column .bcard">
                            <Img fixed={data.skcet.childImageSharp.fixed} />
                        </div>
                        <div class="column">
                            <h2>WV Aquavit<span className="date">(Mar 2016 – May 2016)</span></h2>
                            <p>
                                • Designed a responsive web application to display students academic progress using HTML5/CSS3 and Bootstrap. <br />
                                • The entire student's academic information was stored and managed using PHP/MySQL. <br />
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Exp;
