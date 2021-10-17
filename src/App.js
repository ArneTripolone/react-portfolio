import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import "bootswatch/dist/journal/bootstrap.min.css"

import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Arne Tripolone',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About Me', path: '/about' },
        { title: 'Work Examples', path: '/work' },
        { title: 'Contact Me', path: '/contact' },
        { title: 'Résumé', path: '/resume' }
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
      },
      resume: {
        title: 'Résumé'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Arne Tripolone</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About Me</Link>
                <Link className='nav-link' to='/work'>Work Examples</Link>
                <Link className='nav-link' to='/contact'>Contact Me</Link>
                <Link className='nav-link' to='/resume'>Résumé</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/work" render={() => <WorkPage title={this.state.work.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/resume" render={() => <ResumePage title={this.state.resume.title} />} />
          
          <Footer />
        
        </Container>
      </Router>
    );
  }
}

export default App;
