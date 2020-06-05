import React from 'react'
import Experience from '../jsondata/experence.json'
import { Banner, Header } from '../components'
import '../styles/styles.scss'

const Jobs = () => {
    return (
        <>
            <Header />
            <Banner />
            <div className="job-holder">
                {Experience.map((exp, index) => (
                    <>
                        <div className="row">

                            <div class="column">
                                <br /><br />
                                <h2>{exp.client}<span className="date">({exp.daterange})</span></h2>
                                <p>{exp.work}</p>
                            </div>
                        </div>
                        <hr />
                    </>
                )
                )}
            </div>
        </>
    )
}

export default Jobs;
