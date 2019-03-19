import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = ({info, selectHost, selectedHost}) => {

  return(
    <Card
      className={info === selectedHost ? "host selected" : "host"}/* NOTE: The className "host selected" renders a different style than simply "host". */
      onClick={(event) => selectHost(event, info)}
      image={info.imageUrl}
      raised
    />
  )
}

export default Host
