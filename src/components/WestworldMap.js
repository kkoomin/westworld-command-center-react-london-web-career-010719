import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = ({areas, hosts, selectHost, selectedHost}) => {

  return (
    <Segment id="map" >
      {areas.map(area => 
      <Area key={area.id} 
            name={area.name} 
            limit={area.limit} 
            auth_req={area.auth_req} 
            hosts={hosts.filter(host => host.area === area.name && host.active === true)} 
            selectHost={selectHost}
            selectedHost={selectedHost}
      />)}
    </Segment>
  )
}

export default WestworldMap
