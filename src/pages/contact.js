import React from 'react'

import "./bootstrap.min.css"
import { Header, Banner, Title } from '../components'

export default function Contact() {
    return (
        <>
            <Header />
            <Banner />
            <Title title="Contact Me" />
            <section className="contact py-5">
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-6 mx-auto">
                        <form action="https://formspree.io/guhan.delta@gmail.com" method="POST">
                            {/* name */}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input className="form-control" type="text" placeholder="John Doe" name="name" id="name" />
                            </div>
                            {/* email */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="email" placeholder="johndoe@example.com" name="email" id="email" />
                            </div>
                            {/* desciption */}
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description" className="form-control" rows="5" placeholder="Enter your message here....."></textarea>
                            </div>
                            {/* submit */}
                            <button type="submit" className="btn btn-secondary btn-block text-capitalize mt-5 submitBtn">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
