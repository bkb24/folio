import React from 'react'

const FolioSection = (props) => {
    const { data } = props
    const projects = props.data.reduce((acc, item) => {
        acc[item.short] = item;
        return acc;
    }, {});

    return (
        <div className="hero-screen hero-screen-folio">

            <div className="hero-folio-wrap">

                <div className="hero-projects-list">

                    <div className="hero-project-col">
                        <div className="hero-project-item">
                            <img src={projects['life_is_beautiful'].main_img_d} alt="Festival website menu copy" />
                        </div>
                        <div className="hero-project-item">
                            <img src={projects['hotel_pamporovo'].main_img_m} alt="Hotel Pamporovo mobile screen" />
                        </div>
                    </div>

                    <div className="hero-project-col">
                        <div className="hero-project-item">
                            <img src={projects['hotel_pamporovo'].main_img_d} alt="Hotel Pamporovo special offers page" />
                        </div>
                        <div className="hero-project-item">
                            <img
                                src={projects['pazarluk'].main_img_m}
                                alt="Pazarluk.com online marketplace"
                            />
                        </div>
                        <div className="hero-project-item">
                            <img src={projects['life_is_beautiful'].main_img_m} alt="Festival website menu copy" />
                        </div>
                    </div>

                    <div className="hero-project-col">
                        <div className="hero-project-item">
                            <img src={projects['altair'].main_img_d} alt="Pawn shop Altair" />
                        </div>
                        {/* <div className="hero-project-item"> */}
                            {/* <img src={projects['federation'].main_img_d} alt="Pawn shop Altair mobile screen" /> */}
                        {/* </div> */}
                    </div>

                    <div className="hero-project-col">
                        <div className="hero-project-item">
                            <img src={projects['folio'].main_img_m} alt="Portfolio screen" />
                        </div>
                        <div className="hero-project-item">
                            <img />
                        </div>
                        <div className="hero-project-item">
                            <img src={projects['kostinbrod'].main_img_d} alt="City of Kostinbrod" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-projects-title">
                <div className="hero-projects-cta">
                    <h3 className="hero-projects-text">Scroll down to see more <br /> or click the menu for all</h3>
                </div>
            </div>
        </div>
    )
}

export default FolioSection
