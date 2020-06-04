import React from 'react'

export default function Title({ title }) {
    return (
        <div className="row">
            <div className="col text-center mb-3">
                <h3 className="display-4 text-capitalize font-weight-bold title overline">
                    {title}
                </h3>
            </div>
        </div>
    );
}
