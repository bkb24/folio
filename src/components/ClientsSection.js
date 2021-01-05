import React from 'react'
import pazarlukImage from '../../content/assets/img/clients/pazarluk.jpg'
import etsImage from '../../content/assets/img/clients/ets.jpg'
import lifeImage from '../../content/assets/img/clients/life.jpg'
import hotelPamporovoImage from '../../content/assets/img/clients/hotel-pamporovo.jpg'

const ClientsSection = () => {

    return (
        <>
            <div className="section-head section-head-clients">
                <h2 className="section-heading text-primary">Clients</h2>
            </div>

            <div className="clients-section">
                <a target="_blank" href="https://pazarluk.com" className="client-item">
                    <img src={pazarlukImage} />
                </a>
                <a target="_blank" href="https://pamporovohotel.com/" className="client-item">
                    <img src={hotelPamporovoImage} />
                </a>
                <a target="_blank" href="https://lifeisbeautiful-festival.com" className="client-item">
                    <img src={lifeImage} />
                </a>
                <a target="_blank" href="https://etseu.eu" className="client-item">
                    <img src={etsImage} />
                </a>
            </div>
        </>
    )

}

export default ClientsSection
