import React, { Component } from 'react'

import Layout from "../components/layout"
import ContactComponent from "../components/contact";

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
