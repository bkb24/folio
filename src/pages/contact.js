import React, { Component } from 'react'

import Layout from "../components/Layout"
import ContactComponent from "../components/Contact";

class Contact extends Component {
    render() {
        return (
            <Layout cssClass="contact-page">
                <ContactComponent />
            </Layout>
        )
    }
}

export default Contact
