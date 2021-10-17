import React from 'react';

import Hero from '../components/Hero';
import Arne from '../assets/images/arnetripolonehead.png';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <img src={Arne} height={300} width={275} alt="Arne Tripolone" />
        </div>
    );
}



export default HomePage;