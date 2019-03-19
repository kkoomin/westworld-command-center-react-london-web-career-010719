import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import { Log } from '../src/services/Log.js'

import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';

const hostURL = 'http://localhost:4000/hosts'
const areaURL = 'http://localhost:4000/areas'

class App extends Component {

  state = {
    hosts: [],
    areas: [],
    selectedHost: undefined,
    logs: []
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

  toggleAllActiveStatus = (type) => {
    return this.state.hosts.map(host => { return {...host, active: type}})
  }

  activateAll = (event) => {
    const btn = event.target
    if (btn.classList.contains('red')) {
      btn.innerText = 'Decommission All'
      btn.classList.remove('red')
      btn.classList.add('green')
      this.setState({
        ...this.state,
        hosts: this.toggleAllActiveStatus(true),
        selectedHost: undefined,
        logs: [Log.warn("Activating all hosts!")].concat(this.state.logs)
      })
      
    } else {
      btn.innerText = 'Activate All'
      btn.classList.remove('green')
      btn.classList.add('red')
      this.setState({
        ...this.state,
        hosts: this.toggleAllActiveStatus(false),
        selectedHost: undefined,
        logs: [Log.notify("Decommissiong all hosts.")].concat(this.state.logs)
        })
    }
  }

  writeLog = (log) => {
    this.setState({
      ...this.state,
      logs: [log].concat(this.state.logs)
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
          changeHostStatus={this.changeHostStatus}
          activateAll={this.activateAll}
          writeLog={this.writeLog}
          logs={this.state.logs}/>
      </Segment>
    )
  }
}

export default App;
