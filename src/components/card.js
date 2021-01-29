import React from 'react'
import Tilty from 'react-tilty'


function Card(props) {

    const {logoTeam, imageHero, logoHero, message} = props;
    return (
            <div className="item-a card-wrapper">
                <Tilty style={{ transformStyle: 'preserve-3d' }} reset={true}>
                    <div className="box card">
                        <div className="container-logo-team">
                            <img src={logoTeam} className="logoTeam"/>
                        </div>
                        <img src={imageHero} className="model" alt=""/>
                        <div className="details">
                            <img src={logoHero} className="logo" alt=""/>
                            <p>{message}</p>
                        </div>
                    </div>
                </Tilty>
            </div>
    )
}

export default Card;







