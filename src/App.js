import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Post from './components/Post'
import { BrowserRouter, Route } from 'react-router-dom'
import Event from './Event';
import AddEvent from './AddEvent';
import './App.css';

class App extends Component {           //Here, there is no React.component as it has been imported above
  state = {
    events : [
      {eventName:'Google Dev', hashtag:'dev', id:1},
      {eventName:'Amazon AWS', hashtag:'aws', id:2}
    ]
  }
  startEvent = (event) => {
    event.id = Math.random();
    let events = [...this.state.events, event];
    this.setState({
      events: events 
    })
  }
  deleteEvent = (id)=> {
    let events = this.state.events.filter(event =>{
      return event.id !== id;
    });
    this.setState({
      events: events 
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/post' component = {Post} />
          <header className="App-header">
            <h2 className="center">Start your live Hashtag event</h2>
            <Event deleteEvent={this.deleteEvent} events={this.state.events} />          {/* This is to tell it what component and what 'prop'(erty) to render in the webpage */}
            <div id="form" className="container">
              <AddEvent startEvent={this.startEvent} />
            </div>
          </header>
        </div>
      </BrowserRouter>
    );  
  }
}

export default App;
