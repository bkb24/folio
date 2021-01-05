import React, { Component } from 'react'

import Layout from "../components/Layout"
import ServicesComponent from "../components/Services";

class Services extends Component {
    render() {
        return (
            <Layout cssClass="services-page">
                <ServicesComponent />
            </Layout>
        )
    }
}

export default Services
