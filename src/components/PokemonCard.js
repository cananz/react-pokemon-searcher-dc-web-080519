import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {img: 'front'}
  }

  toggleImg = () => {
    console.log(this.state.img)
    let link = this.state.img === 'front' ? 'back' : 'front'
    this.setState({img: link})
  }

  render() {
    let {sprites, name, stats} = this.props.pokemon
    return (
      <Card>
        <div onClick={this.toggleImg}>
          <div className="image">
            <img
            src={this.state.img === 'front' ? sprites.front : sprites.back}
            alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(stat => stat.name === "hp").value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
