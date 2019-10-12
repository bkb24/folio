import React, { Component } from 'react'

import Layout from "../components/layout"
import FolioComponent from "../components/folio";

class Folio extends Component {
    render() {
        return (
            <Layout cssClass="folio-page">
                <FolioComponent />
            </Layout>
        )
    }
}

export default Folio
