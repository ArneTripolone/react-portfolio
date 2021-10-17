import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import resume from '../assets/images/Resume.pdf';

function Resume(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <a href={resume} download="Resume.pdf">Click here to download my Résumé</a>
            </Content>
        </div>
    );

}

export default Resume;