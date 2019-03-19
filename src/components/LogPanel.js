import React from 'react'
import { Segment, Button } from 'semantic-ui-react';

class LogPanel extends React.Component {

  render() {
    return(
      <Segment className="HQComps" id="logPanel">
        <pre>
          {this.props.logs.map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
        </pre>
        
        <Button
          fluid
          color={"red"}
          content={"ACTIVATE ALL"}
          onClick={this.props.activateAll}
        /> 
      </Segment>
    )
  }
}

export default LogPanel
