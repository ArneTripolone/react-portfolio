import React from 'react'
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
      ]
    }
  }
  
  render() {
    return (
      <div>Hello from React</div>
    )
  }
}

export default App;
