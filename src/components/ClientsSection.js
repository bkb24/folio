import React from 'react'
import pazarlukImage from '../../content/assets/img/clients/pazarluk.jpg'
import etsImage from '../../content/assets/img/clients/ets.jpg'
import lifeImage from '../../content/assets/img/clients/life.jpg'
import hotelPamporovoImage from '../../content/assets/img/clients/hotel-pamporovo.jpg'
import instatourImage from '../../content/assets/img/clients/instatour.jpg'

const ClientsSection = () => {

    return (
        <>
            <div className="section-head section-head-clients">
                <h2 className="section-heading text-primary">Clients</h2>
            </div>

            <div className="clients-section">
                <a target="_blank" href="https://pazarluk.com" className="client-item">
                    <img src={pazarlukImage} alt="Pazarluk logo" />
                </a>
                <a target="_blank" href="https://pamporovohotel.com/" className="client-item">
                    <img src={hotelPamporovoImage} alt="Hotel Pamporovo logo" />
                </a>
                <a target="_blank" href="https://lifeisbeautiful-festival.com" className="client-item">
                    <img src={lifeImage} alt="Life is Beautiful Festival logo" />
                </a>
                <a target="_blank" href="https://etseu.eu" className="client-item">
                    <img src={etsImage} alt="European Tourist Service logo" />
                </a>
                <a target="_blank" href="https://instatour.bg" className="client-item">
                    <img src={instatourImage} alt="Instatour logo" />
                </a>
            </div>
        </>
    )

}

export default ClientsSection
