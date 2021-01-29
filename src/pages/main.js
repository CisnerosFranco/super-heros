import React from 'react';

import {  Link, withRouter } from 'react-router-dom'

function Main(props) {
    return(
        <div className="container-main">
            <div className="container-message">
                <span>Seleciona tu equipo de super héros</span>
            </div>
            <div className="container-links">
                {props.links.map(e => 
                    <Link key={e.url} to={e.url} className="sala-link">
                        <img src={e.urlImage} alt=""/>
                    </Link>
                )}
            </div>  
        </div>
    )
}

export default Main;