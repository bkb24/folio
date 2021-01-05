import React from 'react'
import Project from './Project'

const Folio = (props) => {
    return (
        <section className="folio-section">
            <div className="section-head-folio">
                <h2 className="projects-heading">Projects</h2>
                <h5 className="projects-subheading">
                    Here is some of my most notable work
                </h5>
            </div>

            {
                props.projects.map((item, i) => {
                    return <Project key={i} project={item} />
                })
            }

            { props.children }
        </section>

    )
}

export default Folio
