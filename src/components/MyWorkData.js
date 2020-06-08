import React from 'react'
import MyWorkData from '../jsondata/MyWorkData.json'

export const MyWork = () => {
    return (
        <>
            {
                MyWorkData.map((work) => (
                    <>
                        <div key={work.id}>
                            <a href={work.link}>
                                <h4>{work.project_name}</h4>
                            </a>
                            <h5>Domain: {work.domain}</h5>
                            <p>{work.description}</p>
                        </div>
                    </>
                ))
            }
        </>
    )
}

