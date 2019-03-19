import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({hosts, selectHost, selectedHost}) => {

  return(
    <Card.Group itemsPerRow={6}>
      {hosts.map(host => <Host key={host.id} info={host} selectHost={selectHost} selectedHost={selectedHost}/>)}
    </Card.Group>
  )
}

export default HostList
