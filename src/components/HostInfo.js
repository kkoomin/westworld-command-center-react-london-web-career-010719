import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'

// props = {host, hosts, areas, changeHostStatus, selectedHost}
class HostInfo extends Component {
  state = {
    options: this.props.areas.map(area => {return {key: area.id, text: area.name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), value: area.name}}),
    value: this.props.host.area, // area
  }

  handleChange = (event, {value}) => {
    const selectedArea = this.props.areas.filter(area => area.name === value)[0]
    if (this.props.hosts.filter(host => host.area === value).length < selectedArea.limit) {
      this.props.host.area = value
      this.props.changeHostStatus(this.props.host)
    } else {
      alert("Too many hosts in this area. Try another area.")
    }

  }

  toggle = (event) => {
    this.props.host.active = !this.props.host.active
    event.target.label = this.props.host.active === true ? 'Active' : 'Decommissioned'
    this.props.changeHostStatus(this.props.host)
  }

  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.host.firstName} | { this.props.host.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={ this.props.host.active === true ? "Active" : "Decommissioned"}
                  checked={ this.props.host.active === true ? true : false}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.host.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
