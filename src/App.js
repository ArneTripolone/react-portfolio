import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Arne Tripolone',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About Me', path: '/about' },
        { title: 'Work Examples', path: '/work' },
        { title: 'Contact Me', path: '/contact' }
      ],
      home: {
        title: 'Arne Tripolone',
        subTitle: 'Violinist & Music Educator',
        text: 'Embarking on Web Development'
      },
      about: {
        title: 'About Me'
      },
      work: {
        title: 'Work Examples'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container fluid={true}>
          <p>Hi from React!</p>
        </Container>
      </Router>
    )
  }
}

export default App;
