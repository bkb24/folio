import React from 'react'

const Folio = (props) => {
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
                            <img src={projects['ufo_battles'].main_img_d} alt="UFO Battles main screen" />
                        </div>
                        <div className="hero-project-item">
                            <img src={projects['ufo_battles'].main_img_m} alt="UFO Battles game screen" />
                        </div>
                    </div>

                    <div className="hero-project-col">
                        <div className="hero-project-item">
                            <img src={projects['karo'].main_img_d} alt="Pizza place in Varna" />
                        </div>
                        <div className="hero-project-item">
                            <img src={projects['karo'].main_img_m} alt="Pizza place in Varna mobile screen" />
                        </div>
                        <div className="hero-project-item">
                            <img src={projects['karo'].screens[3].screen} alt="Pizza menu copy" />
                        </div>
                    </div>

                    <div className="hero-project-col">
                        <div className="hero-project-item">
                            <img src={projects['altair'].main_img_d} alt="Pawn shop Altair" />
                        </div>
                        <div className="hero-project-item">
                            <img src={projects['altair'].main_img_m} alt="Pawn shop Altair mobile screen" />
                        </div>
                    </div>

                    <div className="hero-project-col">
                        <div className="hero-project-item">
                            <img src={projects['kostinbrod'].main_img_m} alt="City of Kostinbrod moble screen" />
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

export default Folio
