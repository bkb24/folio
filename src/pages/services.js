import React, { Component } from 'react'

import Layout from "../components/layout"
import ServicesComponent from "../components/services";

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
