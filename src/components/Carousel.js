import React from 'react'

import budgie from '../assets/images/budgie.png';
import covidtracker from '../assets/images/covidtracker.png';
import workscheduler from '../assets/images/workscheduler.png';
import readmegenerator from '../assets/images/readmegenerator.png';
import employeetracker from '../assets/images/employeetracker.png';
import opviolinstore from '../assets/images/opviolinstore.png';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Budgie',
                    subTitle: 'Budget forecasting app',
                    imgSrc: budgie,
                    link: 'https://fonyx-budgie.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Covid-19-Tracker',
                    subTitle: 'App to monitor Covid-19 Worldwide',
                    imgSrc: covidtracker,
                    link: 'https://mm-salvodragotta.github.io/Covid-19-Tracker/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Work Scheduler',
                    subTitle: 'App to note your work tasks throughout the workday',
                    imgSrc: workscheduler,
                    link: 'https://github.com/ArneTripolone/work_schedule_app',
                    selected: false
                },
                {
                    id: 3,
                    title: 'README Generator',
                    subTitle: 'App to help generate readme.md files',
                    imgSrc: readmegenerator,
                    link: 'https://github.com/ArneTripolone/readme_generator',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Employee Tracker App',
                    subTitle: 'Employee database app',
                    imgSrc: employeetracker,
                    link: 'https://github.com/ArneTripolone/Employee_Tracker',
                    selected: false
                },
                {
                    id: 5,
                    title: 'OP Violin Shop',
                    subTitle: 'Final project, still in development!',
                    imgSrc: opviolinstore,
                    link: 'https://github.com/ArneTripolone/react-portfolio',
                    selected: false
                },
            ]
        }
    }

    render() {
        return(
            <p>Carousel Works!</p>
        );
    }

}

export default Carousel;