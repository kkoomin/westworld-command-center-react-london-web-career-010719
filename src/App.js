import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';

const hostURL = 'http://localhost:4000/hosts'
const areaURL = 'http://localhost:4000/areas'

class App extends Component {

  state = {
    hosts: [],
    areas: [],
    selectedHost: undefined
  }
  
  componentDidMount() {
    fetch(hostURL)
    .then(res => res.json())
    .then(hostData => this.setState({hosts: hostData}))

    fetch(areaURL)
    .then(res => res.json())
    .then(areaData => this.setState({areas: areaData}))
  }
  
  selectHost = (event, info) => {
    event.persist()
    // const cardDiv = event.target.parentNode
      event.target.parentNode.classList.contains('selected') ? event.target.parentNode.classList.remove('selected') : event.target.parentNode.classList.add('selected')
      event.target.parentNode.classList.contains('selected') ? this.setState({...this.state, selectedHost: info}) : this.setState({...this.state, selectedHost: undefined})
  }

  changeHostStatus = (host) => {
    this.setState({
      ...this.state,
      selectedHost: host
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap 
          hosts={this.state.hosts} 
          areas={this.state.areas} 
          selectedHost={this.state.selectedHost} 
          selectHost={this.selectHost}/>
        <Headquarters 
          hosts={this.state.hosts} 
          areas={this.state.areas} 
          selectedHost={this.state.selectedHost} 
          selectHost={this.selectHost} 
          changeHostStatus={this.changeHostStatus}/>
      </Segment>
    )
  }
}

export default App;
