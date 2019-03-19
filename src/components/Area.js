import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList';

const Area = (props) => {

  return (
    <div className='area' id={props.name}>
      <h3 className='labels'>{props.name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h3>
      <HostList key={props.name} hosts={props.hosts} selectHost={props.selectHost} selectedHost={props.selectedHost}/>
    </div>
  )

}
Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
