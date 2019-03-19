import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import ColdStorage from './ColdStorage'
import Details from './Details'
import HostInfo from './HostInfo'
import LogPanel from './LogPanel'


const Headquarters = ({hosts, areas, selectedHost, selectHost, changeHostStatus, activateAll, writeLog, logs}) => {

  const decommissionedHost = hosts.filter(host => host.active === false)

  return(
    <Grid celled='internally'>
      <Grid.Column width={8}>
        <ColdStorage 
          decommissionedHost={decommissionedHost} 
          selectHost={selectHost}
          selectedHost={selectedHost}/>
      </Grid.Column>
      <Grid.Column width={5}>
        {selectedHost ? 
          <HostInfo 
            host={selectedHost} 
            hosts={hosts}
            areas={areas} 
            changeHostStatus={changeHostStatus} 
            writeLog={writeLog}/> : 
          <Details />}
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel activateAll={activateAll} logs={logs}/>
      </Grid.Column>
    </Grid>
  )

}

export default Headquarters;
