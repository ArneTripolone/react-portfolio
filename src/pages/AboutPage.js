import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, I'm Arne Tripolone. I have been teaching and performing the violin in Sydney Australia for the last 10 years.</p>

            <p>Now I'm looking to expand my skills and prepare for future work demands by gradually branching into web development.</p>

            </Content>
        </div>
    );

}

export default AboutPage;