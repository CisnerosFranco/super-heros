import React, { Component } from 'react';
import Card from '../components/card';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Sala(props) {
    const { herosList } = props;
    let settings = {
      dots : true,
      infinite : true,
      speed : 500,
      slidesToShow : window.innerWidth >700 ? 4 : 1,
      slidesToScroll : 1,
      cssEase : "linear"
    }


    return(
          <div className={"container-cards " + props.className}>
            <Slider {...settings}>        
                { 
                  herosList.map(hero => 
                    <Card key={hero.id} logoTeam={hero.Team} imageHero={hero.Hero} logoHero={hero.Logo} message={hero.Message}/>)
                }
          </Slider>
          </div>
    )
}

export default Sala;